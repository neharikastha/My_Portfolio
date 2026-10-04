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
      <div className="relative z-14 flex h-full items-start justify-start p-28">
        <div className="text-black max-w-md">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Hi, I'm Neharika</h1>
          <p className="text-xl drop-shadow-md">
            A passionate and driven learner in the field of data and web development. I am an aspiring data scientist with a keen interest in leveraging data and AI to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
