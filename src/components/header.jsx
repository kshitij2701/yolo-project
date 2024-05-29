import React from "react";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  background: rgba(100, 100, 100, 0.6); /* Greyish background */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Header = () => {
  return (
    <Headers>
      <Title>📷  TSR Web App</Title>
    </Headers>
  );
};

export default Header;
