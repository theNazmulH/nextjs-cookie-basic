import { NextResponse } from "next/server";

export async function GET(req) {
    const url = new URL("/", req.url);
    const response = NextResponse.redirect(url, {
        status: 302,
    });
    return response;
}
