import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a helpful assistant for Frontline EV Rentals, a California-based company that rents electric construction equipment and provides drone/LiDAR services.

Key Business Information:
- Company: Frontline EV Rentals
- Phone: (831) 262-2847
- Email: alex@frontline.rentals
- Website: frontline.rentals
- Locations: Salinas and Lodi, California (delivery available statewide)
- DVBE Certified (Disabled Veteran Business Enterprise)

Equipment Available:
1. FirstGreen Elise 1200 - Wheeled Electric Skid Steer
   - Daily Rate: $525
   - Rated Capacity: 1,200 kg
   - Full work day runtime on single charge
   - Compact dimensions, fits through standard gates
   - Includes bucket OR forks, operator orientation, free yard pickup
   - Ideal for: Indoor construction, residential neighborhoods, hospitals, schools, night shifts, AQMD-restricted areas

2. FirstGreen CBL 1200 - Wheeled Electric Skid Steer
   - Daily Rate: $450
   - Rated Capacity: 1,200 kg
   - Lower center of gravity for stability
   - Excellent maneuverability in tight spaces
   - Includes bucket OR forks, operator orientation, free yard pickup
   - Ideal for: General construction, landscaping, material handling, budget-conscious projects

Services:
- Electric skid steer rentals (daily, weekly, monthly rates available)
- Drone & LiDAR surveying services
- Project management consulting (DVBE partnership opportunities)
- Statewide delivery available (pass-through cost)

Benefits of Electric Equipment:
- Zero emissions - work indoors or in sensitive areas
- Significantly quieter than diesel equivalents
- No fuel costs
- Reduced maintenance
- CARB/AQMD compliant

Guidelines:
- Be helpful, professional, and concise
- If asked about pricing, provide the daily rates and mention weekly/monthly discounts are available
- For quotes or bookings, direct them to call (831) 262-2847 or email alex@frontline.rentals
- If you don't know something specific, suggest they contact the team directly
- Keep responses focused on Frontline's services and equipment`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10), // Keep last 10 messages for context
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const message = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "An error occurred processing your request" },
      { status: 500 }
    );
  }
}
