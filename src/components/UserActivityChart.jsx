import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"


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
export default React.memo(function UserActivityChart({ tooltipStyle }) {
    return (
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
                  contentStyle={tooltipStyle}
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
    );
})