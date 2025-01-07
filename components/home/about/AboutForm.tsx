"use client";

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AboutForm: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative flex flex-col items-center">
        {/* Banner */}
        <img
          src="/image/profile/maromi.jpeg"
          alt="Banner"
          className="w-full h-72 object-cover"
        />
        {/* Profile Picture */}
        <div className="absolute -bottom-16">
          <img
            src="/image/profile/maromi.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
      {/* Tambahkan padding untuk mencegah teks tertimpa */}
      <div className="pt-12 text-center">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-2 text-gray-700">
          Hello! I am [Your Name], a passionate software developer with experience in building web applications using modern technologies. I enjoy solving complex problems and continuously learning new skills to improve my craft.
        </p>
      </div>
      {/* Social Media Section */}
      <div className="text-center">
        <h3 className="text-xl font-semibold">Social Media</h3>
        <ul className="list-none mt-4 flex space-x-6 justify-center">
          <li>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <FaInstagram size={24} />
            </a>
          </li>
        </ul>
      </div>
      {/* Skills Section */}
      <div>
        <h3 className="text-xl font-semibold">Skills</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>HTML / CSS / Tailwind CSS</li>
          <li>Git / GitHub</li>
        </ul>
      </div>
      {/* Experience Section */}
      <div>
        <h3 className="text-xl font-semibold">Experience</h3>
        <p className="mt-2 text-gray-700">
          I have worked on various projects ranging from small business websites to large-scale web applications. My experience includes working with cross-functional teams to deliver high-quality software solutions.
        </p>
      </div>
      {/* Education Section */}
      <div>
        <h3 className="text-xl font-semibold">Education</h3>
        <p className="mt-2 text-gray-700">
          I hold a degree in Computer Science from [Your University], where I gained a strong foundation in software development principles and practices.
        </p>
      </div>
    </div>
  );
};

export default AboutForm;
