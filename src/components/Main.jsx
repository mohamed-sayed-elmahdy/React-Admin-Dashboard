import { useSidebar } from '@/contexts/SidebarContext';
import MainContent from '@/components/MainContent';
import { useEffect, useState } from 'react';

function Main() {
  const { isSidebarOpen } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`
        ${isSidebarOpen 
          ? "lg:w-[calc(100%-256px)] lg:ms-64" 
          : "lg:w-[calc(100%-64px)] lg:ms-16"}
        min-h-screen flex flex-col bg-(--background-secondary)
        overflow-hidden transition-all duration-300
      `}
    >
      <div
        className={`
          transition-all duration-500 ease-out
          ${mounted 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-6"}
        `}
      >
        <MainContent />
      </div>
    </div>
  );
}

export default Main;
