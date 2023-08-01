// Import Assets
import React, { useState } from 'react';
import whale from '../assets/whale.jpg';
import sentiment from '../assets/sentiment_anly.png';
import ethereumpic from '../assets/ethereum.png';
import bitcoinlstm from '../assets/bitcoinlstm.png';
import breastcancer from '../assets/breastcancer.png';
import streamlit from '../assets/streamlitapp.jpg';

const Projects = () => {
    // Define the available categories
    const categories = ['All', 'Blockchain Projects', 'AI Projects'];
  
    // Define the initial state for the selected category
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    // Define the project data with categories
    const projects = [
      {
        name: 'Demand Forecasting',
        category: 'AI Projects',
        description: 'The scripts use a combination of ML and data analysis techniques for business analytics and forecasting in a B2C Solar Energy Company.',
        image: streamlit,
        githubLink: 'https://github.com/alexanderstahl93/aienergybusinessapp'
      },
      {
        name: 'Crypto Whale Tracker',
        category: 'Blockchain Projects',
        description: 'The Crypto Whale Tracker is designed to track large transfers of USDC (USD Coin) tokens on the Ethereum blockchain.',
        image: whale,
        githubLink: 'https://github.com/alexanderstahl93/crypto-whale-tracker'
      },
      {
        name: 'Breast Cancer Prediction',
        category: 'AI Projects',
        description: 'The script is a step-by-step guide for training and evaluating a LRM to predict the diagnosis of breast tumors.',
        image: breastcancer,
        githubLink: 'https://github.com/alexanderstahl93/Breast-Cancer-Diagnosis-Prediction'
      },
      {
        name: 'Sentiment Analysis',
        category: 'AI Projects',
        description: 'This script performs sentiment analysis. I used the two libraries that allowed me work with natural language processing.',
        image: sentiment,
        githubLink: 'https://github.com/alexanderstahl93/Simple-Sentiment-Text-Analysis-in-Python'
      },
      {
      name: 'Simple Ethereum Wallet',
      category: 'Blockchain Projects',
      description: 'A simple Ethereum wallet project using Truffle, Solidity, and Web3.js. Smart contract with a interaction via a web interface.',
      image: ethereumpic,
      githubLink: 'https://github.com/alexanderstahl93/ethereumwallet'
    },
    {
      name: 'BTC Price Prediction',
      category: 'AI Projects',
      description: 'This project uses a LSTM model, a type of recurrent neural network, to predict the future price of Bitcoin.',
      image: bitcoinlstm,
      githubLink: 'https://github.com/alexanderstahl93/Bitcoin-Price-Prediction-with-LSTM'
    },
      // Add more project entries here
    ];
  
    // Handle category selection
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };
  
    // Filter projects based on the selected category
    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);
  
    return (
      <section className="projects">
        <h2>Personal Projects</h2>
        <div className="filter">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" value={selectedCategory} onChange={(e) => handleCategorySelect(e.target.value)}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
  
        <div className="projects__cards">
          {filteredProjects.map(project => (
            <div className="projects__card" key={project.name}>
              <h3>{project.name}</h3>
              <h4 category>{project.category}</h4> 
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;