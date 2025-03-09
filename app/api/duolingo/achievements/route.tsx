import { NextResponse } from "next/server";
import { getAchievements } from "@/lib/duolingo";

export async function GET(){
	const response = await getAchievements();
	
	console.log(333, response)
	if(response.status === 204 || response.status > 400){
		return NextResponse.json({ data: [] }, { status: 200 } )
	}
	
	const data = await response.json();
	
	if (data === null) {
		return NextResponse.json({ data: [] }, { status: 200 });
	}
	
	return NextResponse.json({ data }, { status: 200 });
}