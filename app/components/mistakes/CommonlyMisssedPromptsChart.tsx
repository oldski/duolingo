'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud';

const CommonlyMissedPromptChart = ({ data }) => {
	const chartRef = useRef(null);
	
	useEffect(() => {
		if(chartRef.current){
			const chartInstance = echarts.init(chartRef.current);
			chartInstance.setOption({
				tooltip: {},
				series: [
					{
						type: 'wordCloud',
						shape: 'circle',
						keepAspect: false,
						data,
						textStyle: {
							fontWieight: 'bold',
							fontFamily: 'Arial',
							emphasis: {
								shadowBlur: 10,
								shadowColor: '#333',
							},
						},
					},
				],
			});
		}
	}, [data]);
	
	return <div ref={chartRef} className="w-full h-80 bg-white rounded-lg shadow-md p-4" />;
};

export default CommonlyMissedPromptChart;