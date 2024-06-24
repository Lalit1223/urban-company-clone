import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const CategoryCard = styled(Link)`
  width: 200px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: black;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;

const CategorySection = () => {
  const categories = [
    { name: 'Cleaning', link: '/services/cleaning' },
    { name: 'Plumbing', link: '/services/plumbing' },
    { name: 'Electrician', link: '/services/electrician' },
    { name: 'Salon at Home', link: '/services/salon' },
  ];

  return (
    <CategoryContainer>
      {categories.map(category => (
        <CategoryCard key={category.name} to={category.link}>
          <h2>{category.name}</h2>
        </CategoryCard>
      ))}
    </CategoryContainer>
  );
};

export default CategorySection;
