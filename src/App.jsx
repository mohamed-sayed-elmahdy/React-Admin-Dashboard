import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Tooltip from '@/components/Tooltip';
import Sidebar from '@/components/Sidebar';
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
import { FiSettings } from 'react-icons/fi';


function App() {

  return (
    <div className='flex relative w-full'>
      {/* setting button */}
      <div className='fixed right-4 bottom-4 ' style={{ zIndex: '1000' }}>
        <Tooltip content="Settings" position="top left" customCss>
          <button type="button" className=''>
            <FiSettings style={{ color: "var(--text)" }}className='text-3xl cursor-pointer' />
          </button>
        </Tooltip>
      </div>

      {/* sidebar */}
      <div className='sidebar z-50 bg-(--background)' style={{ zIndex: '1000' }}>
        <Sidebar />
      </div>
      {/* main content (Navbar, routes and footer) */}
      <div className={` min-h-screen w-full flex flex-col bg-(--background-secondary)`}>
        <Navbar/>
        <div className={` p-4 flex-1 `} style={{ zIndex: "100" }}>
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Overview />} />
            {/* pages */}
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Customers" element={<Customers />} />
            {/* Apps */}
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Kanban" element={<Kanban />} />
            <Route path="/Editor" element={<Editor />} />
            <Route path="/Color-Picker" element={<ColorPicker />} />
            {/* Charts */}
            <Route path="/Line" element={<Line />} />
            <Route path="/Area" element={<Area />} />
            <Route path="/Bar" element={<Bar />} />
            <Route path="/Pie" element={<Pie />} />
            <Route path="/Financial" element={<Financial />} />
            <Route path="/Color-Mapping" element={<ColorMapping />} />
            <Route path="/Pyramid" element={<Pyramid />} />
            <Route path="/Stacked" element={<Stacked />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
