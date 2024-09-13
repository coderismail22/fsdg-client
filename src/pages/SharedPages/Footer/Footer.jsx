const Footer = () => {
  return (
    <div className="p-10 md:p-15 lg:p-20 bg-[#111518] ">
      <div className="lg:flex gap-10 justify-between">
        <div className="max-w-[1100px] mb-10">
          <h1 className="font-bold text-xl text-[#EDEFF2] mb-[36px]">
            FSDG | A Non-profit Organisation
          </h1>
          <div>
            <p>
              <img
                src="/assets/fsdg.jpg"
                alt="FSDG Logo"
                className="float-left w-16 h-16 mr-4"
              />
            </p>
            <p className="text-[#687279]">
              FSDG (Foundation for Supporting Development Goal) is a Non-government Organization (NGO) registered under Joint Stock Company, Bangladesh in 2016. FSDG has been working to support the most marginalized population in Mymensingh, Barisal, Jhalkati and Panchagarh with safe water, shelter and agriculture.
            </p>
          </div>
        </div>
        <div className="min-w-56 text-[#687279]">
          <h1 className="font-bold">Our Office Address:</h1>
          <p>
            Dhaka, Bangladesh <br />
          </p>
          <p className="mt-10">Tel: +880 1714-006476</p>
        </div>
      </div>
      <hr className="mt-5" />
      <h1 className="flex-1 mt-5 text-[#687279] ">
        Copyright © {new Date().getFullYear()} FSDG | Developed by FSDG
      </h1>
    </div>
  );
};

export default Footer;
