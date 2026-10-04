import React from "react";
import background from "../assets/about_bg.png"; // adjust path as needed

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-cover bg-center px-3"
      style={{ backgroundImage: `url(${background})` }}
    >
        <div className="max-w-xl mx-auto bg-white/70 rounded-xl shadow-lg p-10 backdrop-blur-md text-gray-800
                md:translate-x-25">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-orange-700 inline-block">
          About Me
        </h2>

        <p className="mb-6 text-lg leading-relaxed">
          I am a Computer Engineer graduated from Tribhuvan University. I am
          passionate about data and backend technologies.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3 text-orange-700">
          Tools & Technologies
        </h3>

        <ul className="list-disc list-inside space-y-2 pl-4 text-base">
          <li>
            <span className="font-medium">Languages:</span> Python, Java
          </li>
          <li>
            <span className="font-medium">Frameworks:</span> Django, React,
            Spring Boot
          </li>
          <li>
            <span className="font-medium">Libraries:</span> Pandas, NumPy
          </li>
          <li>
            <span className="font-medium">Databases:</span> MySQL, Oracle DB, SQL
            Server
          </li>
          <li>
            <span className="font-medium">Visualization:</span> Excel, Tableau,
            Power BI
          </li>
          <li>
            <span className="font-medium">Version Control:</span> Git & GitHub
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
