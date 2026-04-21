import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-orange-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-700">
            Get to know me better and discover my journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg bg-orange-100">
                <img
                  src="profile.jpg"
                  alt="Princess B Washington"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Hi! I'm Princess B Washington
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I'm a passionate graduate, Figma designer, and frontend developer with a mission 
                to create beautiful, functional digital experiences. My journey in tech has been 
                fueled by a deep love for coding, UI design, and website development.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I believe that with dedication and continuous learning, I can become one of the 
                best female Figma designers and developers in my country. More importantly, I'm 
                committed to inspiring other women to pursue careers in coding and programming.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding or designing, you'll find me exploring new design trends, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Languages I Know</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "English", level: "Fluent" },
                { name: "French", level: "Intermediate" },
                { name: "Spanish", level: "Basic" },
              ].map((lang) => (
                <div key={lang.name} className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{lang.name}</h3>
                  <p className="text-gray-700 font-semibold">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Design Skills</h2>
            <div className="space-y-6">
              {[
                { skill: "Figma", rating: 95 },
                { skill: "UI/UX Design", rating: 90 },
                { skill: "Prototyping", rating: 88 },
                { skill: "Wireframing", rating: 85 },
                { skill: "Visual Design", rating: 92 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">{item.skill}</span>
                    <span className="text-orange-600 font-bold">{item.rating}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-orange-400 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${item.rating}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Development Skills</h2>
            <div className="space-y-6">
              {[
                { skill: "React", rating: 90 },
                { skill: "JavaScript", rating: 88 },
                { skill: "HTML & CSS", rating: 95 },
                { skill: "Tailwind CSS", rating: 92 },
                { skill: "Responsive Design", rating: 93 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">{item.skill}</span>
                    <span className="text-orange-600 font-bold">{item.rating}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-orange-400 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${item.rating}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-orange-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

