import { Link } from "react-router-dom";

const JobCircularCard = ({ title, description }) => {
  return (
    <div className="bg-slate-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
      <h3 className="text-2xl font-semibold text-[#4B8F0E] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link
        to="/contact"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-300"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default JobCircularCard;
