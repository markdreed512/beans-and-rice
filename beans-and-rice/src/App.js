import React from 'react';
import './App.css';
import ChooseMealPage from './pages/ChooseMealPage/index.js';
import Header from './components/Header/index.js';

function App() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <ChooseMealPage />
      </div>
    </div>
  );
}

export default App;
