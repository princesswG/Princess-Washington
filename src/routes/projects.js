import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My First Project",
      description: "An amazing project showcasing my skills in design and development.",
      image: "https://picsum.photos/400/250?random=1",
    },
    {
      id: 2,
      title: "My Second Project",
      description: "A beautiful web application built with React and modern design principles.",
      image: "https://picsum.photos/400/250?random=2",
    },
    {
      id: 3,
      title: "My Third Project",
      description: "An innovative solution that combines UI/UX design with frontend development.",
      image: "https://picsum.photos/400/250?random=3",
    },
    {
      id: 4,
      title: "Fourth Project",
      description: "Responsive design project showcasing modern web practices.",
      image: "https://picsum.photos/400/250?random=4",
    },
    {
      id: 5,
      title: "Fifth Project",
      description: "Interactive dashboard with real-time data visualization.",
      image: "https://picsum.photos/400/250?random=5",
    },
    {
      id: 6,
      title: "Sixth Project",
      description: "E-commerce platform with seamless user experience.",
      image: "https://picsum.photos/400/250?random=6",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl opacity-90">
            A collection of my recent work and creative projects
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition flex items-center">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm always open to discussing new projects, creative ideas, and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </>
  );
}