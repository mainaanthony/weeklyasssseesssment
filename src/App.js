
import React from 'react';
import MainComponent from './components/mainComponent';

const App = () => {
  const theme = 'dark'; // Replace with your desired theme value

  return (
    <div className={`app ${theme}`}>
      <h1>My App</h1>
      <MainComponent theme={theme} />
    </div>
  );
};

export default App;

