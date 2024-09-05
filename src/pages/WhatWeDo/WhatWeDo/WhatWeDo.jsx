import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import WhatWeDoCards from "../WhatWeDoCards/WhatWeDoCards";
import WhatWeDoDescriptionSection from "../WhatWeDoDescriptionSection/WhatWeDoDescriptionSection";

const WhatWeDo = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"What We Do"}
        bgImage={"/assets/whatwedo-bg.jpg"}
      />
      <div className="bg-[#113418]">
        <WhatWeDoDescriptionSection />
        <WhatWeDoCards />
      </div>
    </div>
  );
};

export default WhatWeDo;
