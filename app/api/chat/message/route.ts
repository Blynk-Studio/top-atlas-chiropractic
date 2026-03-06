import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RETELL_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Chat not configured" }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { chat_id, content } = body;

    if (!chat_id || !content) {
      return NextResponse.json(
        { error: "Missing chat_id or content" },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.retellai.com/create-chat-completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ chat_id, content }),
    });

    const data = await res.json();
    return NextResponse.json({ response: data.content || data.response });
  } catch {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
