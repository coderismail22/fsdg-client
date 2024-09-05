import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const OurServices = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Our Services"}
        bgImage={"/assets/ourservices-bg.jpg"}
      />
      <div className="md:w-9/12 mx-auto">
        <ServiceDetails />
      </div>
    </div>
  );
};

export default OurServices;
