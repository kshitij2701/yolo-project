import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import Loader from "./components/loader";
import ButtonHandler from "./components/btn-handler";
import { detect, detectVideo } from "./utils/detect";
import "./style/App.css";
import Header from "./components/header";
import DeveloperInfo from "./components/developerinfo"

const App = () => {
  const [loading, setLoading] = useState({ loading: true, progress: 0 });
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  });

  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const modelName = "yolov8n";

  useEffect(() => {
    tf.ready().then(async () => {
      const yolov8 = await tf.loadGraphModel(
        `${window.location.href}/${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions });
          },
        }
      );

      const dummyInput = tf.ones(yolov8.inputs[0].shape);
      const warmupResults = yolov8.execute(dummyInput);

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolov8,
        inputShape: yolov8.inputs[0].shape,
      });

      tf.dispose([warmupResults, dummyInput]);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="header-info">
      <h2 class='spaceid'>
          YOLOv8 live detection application on browser powered by <code>tensorflow.js</code>
        </h2>
        <h2 class='spaceid'>
          Serving : <code className="code">{modelName}</code>
        </h2>
      </div>

      <main className="main-content">
        {loading.loading && (
          <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>
        )}
        <div className="content">
          <img
            src="#"
            ref={imageRef}
            onLoad={() => detect(imageRef.current, model, canvasRef.current)}
          />
          <video
            autoPlay
            muted
            ref={cameraRef}
            onPlay={() => detectVideo(cameraRef.current, model, canvasRef.current)}
          />
          <video
            autoPlay
            muted
            ref={videoRef}
            onPlay={() => detectVideo(videoRef.current, model, canvasRef.current)}
          />
          <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
        </div>

        <ButtonHandler imageRef={imageRef} cameraRef={cameraRef} videoRef={videoRef} />
      </main>

      <div>
         <DeveloperInfo />
      </div>

      <footer className="footer">
        <p>&copy; 2024 TSR Recognition App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
