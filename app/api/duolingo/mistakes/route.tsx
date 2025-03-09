import { NextResponse } from "next/server";
import { getMistakes } from "@/lib/duolingo";
import { ExtractedMistake, MistakeReponse} from "@/types/Mistakes";


export const GET = async () =>{
	const response = await getMistakes();
	
	if(response.status === 204 || response.status > 400){
		return NextResponse.json({ data: [] }, { status: 200 } )
	}
	
	const data: MistakeReponse | null = await response.json();
	
	if (data === null) {
		return NextResponse.json({ data: [] }, { status: 200 });
	}
	
	const mistakes: ExtractedMistake[] = data?.mistakes.map(({
		                                                        challengeIdentifier,
		                                                        prompt,
																														timestamp,
		                                                        maxAIUserResponse,
		                                                        maxAIChallengePrompt,
		                                                        maxAIAnnotatedSolution,
		                                                        solutionTranslation,
		                                                        targetLanguage
	                                                        }): ExtractedMistake => ({
		specificType: challengeIdentifier.specificType,
		prompt,
		timestamp,
		maxAIUserResponse,
		maxAIChallengePrompt,
		maxAIAnnotatedSolution,
		solutionTranslation,
		targetLanguage
	}));
	
	
	return NextResponse.json({ mistakes }, { status: 200 });
}