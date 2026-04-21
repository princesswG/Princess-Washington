import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 bg-orange-100 rounded-full overflow-hidden shadow-lg">
              <img
                src="profile.jpg"
                alt="Princess B Washington"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Princess B Washington
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Graduate • UI/UX Designer • Frontend Developer
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            I'm passionate about creating beautiful digital experiences and building websites 
            that make a difference. Dedicated to inspiring women in tech and design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

