"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AboutForm: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animasi hanya berjalan satu kali
    });
  }, []);

  return (
    <div className="space-y-8">
      {/* Banner Section */}
      <div className="relative flex flex-col items-center">
        <img
          src="/image/profile/maromi.jpeg"
          alt="Banner"
          className="w-full h-72 object-cover"
        />
        <div className="absolute -bottom-16">
          <img
            src="/image/profile/maromi.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-2 text-gray-700">
          Hello! I am [Your Name], a passionate software developer with
          experience in building web applications using modern technologies. I
          enjoy solving complex problems and continuously learning new skills to
          improve my craft.
        </p>
      </div>

      {/* Social Media Section */}
      <div className="text-center">
        <h3 className="text-xl font-semibold">Social Media</h3>
        <ul className="list-none mt-4 flex space-x-6 justify-center">
          <li>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaInstagram size={24} />
            </a>
          </li>
        </ul>
      </div>

      {/* Career Section */}
      <section className="career section" id="profile">
        <h2 className="text-xl font-bold text-center mb-6" data-aos="fade-right">
          VTuber Project History
        </h2>
        <div className="container mx-auto">
          {/* Timeline Container */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 before:content-[''] before:absolute before:w-1 before:bg-gray-300 before:top-0 before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2">
            {/* Career Items */}
            {[
              {
                title: "GameWith✕AttendMe主催「鈴蘭の剣」PRイベント参加",
                date: "2006-now",
                aos: "flip-left",
              },
              {
                title: "第5回GameWith✕AttendMe主催「勝利の女神:NIKKE」PRイベント参加",
                date: "2015-now",
                aos: "flip-right",
              },
              {
                title: "第3回GameWith✕AttendMe主催「勝利の女神:NIKKE」PRイベント参加",
                date: "2006-now",
                aos: "flip-left",
              },
              {
                title: "どこでもキャッチャー様グッズコラボ",
                date: "2015-now",
                aos: "flip-right",
              },
              {
                title: "勝利の女神:NIKKE×Gmae8コラボイベント参加",
                date: "2006-now",
                aos: "flip-left",
              },
              {
                title: "ときめきVR　新年イベント",
                date: "2015-now",
                aos: "flip-right",
              },
              {
                title: "Vtu\"Bar\"　トークイベント",
                date: "2006-now",
                aos: "flip-left",
              },
              {
                title: "どこでもキャッチャー様PR",
                date: "2015-now",
                aos: "flip-right",
              },
            ].map((career, index) => (
              <div
                key={index}
                className={`relative p-6 bg-white rounded-lg shadow-lg ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
                data-aos={career.aos}
              >
                <h3 className="career__title text-lg font-semibold">
                  {career.title}
                </h3>
                <div className="text-sm text-gray-500 mt-2 flex items-center space-x-2">
                  <i className="ri-calendar-fill text-gray-400"></i>
                  <span>{career.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutForm;
