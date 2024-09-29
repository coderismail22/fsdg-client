import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import Form from "../../Contact/Form/Form";
// import Coordinator from "../Coordinator/Coordinator";
// import JobCircular from "../JobCircular/JobCircular";
// import UpperCards from "../UpperCards/UpperCards";

const JoinUs = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Get Involved"}
        bgImage={"/assets/joinus-bg.jpg"}
      />
      <div className="lg:w-9/12 mx-auto flex flex-col  justify-center items-center">
        {/* <UpperCards /> */}
        {/* <JobCircular /> */}
        <Form />
        {/* <Coordinator /> */}
      </div>
    </div>
  );
};

export default JoinUs;
