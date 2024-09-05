import { useState } from "react";
import { FaImage } from "react-icons/fa";
import img from "/assets/overlay-bg.jpg";

const JoinUsUpperCard = ({ title, description }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="h-full mx-auto w-[300px] xs:w-[500px]  md:w-[550px] lg:w-[750px] flex flex-col items-center justify-between p-10 md:p-5 bg-blue-50 rounded-md">
      {/* Card Image */}
      <div className="max-h-[300px] lg:max-h-[400px] lg:w-[500px] ">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 border border-dashed border-gray-400 rounded-lg shadow-md">
            <FaImage className="size-20 mt-10" />
            <p className="text-2xl text-gray-500 text-center font-medium p-10 ">
              Image Not Available
            </p>
          </div>
        ) : (
          <img
            className="w-full h-full object-cover rounded-lg shadow-md"
            src={img}
            alt="Project Image"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      {/* Card Details */}
      <div className="w-full mt-3 flex flex-col items-center">
        {/* Title */}
        <h1 className="font-montserrat font-bold text-[20px] md:text-[18px] text-center my-2 ">
          {title}
        </h1>
      </div>
      {/* Description */}
      <div className="text-center my-3 text-[#687279] w-full">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JoinUsUpperCard;
