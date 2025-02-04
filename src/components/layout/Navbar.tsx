import { Bell, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">Welcome back</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
