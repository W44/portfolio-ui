import Picture from "./Picture";

const MainContent = () => {
    return (
      <main className="mt-16 p-4 text-white">
        <Picture imageSrc={"/IMG_1313.jpg"}/>
        <h1 className="text-3xl font-bold mt-8 flex justify-center items-center">Arslaan Asad</h1>
        <h2 className="text-xl mt-2 flex justify-center items-center ">Software Engineer <span className="text-gray-400">(Fullstack Developer)</span></h2>
      
        <p>Scroll down to see the progress bar in action.</p>
        <div className="h-[200vh]"> 
          <p>More content...</p>
        </div>
      </main>
    );
  };
  
  export default MainContent;
  