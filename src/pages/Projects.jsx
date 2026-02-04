import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Airbnb Price Predictor',
      description: 'Built a regression model using Scikit-learn to predict Airbnb prices based on location and amenities.',
      link: 'https://github.com/yourname/airbnb-price-predictor'
    },
    {
      title: 'COVID-19 Dashboard',
      description: 'Designed an interactive Tableau dashboard showing real-time COVID-19 stats by country.',
      link: 'https://public.tableau.com/'
    },
    {
      title: 'Sentiment Analysis on Tweets',
      description: 'Used NLP techniques to classify tweet sentiments using a logistic regression model.',
      link: 'https://github.com/yourname/tweet-sentiment-nlp'
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