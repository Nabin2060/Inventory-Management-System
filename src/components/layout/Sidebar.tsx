import { Link, useLocation } from "react-router-dom";
import { Home, Package, Tag } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    title: "Products",
    icon: Package,
    path: "/products",
  },
  {
    title: "Categories",
    icon: Tag,
    path: "/categories",
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold">Inventory System</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );

}