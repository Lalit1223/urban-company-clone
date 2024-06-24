import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #ff6347;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #e55337;
  }
`;

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to handle form submission
    // For example, sending the form data to an API or displaying a success message
    console.log('Form submitted');
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows="5" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
