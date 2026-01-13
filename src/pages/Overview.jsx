import React from "react";
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUpIcon,
  Download,
  Calendar,
} from "lucide-react";
import KPICard from "@/components/KPICard";
import TrafficSourceItem from "@/components/TrafficSourceItem";
import ChartsSection from "@/components/ChartsSection";
import StatusBadge from "@/components/StatusBadge";



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




function Overview() {
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
              <button className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-white text-(--text) hover:bg-gray-100 transition-all text-sm font-medium duration-300 shadow-sm">
                <Calendar className="w-4 h-4" />
                Last 7 days
              </button>
              <button className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white hover:bg-(--accent) transition-all text-sm font-medium duration-300 shadow-sm">
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
        <ChartsSection />

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
                      className="border-b border-border last:border-0 hover:bg-primary/10 transition-all duration-200 ease-in-out"
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
  );
}
export default Overview;

