'use client';
import React from 'react';
import ReactECharts from 'echarts-for-react';

const MistakesOvertimeChart = ({ data }) => {
	const options = {
		tooltip: {
			trigger: 'axis',
		},
		xAxis: {
			type: 'category',
			data: data.map((item) => item.name),
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				data: data.map((item) => item.value),
				type: 'line',
				smooth: true,
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 0,
						colorStops: [
							{ offset: 0, color: '#3b82f6'},
							{ offset: 1, color: 'rgba(255,255,255, 0)'},
						],
					},
				},
				lineStyle: {
					width: 2,
				},
			},
		],
	};
	
	return(
		<div className="w-full h-80 bg-white round-lg shadow-md p-4">
			<ReactECharts option={options} style={{width: '100%', height: '100%'}} />
		</div>
	);
};

export default MistakesOvertimeChart;