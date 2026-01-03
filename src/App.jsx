import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Tooltip from '@/components/Tooltip';
import Sidebar from '@/components/Sidebar';
import { FiSettings } from 'react-icons/fi';
import {
  Overview,
  Orders,
  Employees,
  Customers,
  Editor,
  Calendar,
  Kanban,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked
} from '@/pages';
import { useSidebar } from '@/contexts/SidebarContext';
import Main from './components/Main';


function App() {
const { isSidebarOpen, isSidebarMobileOpen, toggleSidebar, toggleMobileSidebar, closeMobileSidebar } = useSidebar();

  return (
    <div className='flex relative w-full flex-col'>
      {/* Settings Button */}
      <div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
        <Tooltip content="Settings" position="top left" customCss>
          <button type="button">
            <FiSettings style={{ color: "var(--text)" }} className='text-3xl cursor-pointer' />
          </button>
        </Tooltip>
      </div>
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} isSidebarMobileOpen={isSidebarMobileOpen} setIsSidebarMobileOpen={toggleMobileSidebar} />

      <div className='fixed h-full sidebar z-50 bg-background' style={{ zIndex: 1000, boxShadow: '2px -14px 15px rgba(0, 0, 0, 0.2)' }} >
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} isSidebarMobileOpen={isSidebarMobileOpen} setIsSidebarMobileOpen={toggleMobileSidebar} />
      </div>


      {/* Main Content */}

        <Main />
    </div>
  );
}

export default App;
