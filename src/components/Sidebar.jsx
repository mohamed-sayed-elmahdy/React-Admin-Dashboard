import {
    FaHome, FaUsers, FaShoppingCart, FaUserTie, FaCalendarAlt,
    FaProjectDiagram, FaEdit, FaPalette, FaChartLine, FaChartArea,
    FaChartBar, FaChartPie, FaMoneyBillWave, FaDrawPolygon
} from "react-icons/fa";
import { MdStackedLineChart } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSidebar } from "@/contexts/SidebarContext";
export default function Sidebar() {
       const { isSidebarOpen, toggleSidebar, isSidebarMobileOpen, toggleMobileSidebar } = useSidebar();

    const navItems = [
        {
            category: "Dashboard",
            links: [
                {
                    label: "Overview",
                    href: "/",
                    icon: <FaHome size={16} />,
                },
            ],
        },

        {
            category: "Pages",
            links: [
                {
                    label: "Orders",
                    href: "/orders",
                    icon: <FaShoppingCart size={16} />,
                },
                {
                    label: "Employees",
                    href: "/employees",
                    icon: <FaUserTie size={16} />,
                },
                {
                    label: "Customers",
                    href: "/customers",
                    icon: <FaUsers size={16} />,
                },
            ],
        },

        {
            category: "Apps",
            links: [
                {
                    label: "Calendar",
                    href: "/calendar",
                    icon: <FaCalendarAlt size={16} />,
                },
                {
                    label: "Kanban",
                    href: "/kanban",
                    icon: <FaProjectDiagram size={16} />,
                },
                {
                    label: "Editor",
                    href: "/editor",
                    icon: <FaEdit size={16} />,
                },
                {
                    label: "Color Picker",
                    href: "/color-picker",
                    icon: <FaPalette size={16} />,
                },
            ],
        },

        {
            category: "Charts",
            links: [
                {
                    label: "Line",
                    href: "/line",
                    icon: <FaChartLine size={16} />,
                },
                {
                    label: "Area",
                    href: "/area",
                    icon: <FaChartArea size={16} />,
                },
                {
                    label: "Bar",
                    href: "/bar",
                    icon: <FaChartBar size={16} />,
                },
                {
                    label: "Pie",
                    href: "/pie",
                    icon: <FaChartPie size={16} />,
                },
                {
                    label: "Financial",
                    href: "/financial",
                    icon: <FaMoneyBillWave size={16} />,
                },
                {
                    label: "Color Mapping",
                    href: "/color-mapping",
                    icon: <FaPalette size={16} />,
                },
                {
                    label: "Pyramid",
                    href: "/pyramid",
                    icon: <FaDrawPolygon size={16} />,
                },
                {
                    label: "Stacked",
                    href: "/stacked",
                    icon: <MdStackedLineChart size={16} />,
                },
            ],
        },
    ];

    return (
        <div className="flex text-(--text)" style={{boxShadow: '5px -14px 15px rgba(0, 0, 0, 0.4)'}}>
            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 bg-black/45 bg-opacity-50 z-10 lg:hidden transition-opacity duration-300
              ${isSidebarMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => toggleMobileSidebar(false)}
            >
                <div
                    className={`
                       fixed top-0 left-0 h-full w-64 bg-(--background) text-(--text) shadow
                        transform transition-transform duration-300
                         ${isSidebarMobileOpen ? "translate-x-0" : "-translate-x-full"}
                          `}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="mb-6 p-2" onClick={() => toggleMobileSidebar(false)}>
                        <FaTimes className="w-6 h-6" />
                    </button>

                    <nav className="space-y-2 px-3 overflow-auto h-[calc(100vh-3.5rem)]">
                        {navItems.map((section) => (
                            <div key={section.category} className="mt-4">

                                {/* Category Title */}
                                {isSidebarOpen ? (
                                    <p className="text-xs capitalize text-(--accent) mb-1 ps-1 pe-4">
                                        {section.category}
                                    </p>
                                ) : (
                                    <hr className="my-2 border-(--primary)" />
                                )}

                                {/* Links */}
                                {section.links.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `text-(--text) text-[13.5px] flex items-center ${isSidebarOpen ? "justify-start" : "justify-center"
                                            } gap-2 py-1.5 px-2 rounded-md hover:bg-gray-900 dark:hover:bg-white/20 transition-all duration-200 ${isActive ? "bg-white/10 text-200 dark:bg-white/20" : ""
                                            }`
                                        }
                                    >
                                        {item.icon}
                                        {isSidebarOpen && <span>{item.label}</span>}
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </nav>

                </div>
            </div>
            {/* Desktop Sidebar */}
            <aside
                className={`hidden lg:flex flex-col bg-(--background) text-(--text) transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"
                    }`}
            >
                <div className="flex items-center justify-center p-2.5 mt-2">
                    {isSidebarOpen && <h1 className="font-semibold text-lg text-(--primary)">Dashboard</h1>}
                    <button className="cursor-pointer" onClick={() => toggleSidebar(!isSidebarOpen)}>
                        {isSidebarOpen ? null : <FaBars size={17} />}
                    </button>
                </div>
                <nav className="space-y-2 px-3 overflow-auto h-[calc(100vh-3.5rem)]">
                    {navItems.map((section) => (
                        <div key={section.category} className="mt-4">
                            {/* Category Title */}
                            {isSidebarOpen ? (
                                <p className="text-xs capitalize text-(--accent) mb-1 ps-1 pe-4">
                                    {section.category}
                                </p>
                            ) : (
                             section.category === "Dashboard" ? null :  <hr className="my-2 border-(--primary)" />
                            )}

                            {/* Links */}
                            {section.links.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.href}
                                    className={({ isActive }) => `text-(--text) text-[13.5px] flex items-center mb-0.5 ${isSidebarOpen ? "justify-start" : "justify-center"} gap-2 py-1.5 px-2 rounded-md hover:bg-(--primary) transition-all duration-300 ${isActive ? " bg-(--primary) text-(--textWhite)" : "bg-(--background)"}`}
                                >
                                    {item.icon}
                                    {isSidebarOpen && <span>{item.label}</span>}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>

            </aside>
        </div>
    );
}
