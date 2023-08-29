import { NextResponse } from "next/server";

export function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith("/api")) {
        const { headers } = req;
        const authorization = headers.get("Authorization");

        const modifiedHeaders = new Headers(headers);
        modifiedHeaders.set("Authorization", `Bearer ${authorization}`);

        return NextResponse.next({ request: { headers: modifiedHeaders } });
    }

}
