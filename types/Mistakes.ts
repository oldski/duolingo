export type MistakeReponse = {
	mistakes: Mistake[];
}

export type Mistake = {
	challengeIdentifier: {
		specificType: string;
	};
	prompt: string | null;
	timestamp: number;
	maxAIUserResponse: string | null;
	maxAIChallengePrompt: string | null;
	maxAIAnnotatedSolution: string | null;
	solutionTranslation: string | null;
	targetLanguage: string | null;
};

export type ExtractedMistake = {
	specificType: string;
	prompt: string | null;
	timestamp: number;
	maxAIUserResponse: string | null;
	maxAIChallengePrompt: string | null;
	maxAIAnnotatedSolution: string | null;
	solutionTranslation: string | null;
	targetLanguage: string | null;
};