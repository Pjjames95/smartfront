import React from "react";
import { useNavigate } from "react-router-dom";
import '../Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="fade-in min-h-screen flex flex-col items-center justify-center">
      <h1 className="home-title mb-4">Welcome to SmartCampus</h1>
      <p className="home-subtitle mb-8">Please select an option to get started:</p>
      <div className="button-container">
        <button 
          className="auth-button"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
<br/>
<br/>
        <button 
          className="auth-button"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;