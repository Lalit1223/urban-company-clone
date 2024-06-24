// src/pages/ServicesPage.js
import React, { useState, useEffect } from 'react';
import ServiceCard from '../Components/ServiceCard';
import styled from 'styled-components';
import axios from 'axios';

const ServicesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://api.example.com/services'); // Replace with your API endpoint
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <ServicesContainer>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </ServicesContainer>
  );
};

export default ServicesPage;
