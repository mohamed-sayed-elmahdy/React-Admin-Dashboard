// import React from 'react'
// import { useUi } from "@/contexts/UIContext";

// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

// function Overview() {
//   const { activePopup, openPopup, closePopup } = useUi();
//   return (
//     <div>
//       <h1>Overview Page</h1>
//       <div className="space-y-1">
//         {Object.entries(initialState).map(([key, value]) => (
//           <div key={key} className="flex justify-between w-48">
//             <span>{key}</span>
//             <span className={activePopup === key ? "text-green-600" : "text-red-600"}>
//               {activePopup === key ? "ON" : "OFF"}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* أزرار للاختبار */}
//       <div className="flex gap-2 flex-wrap">
//         <button
//           onClick={() => openPopup("chat")}
//           className="px-3 py-1 bg-blue-500 text-white rounded"
//         >
//           Open Chat
//         </button>

//         <button
//           onClick={() => openPopup("cart")}
//           className="px-3 py-1 bg-green-500 text-white rounded"
//         >
//           Open Cart
//         </button>

//         <button
//           onClick={() => openPopup("userProfile")}
//           className="px-3 py-1 bg-purple-500 text-white rounded"
//         >
//           Open Profile
//         </button>

//         <button
//           onClick={() => openPopup("notification")}
//           className="px-3 py-1 bg-orange-500 text-white rounded"
//         >
//           Open Notification
//         </button>

//         <button
//           onClick={closePopup}
//           className="px-3 py-1 bg-red-500 text-white rounded"
//         >
//           Close All
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Overview


import OverviewHeader from "@/components/OverviewHeader";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
} from "react-icons/fi";

/* ======================
   DUMMY DATA
====================== */
const stats = [
  {
    title: "Revenue",
    value: "$24,300",
    change: "+12%",
    trend: "up",
    icon: <FiDollarSign />,
  },
  {
    title: "Orders",
    value: "1,245",
    change: "-3%",
    trend: "down",
    icon: <FiShoppingCart />,
  },
  {
    title: "Users",
    value: "8,540",
    change: "+8%",
    trend: "up",
    icon: <FiUsers />,
  },
  {
    title: "Conversion",
    value: "4.2%",
    change: "+1.1%",
    trend: "up",
    icon: <FiTrendingUp />,
  },
];

const orders = [
  { id: "#1023", name: "John Doe", amount: "$120", status: "Completed" },
  { id: "#1022", name: "Sara Smith", amount: "$90", status: "Pending" },
  { id: "#1021", name: "Michael Lee", amount: "$210", status: "Completed" },
  { id: "#1020", name: "Emma Brown", amount: "$65", status: "Cancelled" },
];

/* ======================
   PAGE
====================== */
export default function Overview() {
  return (
    <div className="space-y-4 animate-fade-in">
      <OverviewHeader />
      {/* ================= KPI CARDS ================= */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-(--background) rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-(--accent)">{item.title}</p>
                <span className="text-xl text-(--primary)">{item.icon}</span>
              </div>

              <h2 className="text-2xl font-semibold mt-2">
                {item.value}
              </h2>

              <div className="flex items-center gap-1 mt-2 text-xs">
                {item.trend === "up" ? (
                  <FiTrendingUp className="text-green-500" />
                ) : (
                  <FiTrendingDown className="text-red-500" />
                )}
                <span
                  className={`${item.trend === "up"
                      ? "text-green-500"
                      : "text-red-500"
                    }`}
                >
                  {item.change} this week
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CHART ================= */}
      <section className="bg-(--background) rounded-xl p-6 shadow-md">
        <h3 className="text-sm font-medium mb-4 text-(--accent)">
          Revenue Overview
        </h3>

        {/* Fake chart */}
        <div className="flex items-end justify-between h-40 gap-3">
          {[40, 65, 55, 80, 60, 90, 70].map((h, i) => (
            <div
              key={i}
              className="w-full bg-(--primary) rounded-md opacity-80 hover:opacity-100 transition-all duration-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </section>

      {/* ================= TABLE + INSIGHTS ================= */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* ===== Recent Orders ===== */}
        <div className="xl:col-span-2 bg-(--background) rounded-xl p-6 shadow-md">
          <h3 className="text-sm font-medium mb-4 text-(--accent)">
            Recent Orders
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-(--accent)">
                  <th className="pb-2">Order</th>
                  <th className="pb-2">Customer</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr
                    key={i}
                    className="border-t border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="py-2">{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded-full text-xs
                          ${order.status === "Completed"
                            ? "bg-green-500/20 text-green-500"
                            : order.status === "Pending"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : "bg-red-500/20 text-red-500"
                          }
                        `}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== Insights ===== */}
        <div className="bg-(--background) rounded-xl p-6 shadow-md">
          <h3 className="text-sm font-medium mb-4 text-(--accent)">
            Insights
          </h3>

          <ul className="space-y-3 text-sm">
            <li>📈 Revenue increased by <b>12%</b> this week</li>
            <li>⚠ Orders dropped compared to yesterday</li>
            <li>🎯 Conversion rate improved after last update</li>
          </ul>

          <button className="mt-6 w-full bg-(--primary) text-white py-2 rounded-lg hover:opacity-90 transition">
            View Full Report
          </button>
        </div>
      </section>
    </div>
  );
}

