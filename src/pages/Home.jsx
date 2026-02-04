// src/pages/Home.jsx
import React from 'react';
import background from '../assets/bg.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Content aligned upper left */}
      <div className="relative z-10 flex h-full items-start justify-start p-24">
        <div className="text-black max-w-md">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Hi, I'm Neharika</h2>
          <p className="text-xl drop-shadow-md">
            A passionate and driven learner in the field of data analytics and business intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
