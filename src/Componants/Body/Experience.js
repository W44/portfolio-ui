import { FaPython, FaAws, FaDatabase, FaAngular, FaCode, FaCogs } from "react-icons/fa";
import "./Experience.css"

const Experience = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-16 gap-6">

      {/* Image Section - hidden on small screens */}
      <div className="w-full md:w-1/3 h-64 md:h-full overflow-hidden experience-image hidden md:block">
        <img
          src={process.env.PUBLIC_URL + "/exp.jpg"}
          alt="Experience"
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Text Section */}
      <div id="experience" className="w-full md:w-2/3 p-6 md:p-10 bg-gray-900 text-white rounded-lg shadow-lg experience-text">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p className="text-sm text-gray-400">
          04/07/2022 – 07/06/2024 | Lahore, Pakistan -{" "}
          <a
            style={{ color: "#ADD8E6" }}
            href={`${process.env.PUBLIC_URL}/experience_letter.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Experience Letter
          </a>
        </p>
        <h3 className="text-xl font-semibold mt-2">Software Engineer - Strategic Systems International</h3>

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
      </div>
    </div>

  );
};

export default Experience;
