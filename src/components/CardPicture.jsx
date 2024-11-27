import React from "react";
import image1 from '../assets/sidcup.png'; 
import image2 from '../assets/sundown.png' ;
import image3 from '../assets/SidcupGolf.png' ;
import image4 from '../assets/EMS.png'; 
import image5 from '../assets/e1.png' ;
import image6 from '../assets/sundow.png' ;
const CardPicture = () => {
  return (
    <div className=" py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Portfolio 
     </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
          <img
            src={image1}
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Using Javascript
            </h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project goes here. It highlights the key features and technologies used.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              View Project
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
          <img
            src={image2}
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              Using React
            </h3>
            <p className="text-gray-600 mb-4">
              This project focuses on delivering exceptional user experiences through innovative solutions.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              View Project
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
          <img
            src={image3}
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
            Using Javascript
            </h3>
            <p className="text-gray-600 mb-4">
              An innovative solution that showcases creativity and technical expertise.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              View Project
            </button>
          </div>
        </div>
        {/* card4 */}
         
         <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
          <img
            src={image4}
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
            Employee Management System
            </h3>
            <p className="text-gray-600 mb-4">
              An innovative solution that showcases creativity and technical expertise.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              View Project
            </button>
          </div>
        </div>
         {/* Card 5 */}
         <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
          <img
            src={image5}
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
            Employee Management System
            </h3>
            <p className="text-gray-600 mb-4">
              An innovative solution that showcases creativity and technical expertise.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              View Project
            </button>
          </div>
        </div>
         {/* Card 6 */}
         <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
          <img
            src={image6}
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">
            Using Javascript
            </h3>
            <p className="text-gray-600 mb-4">
              An innovative solution that showcases creativity and technical expertise.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPicture;
