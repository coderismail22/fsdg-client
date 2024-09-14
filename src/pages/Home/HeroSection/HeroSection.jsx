import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // Hero Section
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white p-10  "
      style={{
        backgroundImage: "url('/assets/hero-section-img.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="  relative z-10 container mx-auto px-4 flex flex-col items-center lg:w-1/2">
        <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-tight my-4">
          We assist to achieve the  SDG targets for Bangladesh        </h1>
        {/* <p className="text-center  md:text-xl lg:text-2xl ">
          FSDG is committed to contribute in the journey of achieving UN
          Sustainable Development Goals (SDGs)
        </p> */}
        <Link
          to="/what-we-do"
          className="font-montserrat  text-center text-xl bg-[#c7b362] hover:bg-[#dfc663]  w-full h-[50px] p-2 my-5"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
