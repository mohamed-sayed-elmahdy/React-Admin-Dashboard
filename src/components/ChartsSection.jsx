import React from "react";
import RevenueChart from "@/components/RevenueChart";
import UserActivityChart from "@/components/UserActivityChart";
// Custom Tooltip style
const darkTooltipStyle = {
  backgroundColor: "#000",
  border: "1px solid white",
  borderRadius: "12px",
  color: "#fff",
};

const ChartsSection = React.memo(function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <RevenueChart  tooltipStyle={darkTooltipStyle} />
      <UserActivityChart  tooltipStyle={darkTooltipStyle} />
    </div>
  )
})

export default ChartsSection;