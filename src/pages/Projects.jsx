import React from 'react';

const Projects = () => {
  const projectList = [
        {
      title: 'ETL Pipeline for Data Warehousing',
      description: 'A data warehouse and business intelligence project built with Python and SQL.',
      link: 'https://github.com/neharikastha/BI_DW'
    },
    {
      title: 'Employee Attrition Prediction',
      description: 'This project involves building a neural network model to predict employee attrition (whether an employee leaves the company) based on a variety of factors such as age, years worked, and monthly income and more.',
      link: 'https://github.com/neharikastha/EmployeeAttritionPrediction'
    },
    {
      title: 'KhojEvent - Minor Project',
      description: 'An event booking and ticketing platform built with React and Django',
      link: 'https://github.com/neharikastha/KhojEvent-MinorProject'
    },
    {
      title: 'Allure - A shopping platform',
      description: 'A full-stack e-commerce platform built with React and Django.',
      link: 'https://github.com/neharikastha/Allure'
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'A classic Tic Tac Toe game built with React and JavaScript.',
      link: 'https://github.com/neharikastha/tic-tac-toe-game'
    },
    {
      title: 'ATM Simulation System',
      description: 'A simulation of an ATM system built using Java.',
      link: 'https://github.com/neharikastha/ATM-Simulation-System'
    },
    {
      title: 'For more',
      description: 'Visit my GitHub.',
      link: 'https://github.com/neharikastha?tab=repositories'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="space-y-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-600 hover:underline">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;