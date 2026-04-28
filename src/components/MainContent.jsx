import React, { memo, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '@/components/Footer';

const Loader = () => <div className="text-center p-4">Loading...</div>;

const Overview = lazy(() => import('@/pages/Overview'));
const Orders = lazy(() => import('@/pages/Orders'));
const Employees = lazy(() => import('@/pages/Employees'));
const Customers = lazy(() => import('@/pages/Customers'));
const Editor = lazy(() => import('@/pages/Apps/Editor'));
const Calendar = lazy(() => import('@/pages/Apps/Calendar'));
const Kanban = lazy(() => import('@/pages/Apps/Kanban'));
const ColorPicker = lazy(() => import('@/pages/Apps/ColorPicker'));
const Line = lazy(() => import('@/pages/Charts/Line'));
const Area = lazy(() => import('@/pages/Charts/Area'));
const Bar = lazy(() => import('@/pages/Charts/Bar'));
const Pie = lazy(() => import('@/pages/Charts/Pie'));
const Financial = lazy(() => import('@/pages/Charts/Financial'));
const ColorMapping = lazy(() => import('@/pages/Charts/ColorMapping'));
const Pyramid = lazy(() => import('@/pages/Charts/Pyramid'));
const Stacked = lazy(() => import('@/pages/Charts/Stacked'));


const routes = [
  { path: '/', element: <Overview /> },
  { path: '/orders', element: <Orders /> },
  { path: '/employees', element: <Employees /> },
  { path: '/customers', element: <Customers /> },
  { path: '/calendar', element: <Calendar /> },
  { path: '/kanban', element: <Kanban /> },
  { path: '/editor', element: <Editor /> },
  { path: '/color-picker', element: <ColorPicker /> },
  { path: '/line', element: <Line /> },
  { path: '/area', element: <Area /> },
  { path: '/bar', element: <Bar /> },
  { path: '/pie', element: <Pie /> },
  { path: '/financial', element: <Financial /> },
  { path: '/color-mapping', element: <ColorMapping /> },
  { path: '/pyramid', element: <Pyramid /> },
  { path: '/stacked', element: <Stacked /> },
];

export default memo(function MainContent() {
  return (
    <>
      <div className="p-4 flex-1" style={{ zIndex: 100 }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
});
