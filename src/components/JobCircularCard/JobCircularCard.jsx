const JobCircularCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-[#4B8F0E] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
    </div>
  );
};

export default JobCircularCard;
