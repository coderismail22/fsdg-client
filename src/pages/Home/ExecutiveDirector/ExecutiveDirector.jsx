const ExecutiveDirector = () => {
  return (
    <div className="p-5 md:p-24">
      <h1 className="font-redhat font-extrabold text-[50px] leading-tight text-center my-10 md:my-16">
        Words from our <br /> Chairperson
      </h1>
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div>
          <img
            className="w-full md:w-[80%]"
            src="/assets/firoj_alam.jpg"
            alt="ED-Sir"
          />
        </div>
        <div>
          <h1 className="font-yeseva text-[30px] md:text-[25px]">
            &quot;I am wholeheartedly grateful to all the change-makers of FSDG
            working at different levels&quot;
          </h1>
          <p className="font-lato text-[15px] xl:text-[20px] text-[#687279] my-5">
            I am deeply thankful to all the change-makers at FSDG. Their
            dedication has been crucial in reaching our goals. Without their
            tireless efforts, our impact would not be possible. Their
            contributions have paved the way for significant progress in our
            mission.
          </p>
          <p className="font-montserrat font-extrabold text-[15px]">
            Firoj Alam <br /> Chairperson, FSDG
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDirector;
