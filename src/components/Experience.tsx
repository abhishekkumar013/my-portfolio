import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "1",
      company: "Celebal Technologies",
      companyWebsite: "https://celebaltech.com/",
      role: "Node.js Developer",
      startDate: "June 2024",
      endDate: "July 2024",
      technologies: ["Node.js", "Express"],
      keyResponsibilities: [
        "Implemented RESTful APIs using Node.js and Express.",
        "Integrated third-party services and APIs to enhance application functionality."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <a
                    href={exp.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mt-1"
                  >
                    <Building2 className="h-4 w-4 mr-1" />
                    {exp.company}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {exp.keyResponsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;