import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  background-size: cover;
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  margin-top: 1rem;
  background-color: #ff6347;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #e55337;
  }
`;

const HeroSection = () => {
  return (
    <Hero>
      <HeroText>
        <h1>Professional Services at Your Doorstep</h1>
        <p>Book the best services for your home and office needs.</p>
        <HeroButton>Explore Services</HeroButton>
      </HeroText>
    </Hero>
  );
};

export default HeroSection;
