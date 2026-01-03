 import { TrendingUp,
  TrendingDown, 
} from "lucide-react";
 
import React from "react";
const KPICard = React.memo(function KPICard({ title, value, change, isPositive, icon: Icon }) {
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
    );
})


export default KPICard;