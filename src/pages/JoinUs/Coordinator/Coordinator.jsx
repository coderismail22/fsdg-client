const Coordinator = () => {
  return (
    <div className="p-5 md:p-24">
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2 md:justify-center">
        <div>
          <p className="font-lato text-[15px] xl:text-[20px] text-[#687279]">
          I am deeply thankful to all the change-makers at FSDG. Their
            dedication has been crucial in reaching our goals. Without their
            tireless efforts, our impact would not be possible. Their
            contributions have paved the way for significant progress in our
            mission.
          </p>
          <p className="font-montserrat font-extrabold text-[15px] mt-5 md:mt-10">
           Firoj Alam, Chairperson, FSDG
          </p>
        </div>
        <div>
          <img
            className="w-full md:w-[80%] rounded-lg"
            src="/assets/firoj_alam.jpg"
            alt="ED-Sir"
          />
        </div>
      </div>
    </div>
  );
};

export default Coordinator;
