import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;
  const agentId = process.env.NEXT_PUBLIC_RETELL_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json({ error: "Voice not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    const data = await res.json();
    return NextResponse.json({ access_token: data.access_token });
  } catch {
    return NextResponse.json(
      { error: "Failed to start voice call" },
      { status: 500 }
    );
  }
}
