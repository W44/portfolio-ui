import './App.css';
import { useState } from "react";
import Header from "./Componants/Header/Header";
import Sidebar from "./Componants/SideBar/Sidebar";
import ProgressBar from "./Componants/Header/ProgressBar";
import MainContent from "./Componants/Body/Body";
import Footer from "./Componants/Footer/Footer";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
        <div className='body'>
      <ProgressBar />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      <MainCçontent />
      </div>
      <Footer />
    </div>
  );
};

export default App;