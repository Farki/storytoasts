import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Calculate the date one month ago from now
    const oneDayAgo = new Date();
    oneDayAgo.setDate(oneDayAgo.getDate() - 1); // Subtract 1 day

    await prisma.verificationToken.deleteMany({
      where: {
        expires: {
          lt: oneDayAgo,
        },
      },
    });

    return NextResponse.json({
      message: "Expired tokens cleaned successfully.",
    });
  } catch (error) {
    console.error("Error cleaning expired tokens:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
