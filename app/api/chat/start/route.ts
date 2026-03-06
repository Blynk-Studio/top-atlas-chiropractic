import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;
  const agentId = process.env.NEXT_PUBLIC_RETELL_CHAT_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json({ error: "Chat not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.retellai.com/create-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    const data = await res.json();
    return NextResponse.json({ chat_id: data.chat_id });
  } catch {
    return NextResponse.json({ error: "Failed to start chat" }, { status: 500 });
  }
}
