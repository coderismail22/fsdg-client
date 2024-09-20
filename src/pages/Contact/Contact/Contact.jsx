import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import ContactCards from "../ContactCards/ContactCards";
// import Form from "../Form/Form";
import Map from "../Map/Map";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <PageTitleWithImage
        pageName={"Contact"}
        bgImage={"/assets/contact-bg.jpg"}
      />
      <ContactCards />
      <Map />
      {/* <Form /> */}
    </div>
  );
};

export default Contact;
