const HomeCard = ({ card }) => {
  const { image, title, description } = card;
  return (
    <div className="grid gap-5 md:grid-cols-2 justify-center items-center  md:flex-row md:col-span-2 p-5">
      {/* Image */}
      <div className="col-span-1">
        <img
          src={image}
          alt="birds"
          className="w-[100%] h-[300px] object-cover object-center"
        />
      </div>

      <div className="col-span-1 bg-slate-100 md:bg-white rounded-md p-5 text-center md:text-left ">
        {/* Text */}
        <h1 className="font-oswald font-extrabold text-[#2C5B1A] text-3xl  mb-3">
          {title}
        </h1>
        <p className="font-lato text-[14px] md:text-[15px] text-[#7a7f84] mb-3 md:max-w-96">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
