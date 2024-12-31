import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react"; // Import the arrow icon
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "1",
      title: "KIIT Mart -Quick Commerce",
      description:
        "KIIT Mart is an on-demand marketplace for KIIT University students to easily buy and sell products within their campus. This platform offers secure Google Login using KIIT email ID, detailed product listings, user reviews, and a seamless buying/selling process.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Login",
        "Redux",
        "Tailwind CSS",
        "Material Ui",
      ],
      live_url: "https://kiitmart.vercel.app/",
      code_repo_url:
        "https://github.com/abhishekkumar013/college-marketplace-backend",
    },
    {
      id: "2",
      title: "Thief Detection Alarm",
      description:
        "A real-time object detection system that uses a webcam to identify people and trigger an alarm. Built with React and TensorFlow.js, it uses the COCO-SSD model for detecting human presence in the video feed.",
      technologies: ["React", "Next.js", "TensorFlow.js", "COCO-SSD"],
      live_url: "https://object-detection-system.netlify.app/",
      code_repo_url:
        "https://github.com/abhishekkumar013/Object-Detection-System",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-colors"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.code_repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Show More Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
