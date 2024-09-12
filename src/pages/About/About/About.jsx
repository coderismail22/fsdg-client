import CounterForAboutPage from "../../../components/CounterForAboutPage/CounterForAboutPage";
import Profile from "../../../components/Profile/Profile";
import Membership from "../Membership/Membership";
import KeyPartners from "../KeyPartners/KeyPartners";
import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";

const About = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"About Us"}
        bgImage={"/assets/about-bg.jpg"}
      />
      <div className="w-9/12 mx-auto">
        <Profile />
        {/* <CounterForAboutPage /> */}
        {/* <Membership /> */}
        {/* <KeyPartners /> */}
      </div>
    </div>
  );
};

export default About;
