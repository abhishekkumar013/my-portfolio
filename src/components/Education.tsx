import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: "1",
      institution: "Kalinga Institute of Industrial Technology",
      degree: "Bachelor of Technology in Computer Science",
      description: "Currently pursuing a comprehensive curriculum in computer science, focusing on data structures, algorithms, software engineering, and artificial intelligence.",
      startDate: "Aug 2021",
      endDate: "Aug 2025"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 transition-colors">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-300 mt-1">{edu.institution}</h4>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;