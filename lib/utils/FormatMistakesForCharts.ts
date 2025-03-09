import { ExtractedMistake } from "@/types/Mistakes";

export const formatMistakesForPieChart = (mistakes: ExtractedMistake[]) => {
	const counts: Record<string, number> = {};
	
	// Count occurrences of each `specificType`
	mistakes.forEach(({ specificType }) => {
		if (!specificType) return; // Ensure specificType is defined
		counts[specificType] = (counts[specificType] || 0) + 1;
	});
	
	// Convert object into an array suitable for a pie chart
	return Object.keys(counts).map((type) => ({
		name: type,
		value: counts[type],
	}));
};

export const formatMistakesOvertime = (mistakes: ExtractedMistake[]) => {
	const counts: Record<string, number> = {};
	
	mistakes.forEach(({ timestamp }) => {
		const date = new Date(timestamp).toLocaleDateString();
		counts[date] = (counts[date] || 0) + 1;
	});
	
	return Object.keys(counts).map((date) => ({
		name: date,
		value: counts[date],
	}))
}

export const formatFrequenMistakes = (mistakes: ExtractedMistake[]) => {
	const counts: Record<string, number> = {};
	
	mistakes.forEach(({ maxAIChallengePrompt }) => {
		if(!maxAIChallengePrompt) return;
		counts[maxAIChallengePrompt] = (counts[maxAIChallengePrompt] || 0) + 1;
	});
	
	return Object.keys(counts).map((prompt) => ({
		name: prompt,
		value: counts[prompt],
	}));
};

export const formatMistakesByLanguage = (mistakes: ExtractedMistake[]) => {
	const counts = {Spanish: 0, English: 0};
	
	mistakes.forEach(({ targetLanguage }) => {
		if(targetLanguage === 'es') counts.Spanish += 1;
		if(targetLanguage === 'en') counts.English += 1;
	});
	
	return Object.keys(counts).map((lang) => ({
		name: lang,
		value: counts[lang],
	}));
};
