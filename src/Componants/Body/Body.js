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
      <main className="mt-16 p-4 text-white">
        <Picture imageSrc={"/IMG_1313.jpg"}/>
        <h1 className="text-3xl font-bold mt-8 flex justify-center items-center">Arslaan Asad</h1>
        <h2 className="text-xl mt-2 flex justify-center items-center ">{/*Software Engineer*/} <span className="text-gray-400"> (Fullstack Developer)</span></h2>
    <Description/>
    <br/>
    <br/>
    <div className="summary-quicklinks-wrapper">
    <Summary/>
    <QuickLinks/>
    </div>
    <br/>
    <br/>
    <Experience/>
    <ExperienceDescription/>
    <br/>
    <Education/>
    <br/>
    <Projects/>
    </main>
    );
  };
  
  export default MainContent;
  