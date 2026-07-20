import { NextResponse } from "next/server";
import { fetchBlogs } from "@/lib/api";

export async function GET() {
  try {
    const response = await fetchBlogs({ limit: 6 });
    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { data: [], pagination: { totalItems: 0, page: 1, limit: 6, totalPages: 0 } },
      { status: 200 }
    );
  }
}
