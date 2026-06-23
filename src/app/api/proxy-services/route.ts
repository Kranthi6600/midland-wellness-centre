import { NextResponse } from "next/server";
import { fetchServices } from "@/lib/api";

export async function GET() {
  try {
    console.log("API route: Fetching services");
    const response = await fetchServices({ limit: 100 });
    console.log("API route: Response", response);
    return NextResponse.json(response);
  } catch (err) {
    console.error("API route: Error", err);
    return NextResponse.json(
      { data: [], pagination: { totalItems: 0, page: 1, limit: 100, totalPages: 0 } },
      { status: 200 }
    );
  }
}
