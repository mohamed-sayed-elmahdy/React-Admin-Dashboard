
import { useSidebar } from '@/contexts/SidebarContext';
import MainContent from '@/components/MainContent';

function Main() {
  const { isSidebarOpen } = useSidebar();
  return (
      <div className={`${isSidebarOpen ? "w-[calc(100%-256px)] ms-64" : "w-[calc(100%-64px)] ms-16"} min-h-screen flex flex-col bg-(--background-secondary)} overflow-hidden transition-all duration-300`}>
        <MainContent />
      </div>
  )
}

export default Main