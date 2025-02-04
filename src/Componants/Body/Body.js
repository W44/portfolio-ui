import Picture from "./Picture";
import Description from "./Description";
import Summary from "./Summary";

const MainContent = () => {
    return (
      <main className="mt-16 p-4 text-white">
        <Picture imageSrc={"/IMG_1313.jpg"}/>
        <h1 className="text-3xl font-bold mt-8 flex justify-center items-center">Arslaan Asad</h1>
        <h2 className="text-xl mt-2 flex justify-center items-center ">Software Engineer <span className="text-gray-400"> (Fullstack Developer)</span></h2>
    <Description/>
    <br/>
    <br/>
    <Summary/>
    <br/>
    <br/>
    
        <div className="h-[200vh]"> 
          <p>Work in Progress...</p>
        </div>
      </main>
    );
  };
  
  export default MainContent;
  