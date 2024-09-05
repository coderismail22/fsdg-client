import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const PageTitleWithImage = ({ bgImage, pageName }) => {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`, // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center lg:w-1/2 ">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
          {pageName}
        </h1>
        <div className=" text-white flex items-center justify-center gap-2 font-palanquin  text-center text-sm lg:text-xl font-bold leading-tight ">
          <Link to="/" className="text-white-400 opacity-50 hover:opacity-100">
            Home
          </Link>
          <FaChevronRight />
          <p>{pageName}</p>
        </div>
      </div>
    </section>
  );
};

export default PageTitleWithImage;
