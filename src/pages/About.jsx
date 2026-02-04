import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-orange-200 text-gray-800 transition-all duration-300"
    >
      <div className="max-w-4xl mx-auto bg-white/70 rounded-xl shadow-lg p-10 backdrop-blur-md">
        <h2 className="text-4xl font-bold mb-6 border-b4 text-orange-700">
          About Me
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          I'm a Computer Engineer graduated from Tribhuvan University. Currently, I am working at Infinite Computer Solutions. I am passionate about data analytics, backend technologies, and solving real-world problems.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3 text-orange-700">
          Tools & Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-base">
          <li><span className="font-medium">Languages:</span> Python, Java</li>
          <li><span className="font-medium">Frameworks:</span> Django, Spring Boot</li>
          <li><span className="font-medium">Libraries:</span> Pandas, NumPy</li>
          <li><span className="font-medium">Databases:</span> MySQL, Oracle DB</li>
          <li><span className="font-medium">Visualization:</span> Excel, Tableau, Power BI</li>
          <li><span className="font-medium">Version Control:</span> Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
