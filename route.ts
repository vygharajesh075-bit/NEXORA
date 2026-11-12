
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { getCampusIntelligence } from "@/lib/campus-intelligence";
import { activitySeed } from "@/lib/campus";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const requestSchema = z.object({
  question: z.string().trim().min(2).max(1500),
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is missing." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please enter a valid question." },
        { status: 400 }
      );
    }

    const campus = getCampusIntelligence();

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.5",

      instructions: `
You are NEXORA CAMPUS INTELLIGENCE.

You are the AI brain of a smart university campus
management platform.

You have access to the supplied campus dataset.

CAMPUS BUILDINGS:
Engineering Block
Science Laboratories
Central Library
Administration
Innovation Hub
Student Residence

YOUR RESPONSIBILITIES:

1. Analyze building energy consumption.
2. Compare building performance.
3. Analyze temperature and occupancy.
4. Identify unusual metrics.
5. Recommend energy improvements.
6. Suggest infrastructure improvements.
7. Explain potential operational risks.
8. Generate executive campus reports.
9. Help administrators make informed decisions.

IMPORTANT RULES:

- Always use the supplied campus data.
- Mention building names when relevant.
- Never invent measurements.
- The supplied figures are simulated demonstration values.
- Never claim they are live IoT readings.
- Distinguish calculated statistics from predictions.
- Explain recommendations clearly.
- Do not claim to control physical equipment.
- Do not claim that an alert was sent or an action was performed.
- Be professional, intelligent and concise.

Format answers using headings and bullet points when useful.
      `,

      input: `
CAMPUS INTELLIGENCE DATA:

${JSON.stringify(campus, null, 2)}

RECENT CAMPUS ACTIVITY:

${JSON.stringify(activitySeed, null, 2)}

ADMINISTRATOR QUESTION:

${parsed.data.question}
      `,

      max_output_tokens: 1200,
      store: false,
    });

    return NextResponse.json({
      success: true,
      answer: response.output_text,
      campusSummary: campus.summary,
      source: campus.source,
    });

  } catch (error) {
    console.error("NEXORA AI ERROR:", error);

    return NextResponse.json(
      { error: "NEXORA AI request failed. Check your API configuration." },
      { status: 500 }
    );
  }
}
