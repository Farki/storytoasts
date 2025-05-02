import { NextRequest, NextResponse } from "next/server";
import { QUERIES } from "@/server/db/queries";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get("projectId");
    if (!projectId) {
      return NextResponse.json(
        { error: "Missing projectId parameter" },
        { status: 400 },
      );
    }

    const toasts = await QUERIES.getToastsByProjectId(projectId);

    if (toasts.length === 0) {
      return NextResponse.json({ message: null }, { status: 204 });
    }

    // Optionally set CORS headers
    const response = NextResponse.json(toasts);
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");

    return response;
  } catch (error) {
    console.error("Error fetching toasts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// Optional: Handle preflight CORS requests
export function OPTIONS() {
  const response = NextResponse.json({}, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
