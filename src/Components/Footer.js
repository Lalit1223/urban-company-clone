// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Urban Company Clone. All Rights Reserved.</p>
      <p>
        <a href="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</a> | 
        <a href="/terms-of-service" style={{ color: 'white' }}>Terms of Service</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
