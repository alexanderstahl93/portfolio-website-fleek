// Import Assets
import React, { useState } from 'react';
import whale from '../assets/whale.jpg';
import sentiment from '../assets/sentiment_anly.jpg';

const Projects = () => {
    // Define the available categories
    const categories = ['All', 'Blockchain Projects', 'AI Projects'];
  
    // Define the initial state for the selected category
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    // Define the project data with categories
    const projects = [
      {
        name: 'Crypto Whale Tracker',
        category: 'Blockchain Projects',
        description: 'The Crypto Whale Tracker is designed to track large transfers of USDC (USD Coin) tokens on the Ethereum blockchain.',
        image: whale,
        githubLink: 'https://github.com/alexanderstahl93/crypto-whale-tracker'
      },
      {
        name: 'Simple Sentiment Analysis',
        category: 'AI Projects',
        description: 'Python scripts perform sentiment analysis. I used the "textblob" and "newspaper" libraries that allowed me work with natural language processing.',
        image: sentiment,
        githubLink: 'https://github.com/alexanderstahl93/Simple-Sentiment-Text-Analysis-in-Python'
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
        <h2>My Projects</h2>
  
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