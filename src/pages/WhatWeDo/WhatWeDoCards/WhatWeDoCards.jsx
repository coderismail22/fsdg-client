import WhatWeDoCard1 from "../../../components/WhatWeDoCard1/WhatWeDoCard1";
import WhatWeDoCard2 from "../../../components/WhatWeDoCard2/WhatWeDoCard2";

// card-type-1 imports
import birds from "../../../../public/assets/birds.jpg";
import sugarcaneman from "../../../../public/assets/sugarcane-man.jpg";
import grandma from "../../../../public/assets/vegetable-grandma.jpg";

// card-type-2 imports
import disaster from "../../../../public/assets/whatwedo-disaster.jpg";
import health from "../../../../public/assets/whatwedo-health.png";
import child from "../../../../public/assets/whatwedo-child.jpg";
import institutional from "../../../../public/assets/whatwedo-institution.jpg";
const WhatWeDoCards = () => {
  return (
    <div className="bg-white mx-2 md:mx-10 rounded-lg ">
      <div className="flex flex-col justify-center items-center">
        {/* Card Type 1 [3*3]*/}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center ">
          <WhatWeDoCard1
            title={"Environment and Climate Change"}
            imageUrl={birds}
            borderRight={"r"}
          />
          <WhatWeDoCard1
            title={"Food Security and Livelihood (FSL) "}
            imageUrl={sugarcaneman}
            borderRight={"r"}
          />
          <WhatWeDoCard1
            title={"Community Development and Governance"}
            imageUrl={grandma}
          />
        </div>
        {/* Card Type 2 [4*4] */}
        <div className="flex flex-col md:flex-row   justify-center items-center p-10 sm:p-0 ">
          <WhatWeDoCard2
            title={"Environment and Climate Change"}
            imageUrl={disaster}
            borderTop={"t"}
            borderRight={"r"}
          />
          <WhatWeDoCard2
            title={"Food Security and Livelihood (FSL) "}
            imageUrl={health}
            borderTop={"t"}
            borderRight={"r"}
          />

          <WhatWeDoCard2
            title={"Community Development and Governance"}
            imageUrl={child}
            borderTop={"t"}
            borderRight={"r"}
          />
          <WhatWeDoCard2
            title={"Community Development and Governance"}
            imageUrl={institutional}
            borderTop={"t"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCards;
