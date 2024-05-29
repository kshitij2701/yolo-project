import React from 'react';
import styled from 'styled-components';
import avatar1 from '../assets/kshitijAvatar.avif'
import avatar2 from '../assets/avatarM.avif'

const DeveloperSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  background-color: #f5f5f5;
`;

const DeveloperCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  padding: 2rem;
  margin: 0 10px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`;

const DeveloperTitle = styled.h2`
  color: #0a0b10;
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: -0.5rem;
    transform: translateX(-50%);
    border-bottom: 2px solid var(--purple);
  }
`;

const DeveloperContent = styled.div`
  color: #0a0b10;
  font-size: 1rem;
  line-height: 1.5;

  a {
    color: var(--purple);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: #8c52b6;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0; /* Adjust padding if necessary */
  background-color: #f5f5f5;
`;

const DeveloperInfo = () => {
  return (
    <>
      <TitleContainer>
        <h1>About the Developer</h1>
      </TitleContainer>
      <DeveloperSection>
        <DeveloperCard>
          <img src = {avatar1} alt="Kshitij Shishodia" />
          <DeveloperTitle>Kshitij Shishodia</DeveloperTitle>
          <DeveloperContent>
            <p>As the lead developer of this Web App, I specialize in web development with a passion for creating interactive and modern web applications.</p>
            <p>This Final Year Project combines the power of machine learning with cutting-edge web technologies, showcasing our dedication to innovation and excellence.</p>
          </DeveloperContent>
        </DeveloperCard>
        <DeveloperCard>
          <img src= {avatar2} alt="Manish" />
          <DeveloperTitle>Manish</DeveloperTitle>
          <DeveloperContent>
            <p>Specializing in both web development and machine learning, I have significantly contributed to the machine learning domain of this project.</p>
            <p>My expertise enhances the integration of intelligent algorithms with modern web technologies, driving the innovative capabilities of our Final Year Project.</p>
           
          </DeveloperContent>
        </DeveloperCard>
      </DeveloperSection>
    </>
  );
};

export default DeveloperInfo;
