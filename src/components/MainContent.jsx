import React, { memo, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '@/components/Footer';

// Loader بسيط يظهر أثناء تحميل الصفحات
const Loader = () => <div className="text-center p-4">Loading...</div>;

// Lazy loading لكل الصفحات
const Overview = lazy(() => import('@/pages/Overview'));
const Orders = lazy(() => import('@/pages/Orders'));
const Employees = lazy(() => import('@/pages/Employees'));
const Customers = lazy(() => import('@/pages/Customers'));
// const Editor = lazy(() => import('@/pages/Editor'));
// const Calendar = lazy(() => import('@/pages/Calendar'));
// const Kanban = lazy(() => import('@/pages/Kanban'));
// const ColorPicker = lazy(() => import('@/pages/ColorPicker'));
// const Line = lazy(() => import('@/pages/Line'));
// const Area = lazy(() => import('@/pages/Area'));
// const Bar = lazy(() => import('@/pages/Bar'));
// const Pie = lazy(() => import('@/pages/Pie'));
// const Financial = lazy(() => import('@/pages/Financial'));
// const ColorMapping = lazy(() => import('@/pages/ColorMapping'));
// const Pyramid = lazy(() => import('@/pages/Pyramid'));
// const Stacked = lazy(() => import('@/pages/Stacked'));

// Array لكل الـ routes عشان نخلي الكود أنظف
const routes = [
  { path: '/', element: <Overview /> },
  { path: '/orders', element: <Orders /> },
  { path: '/employees', element: <Employees /> },
  { path: '/customers', element: <Customers /> },
//   { path: '/calendar', element: <Calendar /> },
//   { path: '/kanban', element: <Kanban /> },
//   { path: '/editor', element: <Editor /> },
//   { path: '/color-picker', element: <ColorPicker /> },
//   { path: '/line', element: <Line /> },
//   { path: '/area', element: <Area /> },
//   { path: '/bar', element: <Bar /> },
//   { path: '/pie', element: <Pie /> },
//   { path: '/financial', element: <Financial /> },
//   { path: '/color-mapping', element: <ColorMapping /> },
//   { path: '/pyramid', element: <Pyramid /> },
//   { path: '/stacked', element: <Stacked /> },
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
