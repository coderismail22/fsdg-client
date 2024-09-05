import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";
import PDF from "../PDF/PDF";

const Publications = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Publications"}
        bgImage={"/assets/hero-img.jpg"}
      />
      <div className=" md:w-9/12 mx-auto">
        <PDF />
      </div>
    </div>
  );
};

export default Publications;
