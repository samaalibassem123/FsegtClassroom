import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();


    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("from now act like your are an aichatbot for a website for e-learning called fsegtcalssroom  there is the prompt handle it :"+prompt);

    const response = result.response.text();
    return NextResponse.json({ res: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ res: error }, { status: 400 });
  }
}
