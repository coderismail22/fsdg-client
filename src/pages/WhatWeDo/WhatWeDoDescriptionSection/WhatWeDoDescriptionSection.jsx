import { FaArrowDownLong } from "react-icons/fa6";

const WhatWeDoDescriptionSection = () => {
  return (
    <div className="bg-[#113418] py-10 px-6 text-white pointer-events-none">
      <h1 className="font-blinker font-extrabold text-center text-[36px] leading-10  sm:px-16 uppercase mb-6">
        we work to find solutions to most pressing environmental, ecological,
        livelihood and development challenges
      </h1>
      <p className="font-fira text-center mb-10">
        FSDG conducts research as well as implements projects on, but not
        limited to: Natural resource management, Climate change adaptation and
        mitigation, Disaster risk reduction and mitigation, Early warning,
        Adaptive agriculture, Waste management, Livelihoods enhancement, Local
        governance, Institutional development, nutrition, gender, process
        monitoring and evaluation, policy and advocacy all over Bangladesh. All
        interventions of FSDG are strategically managed under the following key
        program areas. These programs encompass a broad spectrum of activities,
        each tailored to address specific challenges and opportunities in their
        respective fields, aligning with FSDG’s overarching goals of sustainable
        development and societal betterment. In doing so, FSDG brings
        governments, NGOs, the UN, international organizations together to
        develop policies and share best practices.
      </p>

      <h1 className="text-center font-palanquin text-[54px] uppercase">
        Our thematic areas
      </h1>
      <p className="flex flex-col justify-center items-center">
        <FaArrowDownLong className="size-10 text-[#E6C231]" />
      </p>
    </div>
  );
};

export default WhatWeDoDescriptionSection;
