
import { Package, Tag, TrendingUp } from "lucide-react";


const stats = [
  {
    title: "Total Products",
    value: "120",
    icon: Package,
    trend: "+5%",
    trendColor: "text-green-600",
  },
  {
    title: "Categories",
    value: "15",
    icon: Tag,
    trend: "+2%",
    trendColor: "text-green-600",
  },
  {
    title: "Total Value",
    value: "$45,231",
    icon: TrendingUp,
    trend: "+8%",
    trendColor: "text-green-600",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500">Welcome to your inventory dashboard.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <h2 className="text-3xl font-bold tracking-tight mt-1">
                  {stat.value}
                </h2>
              </div>
              <div className="rounded-full bg-gray-100 p-3">
                <stat.icon className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${stat.trendColor}`}>
                {stat.trend} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">No recent activity to display.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Use the sidebar to navigate to different sections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


