const Profile = () => {
  return (
    <div>
      <div className="md:p-5">
        {/* Title and Description */}
        <div className=" mb-5">
          <h1 className="font-palanquin text-[30px] font-bold text-center my-3">
            Profile
          </h1>
          <p className="font-lato text-[17px] text-justify  mb-2">FSDG (Foundation for Supporting Development Goal) is a Non-government Organization (NGO) registered under Joint Stock Company, Bangladesh in 2016. FSDG has been working to support the most marginalized population in Mymensingh, Barisal, Jhalkati and Panchagarh with safe water, shelter and agriculture.</p>
          <p className="font-lato text-[17px] text-justify  ">FSDG took part in the recent flood response that devastated the south-eastern part of Bangladesh. FSDG is now taking preparation for the early recovery and recovery phase for the affected indigenous population in Khagrachhari district. </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
