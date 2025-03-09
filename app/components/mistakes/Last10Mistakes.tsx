'use client';
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { ExtractedMistake } from "@/types/Mistakes";
import MistakeChart from "@/app/components/mistakes/MistakeChart";
import {formatMistakesForPieChart, formatMistakesOvertime} from "@/lib/utils/FormatMistakesForCharts";
import MistakesOvertimeChart from "@/app/components/mistakes/MistakesOvertimeChart";

const Last10Mistakes = () => {
	
	const { data, error, isLoading} = useSWR<ExtractedMistake>("/api/duolingo/mistakes", fetcher);
	
	if( error ){
		return <div>Error Loading Data</div>;
	}
	
	if( isLoading ){
		return(
			<div>loading...</div>
		)
	}
	
	const pieChartData = formatMistakesForPieChart(data?.mistakes);
	const hardestMistakeType = Object.entries(formatMistakesForPieChart(data?.mistakes)).sort((a, b) => b.value - a.value)[0]?.name || "Unknown";
	const overtimeData = formatMistakesOvertime(data?.mistakes);
	return(
		<>
			<h1>Last 10 Mistakes</h1>
			{
				data?.mistakes.map( (mistake: ExtractedMistake) => (
					<div key={mistake?.timestamp} className="mb-2">
						{mistake?.specificType}<br />
						{mistake?.maxAIChallengePrompt}<br />
						<em>{mistake?.maxAIUserResponse}</em><br />
						<strong>{mistake?.maxAIAnnotatedSolution}</strong>
					</div>
				))
			}
			<MistakeChart data={pieChartData} />
			<MistakesOvertimeChart data={overtimeData}/>
			<div>
				<h2>Most Frequent Mistake Type: <strong>{hardestMistakeType}</strong></h2>
			</div>
		</>
	)
	
}

export default Last10Mistakes;