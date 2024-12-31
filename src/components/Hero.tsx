import React from "react";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hi 👋, I'm Abhishek Kumar
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I am a passionate full-stack developer with a strong background in
              building modern, scalable web applications. Let's collaborate and
              bring your ideas to life.
            </p>
            <div className="space-y-4 mb-8">
              {/* Contact info commented sections remain the same */}
            </div>
            <a
              href="/assets/cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <img
              src="/assets/profile.jpg"
              alt="Developer workspace"
              className="h-96 w-96 shadow-2xl rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
