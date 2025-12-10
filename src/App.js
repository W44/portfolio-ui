import './App.css';
import { useState } from "react";
import Header from "./Componants/Header/Header";
import Sidebar from "./Componants/SideBar/Sidebar";
import ProgressBar from "./Componants/Header/ProgressBar";
import MainContent from "./Componants/Body/Body";
import Footer from "./Componants/Footer/Footer";
import ScrollProgress from './Componants/ScrollProgress';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='App' style={{ backgroundColor: '#0f172a', minHeight: '100vh' }}>
      <Header toggleSidebar={toggleSidebar} />
      <ScrollProgress />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ProgressBar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;