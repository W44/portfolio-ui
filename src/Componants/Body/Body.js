import Picture from "./Picture";
import Description from "./Description";
import Summary from "./Summary";
import Experience from "./Experience";
import ExperienceDescription from "./ExperienceDescription";
import QuickLinks from "./QuickLinks";
import Education from "./Education";
import Projects from "./Projects";

const MainContent = () => {
    return (
      <main className="mt-8 p-4 text-white">
        <div className="flex flex-col items-center">
          <Picture imageSrc={"/IMG_1315.jpg"}/>
          <div className="mt-12">
            <h1 className="text-3xl font-bold flex justify-center items-center">Arslaan Asad</h1>
            <h2 className="text-xl mt-2 flex justify-center items-center">Software Engineer <span className="text-gray-400"> {/*(Fullstack Developer)*/}</span></h2>
          </div>
        </div>
        <Description/>
        <div className="summary-quicklinks-wrapper">
          <Summary/>
          <QuickLinks/>
        </div>
        <Experience/>
        <ExperienceDescription/>
        <Education/>
        <Projects/>
      </main>
    );
};

export default MainContent;
  