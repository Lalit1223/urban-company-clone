// src/components/ServiceCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 200px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <ServiceImage src={service.image} alt={service.name} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>${service.price}</p>
    </Card>
  );
};

export default ServiceCard;
