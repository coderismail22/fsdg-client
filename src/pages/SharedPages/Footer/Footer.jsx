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
              FSDG is one of the most recognized pro-environmental national NGOs
              in Bangladesh. It was conceptualized in 1993, from Bangladesh
              Flood Action Plan (FAP16) Environmental Study; and the formal
              journey started in 1994. Since formation, FSDG has been active in
              this field and has drawn attention of relevant local, national and
              international actors including government and funding agencies
              through demonstrating innovations in its approaches and producing
              tangible learning outcomes. On behalf of its General Committee, an
              Executive Committee (EC) governs FSDG. FSDG aims to join with
              others in influencing the national development strategy towards
              directions that support sustainable environment in Bangladesh.
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
        Copyright © 2024 FSDG | Developed by FSDG
      </h1>
    </div>
  );
};

export default Footer;
