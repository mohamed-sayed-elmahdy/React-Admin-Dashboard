import { userActivityData } from "@/pages/Overview";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,

} from "recharts"
import React from "react";
export default React.memo(function RevenueChart({tooltipStyle, data}) {

    return (
        <>
            <div className="bg-white border border-border rounded-lg p-6">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-(--text) mb-1">Revenue Overview</h3>
                    <p className="text-sm text-gray-500">Monthly revenue and order trends</p>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} >
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
                            contentStyle={tooltipStyle}
                            formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
                        />
                        <Bar dataKey="revenue" fill="#c48d3b" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
})