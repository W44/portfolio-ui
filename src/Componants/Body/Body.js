import Picture from "./Picture";
import Description from "./Description";
import Summary from "./Summary";
import Experience from "./Experience";
import ExperienceDescription from "./ExperienceDescription";
import QuickLinks from "./QuickLinks";
import Education from "./Education";
import Projects from "./Projects";
import TypewriterText from "./TypewriterText";
import useScrollAnimation from "../../Utils/useScrollAnimation";

const MainContent = () => {
  const descriptionRef = useScrollAnimation();
  const summaryRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const educationRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return (
    <main className="p-4 text-white">
      <div className="flex flex-col items-center">
        <Picture imageSrc={"/IMG_1315.jpg"} />
        <div className="mt-12">
          <h1 className="text-3xl font-bold flex justify-center items-center">
            <TypewriterText text="Arslaan Asad" delay={120} className="typewriter-text" />
          </h1>
          <h2 className="text-xl mt-2 flex justify-center items-center">Software Engineer <span className="text-gray-400"> {/*(Fullstack Developer)*/}</span></h2>
        </div>
      </div>
      <div ref={descriptionRef} className="fade-in-section">
        <Description />
      </div>
      <div ref={summaryRef} className="summary-quicklinks-wrapper fade-in-section">
        <Summary />
        <QuickLinks />
      </div>
      <div ref={experienceRef} className="fade-in-section">
        <Experience />
      </div>
      <ExperienceDescription />
      <div ref={educationRef} className="fade-in-section">
        <Education />
      </div>
      <div ref={projectsRef} className="fade-in-section">
        <Projects />
      </div>
    </main>
  );
};

export default MainContent;
