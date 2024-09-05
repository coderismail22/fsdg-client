import ProjectsCards from "../ProjectCards/ProjectsCards";
import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage";

const Projects = () => {
  return (
    <div>
      <PageTitleWithImage
        pageName={"Projects"}
        bgImage={"/assets/projects-bg.jpg"}
      />
      <div className=" md:w-[95%] mx-auto px-2 ">
        <ProjectsCards />
      </div>
    </div>
  );
};

export default Projects;
