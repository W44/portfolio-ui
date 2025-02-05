import { FaPython, FaAws, FaDatabase, FaAngular, FaCode, FaCogs } from "react-icons/fa";
import "./Experience.css"

const Experience = () => {
  return (
    <div className="relative flex items-center justify-center h-screen px-8 py-16">
      
      <div className="relative w-1/3 h-full overflow-hidden experience-image">
        <img
          src={process.env.PUBLIC_URL+"/exp.jpg"}
          alt="Experience"
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Tilted Partition - Now Positioned Properly */}
      {/*<div className="absolute left-1/3 top-0 h-full w-1 bg-gray-600"></div>*/}

      {/* Text Section */}
      <div id="experience" className="relative w-2/3 p-10 bg-gray-900 text-white rounded-lg shadow-lg experience-text">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>

        {/* Experience Details */}
        <p className="text-sm text-gray-400">04/07/2022 – 07/06/2024 | Lahore, Pakistan</p>
        <h3 className="text-xl font-semibold mt-2">Software Engineer - Strategic Systems International</h3>

        {/* Experience Points with Icons */}
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <FaPython className="mr-2 text-yellow-400" /> Backend Developer in Flask - Python
          </li>
          <li className="ml-6 text-gray-300">• Integrating Lambda functions in Flask</li>
          <li className="ml-6 text-gray-300">• Creating and working on RESTful APIs</li>
          <li className="ml-6 text-gray-300">• Implementation and integration of AWS resources</li>

          <li className="flex items-center mt-2">
            <FaCogs className="mr-2 text-blue-400" /> Backend Developer in ASP.NET Core
          </li>
          <li className="ml-6 text-gray-300">• Creating and working on RESTful APIs</li>
          <li className="ml-6 text-gray-300">• Code optimisations and code analysis</li>
          <li className="ml-6 text-gray-300">• Database schema designs</li>

          <li className="flex items-center mt-2">
            <FaAngular className="mr-2 text-red-500" /> Frontend Developer in Angular
          </li>
          <li className="ml-6 text-gray-300">• Working with Angular as a frontend technology</li>
          <li className="ml-6 text-gray-300">• Creation and integration of web pages with backend technology</li>
        </ul>

        {/* Additional Description
        <p className="mt-6 text-gray-300">
          As a developer, I have designed and implemented RESTful APIs using Python and the Flask framework, 
          ensuring seamless communication between services. I worked as a full-stack developer on a microservices 
          architecture-based application, utilizing Angular 15 for the frontend and .NET for the backend. My role 
          included optimizing performance by refining database schemas, improving code, and integrating Elasticsearch.
        </p>
         */}
      </div>
    </div>
  );
};

export default Experience;
