import { NextResponse } from "next/server";
import { fetchServices } from "@/lib/api";

export async function GET() {
  try {
    const response = await fetchServices({ limit: 100 });
    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json(
      { data: [], pagination: { totalItems: 0, page: 1, limit: 100, totalPages: 0 } },
      { status: 200 }
    );
  }
}
