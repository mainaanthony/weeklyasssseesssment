
// MainComponent.js
import React from 'react';
import LoginForm from './loginForm.jsx';

const MainComponent = ({ theme }) => {
  const handleFormSubmit = (email, password) => {
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={`main-component ${theme}`}>
      <h1>Main Component</h1>
      <LoginForm onSubmit={handleFormSubmit} theme={theme} />
      <button className={`custom-button ${theme}`}>Click Me</button>
    </div>
  );
};

export default MainComponent;
