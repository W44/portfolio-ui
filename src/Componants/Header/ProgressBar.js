import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const width = (scrollTop / height) * 100;
      setScrollWidth(width);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-[70px] left-0 w-full h-1 bg-gray-700 z-[9998]">
      <div className="h-full bg-blue-500" style={{ width: `${scrollWidth}%` }}></div>
    </div>
  );
};

export default ProgressBar;
