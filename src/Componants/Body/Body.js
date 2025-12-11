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
          <h1 className="text-6xl font-bold flex justify-center items-center" style={{ letterSpacing: '-0.02em', textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)' }}>
            <TypewriterText text="Arslaan Asad" delay={100} className="typewriter-text" />
          </h1>
          <h2 className="text-2xl mt-4 flex justify-center items-center" style={{ color: '#E5E5E5' }}>Software Engineer <span className="text-gray-400"> {/*(Fullstack Developer)*/}</span></h2>
        </div>
      </div>

      <div ref={descriptionRef} className="fade-in-section section-slide-up">
        <Description />
      </div>
      <div className="section-divider" ref={useScrollAnimation()}></div>

      <div ref={summaryRef} className="summary-quicklinks-wrapper fade-in-section section-scale-in">
        <Summary />
        <QuickLinks />
      </div>
      <div className="section-divider" ref={useScrollAnimation()}></div>

      <div ref={experienceRef} className="fade-in-section section-slide-left">
        <Experience />
      </div>
      <ExperienceDescription />
      <div className="section-divider" ref={useScrollAnimation()}></div>

      <div ref={educationRef} className="fade-in-section section-slide-right">
        <Education />
      </div>
      <div className="section-divider" ref={useScrollAnimation()}></div>

      <div ref={projectsRef} className="fade-in-section section-slide-up">
        <Projects />
      </div>
    </main>
  );
};

export default MainContent;
