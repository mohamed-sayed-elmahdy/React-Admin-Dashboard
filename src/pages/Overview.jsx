import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUpIcon,
  Download,
  Calendar,
} from "lucide-react"
// Custom Tooltip style
const darkTooltipStyle = {
  backgroundColor: "#000",
  border: "1px solid white",
  borderRadius: "12px",
  color: "#fff",
};

// Mock data for Revenue Chart
const revenueData = [
  { month: "Jan", revenue: 45000, orders: 230 },
  { month: "Feb", revenue: 52000, orders: 280 },
  { month: "Mar", revenue: 48000, orders: 250 },
  { month: "Apr", revenue: 61000, orders: 320 },
  { month: "May", revenue: 55000, orders: 290 },
  { month: "Jun", revenue: 67000, orders: 350 },
  { month: "Jul", revenue: 72000, orders: 380 },
]

// Mock data for User Activity
const userActivityData = [
  { date: "Mon", active: 1200, new: 340 },
  { date: "Tue", active: 1800, new: 420 },
  { date: "Wed", active: 1600, new: 380 },
  { date: "Thu", active: 2100, new: 510 },
  { date: "Fri", active: 2400, new: 600 },
  { date: "Sat", active: 2000, new: 490 },
  { date: "Sun", active: 1700, new: 410 },
]

// Traffic sources
const trafficSources = [
  { name: "Direct", percentage: 42, color: "bg-chart-1" },
  { name: "Organic Search", percentage: 28, color: "bg-chart-2" },
  { name: "Referral", percentage: 18, color: "bg-chart-3" },
  { name: "Social", percentage: 12, color: "bg-chart-4" },
]

// Recent transactions
const transactions = [
  { id: 1, user: "Sarah Johnson", status: "Paid", amount: "$2,450", date: "Dec 18, 2025" },
  { id: 2, user: "Michael Chen", status: "Pending", amount: "$1,230", date: "Dec 18, 2025" },
  { id: 3, user: "Emily Davis", status: "Paid", amount: "$3,890", date: "Dec 17, 2025" },
  { id: 4, user: "James Wilson", status: "Failed", amount: "$890", date: "Dec 17, 2025" },
  { id: 5, user: "Anna Martinez", status: "Paid", amount: "$4,200", date: "Dec 16, 2025" },
]

// KPI Card Component
function KPICard({ title, value, change, isPositive, icon: Icon }) {
  return (
    <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 font-medium mb-2">{title}</p>
          <p className="text-3xl font-semibold text-(--text) mb-3">{value}</p>
          <div className="flex items-center gap-1.5">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-rose-500" />
            )}
            <span className={`text-sm font-medium ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>{change}</span>
            <span className="text-sm text-gray-500">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${isPositive ? "bg-emerald-500/10" : "bg-rose-500/10"}`}>
          <Icon className={`w-6 h-6 ${isPositive ? "text-emerald-500" : "text-rose-500"}`} />
        </div>
      </div>
    </div>
  )
}

// Traffic Source Item Component
function TrafficSourceItem({ name, percentage, color }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <span className="text-(--text) font-medium">{name}</span>
        </div>
        <span className="text-gray-500 font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

// Status Badge Component
function StatusBadge({ status }) {
  const styles = {
    Paid: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    Pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    Failed: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${styles[status]}`}
    >
      {status}
    </span>
  )
}

export default function Overview() {
  return (
    <div>
      <div className="mx-auto px-2 py-4">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-(--text) mb-2">Overview</h1>
              <p className="text-gray-600">Track your business performance and key metrics</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card text-(--text) hover:bg-accent transition-colors text-sm font-medium">
                <Calendar className="w-4 h-4" />
                Last 7 days
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all text-sm font-medium shadow-sm">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <KPICard title="Total Revenue" value="$428,590" change="+12.5%" isPositive={true} icon={DollarSign} />
          <KPICard title="Orders" value="2,840" change="+8.2%" isPositive={true} icon={ShoppingCart} />
          <KPICard title="Active Users" value="12,456" change="+18.7%" isPositive={true} icon={Users} />
          <KPICard title="Conversion Rate" value="3.24%" change="-2.4%" isPositive={false} icon={TrendingUpIcon} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Revenue Overview Chart */}
          <div className="bg-white border border-border rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-(--text) mb-1">Revenue Overview</h3>
              <p className="text-sm text-gray-500">Monthly revenue and order trends</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData} >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="oklch(0.5 0 0)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="oklch(0.5 0 0)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={darkTooltipStyle}
                  formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
                />
                <Bar dataKey="revenue" fill="#c48d3b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* User Activity Chart */}
          <div className="bg-white border border-border rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-(--text) mb-1">User Activity</h3>
              <p className="text-sm text-gray-500">Active and new users this week</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userActivityData}>
                <defs>
                  <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c48d3b" stopOpacity={0.8} />
                    <stop offset="30%" stopColor="#c48d3b" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#c48d3b" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="newGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#685431" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#8b7041" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="oklch(0.5 0 0)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}

                />
                <YAxis stroke="oklch(0.5 0 0)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={darkTooltipStyle}
                />
                <Legend wrapperStyle={{ paddingTop: "10px", }} iconType="circle" />
                <Area
                  type="monotone"
                  dataKey="active"
                  stroke=""
                  fill="url(#activeGradient)"
                  strokeWidth={2}
                  name="Active Users"
                />
                <Area
                  type="monotone"
                  dataKey="new"
                  stroke=""
                  fill="url(#newGradient)"
                  strokeWidth={2}
                  name="New Users"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section: Traffic Sources & Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Traffic Sources */}
          <div className="bg-white border border-border rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-(--text) mb-1">Traffic Sources</h3>
              <p className="text-sm text-gray-500">Where your visitors come from</p>
            </div>
            <div className="space-y-5">
              {trafficSources.map((source, index) => (
                <TrafficSourceItem key={index} {...source} />
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="lg:col-span-2 bg-white border border-border rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-(--text) mb-1">Recent Transactions</h3>
              <p className="text-sm text-gray-500">Latest payment activities</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">User</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="border-b border-border last:border-0 hover:bg-accent/50 transition-all duration-200 ease-in-out"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm font-medium text-primary">{transaction.user.charAt(0)}</span>
                          </div>
                          <span className="text-sm font-medium text-(--text)">{transaction.user}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <StatusBadge status={transaction.status} />
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm font-semibold text-(--text)">{transaction.amount}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-gray-500">{transaction.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
