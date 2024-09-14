import HeroSection from "../HeroSection/HeroSection";
import HomeCards from "../HomeCards/HomeCards";
// import Documentaries from "../Documentaries/Documentaries";
import Counter from "../../../components/Counter/Counter";
import Articles from "../Articles/Articles";
import BottomCards from "../BottomCards/BottomCards";
import ExecutiveDirector from "../ExecutiveDirector/ExecutiveDirector";
import MiniCaseStoryCards from "../../../components/MiniCaseStoryCards/MiniCaseStoryCards";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <ExecutiveDirector /> */}
      <div>
        <HomeCards />
        {/* <Documentaries /> */}
      </div>
      <div>
        <Counter />
        <Articles />
      </div>
      <div className="w-[90%] mx-auto">
        <BottomCards />
        <MiniCaseStoryCards />
      </div>
    </>
  );
};

export default Home;
