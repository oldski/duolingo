"use client";
import React from "react";
import ReactECharts from "echarts-for-react";

const MistakesChart = ({ data }) => {
	
	
	console.log(data)
	const options = {
		title: {
			text: "Mistakes by Type",
			left: "center",
		},
		tooltip: {
			trigger: "item",
		},
		legend: {
			top: "bottom",
		},
		series: [
			{
				name: "Mistakes",
				type: "pie",
				radius: [30, 100], // Controls inner and outer radius for rose effect
				center: ["50%", "50%"], // Centers the chart
				roseType: "area", // Creates the Nightingale chart effect
				itemStyle: {
					borderRadius: 8,
				},
				label: {
					show: true,
					fontSize: 14,
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 16,
						fontWeight: "bold",
					},
				},
				data: data, // Data formatted from formatMistakesForPieChart
			},
		],
	};
	
	
	
	return (
		<div className="w-full h-64 bg-white rounded-lg shadow-md p-4">
			<ReactECharts option={options} style={{ width: "100%", height: "100%" }} />
		</div>
	);
};

export default MistakesChart;