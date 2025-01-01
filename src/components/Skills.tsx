import React from "react";
import { Code2, Database, Wrench, CodeIcon } from "lucide-react";

const Skills = () => {
  const skills = {
    languages: ["C++", "C", "JavaScript", "Java"],
    frameworks: ["React", "Node.js", "Express", "Next.js", "Redux"],
    databases: ["SQL", "MongoDB", "PostgreSQL", "GraphQL", "Prisma"],
    tools: ["Git", "Firebase", "Postman", "Vs Code", "Android Studio"],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="flex items-center mb-4">
              <CodeIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Languages
              </h3>
            </div>
            <ul className="space-y-2">
              {skills.languages.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="flex items-center mb-4">
              <Code2 className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Frameworks
              </h3>
            </div>
            <ul className="space-y-2">
              {skills.frameworks.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Databases
              </h3>
            </div>
            <ul className="space-y-2">
              {skills.databases.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
            <div className="flex items-center mb-4">
              <Wrench className="h-6 w-6 text-orange-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tools
              </h3>
            </div>
            <ul className="space-y-2">
              {skills.tools.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
