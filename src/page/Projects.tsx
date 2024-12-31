import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: "1",
      title: "KIIT Mart",
      shortDescription:
        "A campus marketplace for KIIT University students with secure authentication and seamless trading.",
      fullDescription:
        "KIIT Mart is an innovative on-demand marketplace specifically designed for KIIT University students, enabling seamless buying and selling within the campus community. The platform features secure Google Login integration using KIIT email IDs, comprehensive product listings with detailed information, and a robust user review system. Users can easily navigate through products with advanced search and filtering capabilities. The platform prioritizes security and user experience, with plans for implementing secure payment integration to enhance transaction convenience and reliability. Built with modern technologies, it offers a responsive interface and real-time updates.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Login",
        "Redux",
        "Tailwind CSS",
        "Material UI",
      ],
      live_url: "https://kiitmart.vercel.app/",
      code_repo_url:
        "https://github.com/abhishekkumar013/college-marketplace-backend",
      cover: "/assets/kiitmart.png",
    },
    {
      id: "2",
      title: "Thief Detection Alarm",
      shortDescription:
        "Real-time security system using AI for human detection and automated alerts.",
      fullDescription:
        "This cutting-edge security solution leverages TensorFlow.js and the COCO-SSD model to provide real-time human detection through webcam feeds. The system automatically triggers audio alerts upon detecting human presence, making it ideal for security applications. Features include real-time video processing with visual bounding boxes for detected persons, customizable audio alerts, and an intuitive interface. The project demonstrates practical application of machine learning in security systems, with future plans including adjustable detection sensitivity, multi-camera support, mobile app integration, and seamless connection with existing home security infrastructure.",
      technologies: ["React", "Next.js", "TensorFlow.js", "COCO-SSD"],
      live_url: "https://object-detection-system.netlify.app/",
      code_repo_url:
        "https://github.com/abhishekkumar013/Object-Detection-System",
      cover: "/assets/project_5.png",
    },
    {
      id: "3",
      title: "ChatBot",
      shortDescription:
        "AI-powered chatbot with natural language processing and conversation memory.",
      fullDescription:
        "An advanced conversational AI system powered by the Gimini API, offering natural and context-aware interactions. The frontend is built with React, providing a smooth and intuitive chat interface. The Node.js backend efficiently handles API communication and data management, while MongoDB stores conversation histories and user data for personalized experiences. The integration with Gimini API enables sophisticated natural language understanding and generation, resulting in more meaningful and context-aware responses. Features include real-time messaging, conversation history tracking, and intelligent query handling. Future enhancements will introduce multi-language support, user authentication, and third-party service integrations.",
      technologies: ["React", "Node.js", "MongoDB", "Gimini API"],
      live_url: "https://chatabhi.vercel.app/",
      code_repo_url: "https://github.com/abhishekkumar013/chatbot-server",
      cover: "/assets/project_6.png",
    },
    {
      id: "4",
      title: "Stream Master",
      shortDescription:
        "Comprehensive video streaming platform with advanced user management.",
      fullDescription:
        "Stream Master is a sophisticated Node.js application providing extensive functionality for video content management. The platform implements secure user authentication using JWT tokens and bcrypt password hashing. It features comprehensive APIs for managing users, video content, playlists, subscriptions, likes, and comments. The application utilizes MongoDB with advanced aggregation pipelines for efficient data retrieval and complex queries. The system supports user engagement through interactive features while maintaining high performance and scalability.",
      technologies: [
        "JavaScript",
        "Node",
        "MongoDB",
        "Express",
        "Bcrypt",
        "JWT",
      ],
      live_url: "",
      code_repo_url: "https://github.com/abhishekkumar013/StreamMaster",
      cover: "/assets/project_1.webp",
    },
    {
      id: "5",
      title: "E-commerce",
      shortDescription:
        "Full-featured online marketplace with multi-vendor support.",
      fullDescription:
        "A comprehensive e-commerce solution that enables both shopkeepers and buyers to participate in online commerce. The platform features secure user authentication, detailed product catalogs, and shopping cart functionality. Shopkeepers can manage their inventory, track orders, and handle customer interactions, while buyers enjoy a seamless shopping experience with easy product browsing, cart management, and checkout processes. The system implements real-time inventory updates and order tracking, ensuring smooth operations for all users.",
      technologies: [
        "JavaScript",
        "React.js",
        "Ant Design",
        "Node.js",
        "MongoDB",
      ],
      live_url: "",
      code_repo_url: "https://github.com/abhishekkumar013/E-commerce",
      cover: "/assets/project_2.png",
    },
    {
      id: "6",
      title: "Doctor Appointment System",
      shortDescription:
        "Healthcare platform connecting patients with doctors through scheduled appointments.",
      fullDescription:
        "A comprehensive healthcare appointment management system facilitating seamless connection between patients and doctors. The platform features user account creation for patients, appointment scheduling capabilities, and a sophisticated doctor application process with admin approval workflow. The system implements role-based access control, appointment tracking, and notification systems. Additional features include medical history management, appointment reminders, and detailed doctor profiles, creating an efficient healthcare scheduling ecosystem.",
      technologies: [
        "JavaScript",
        "React",
        "Node",
        "Ant Design",
        "Redux",
        "MongoDB",
      ],
      live_url: "",
      code_repo_url:
        "https://github.com/abhishekkumar013/Doctor-Appointment-System",
      cover: "/assets/project_3.png",
    },
    {
      id: "7",
      title: "Notes App",
      shortDescription:
        "Intuitive note-taking application with persistent storage.",
      fullDescription:
        "A user-friendly note-taking application that combines simplicity with functionality. The app provides essential CRUD operations for managing notes, with data persistence through local storage to maintain notes across sessions. Features include rich text editing, note categorization, search functionality, and a clean, intuitive user interface. The application focuses on providing a smooth user experience while ensuring data reliability and easy access to stored information.",
      technologies: ["JavaScript", "React", "Material UI"],
      live_url: "https://notes-app-ten-umber.vercel.app/",
      code_repo_url: "https://github.com/abhishekkumar013/Notes-App",
      cover: "/assets/project_4.png",
    },
    {
      id: "8",
      title: "React Popup Toast",
      shortDescription:
        "Customizable notification system for React applications.",
      fullDescription:
        "A versatile and lightweight toast notification package for React applications, published on npm. This component library offers developers easy integration of customizable toast notifications with various positioning options and animations. The package supports different notification types, custom styling, and responsive design. Built with TypeScript for type safety and better development experience, it provides a simple API for managing notifications in React applications while maintaining high performance and minimal bundle size.",
      technologies: ["TypeScript", "React", "npm"],
      live_url: "https://www.npmjs.com/package/react-popup-toast",
      code_repo_url: "https://github.com/abhishekkumar013/react-popup-toast",
      cover: "/assets/project_7.png",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-colors h-full flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {expandedId === project.id
                    ? project.fullDescription
                    : project.shortDescription}
                </p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      )}
                      <a
                        href={project.code_repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId === project.id ? null : project.id
                        )
                      }
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      {expandedId === project.id ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          More
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
