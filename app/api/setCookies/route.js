import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
    return NextResponse.json({ message: name });
}

export async function POST(req, res) {
    const requestData = await req.json();
    const cookieName = requestData.cookieName;
    const cookieValue = requestData.cookieValue;
    const expirationDate = await new Date();
    expirationDate.setDate(expirationDate.getDate() + 6);
    cookies().set({
        name: cookieName,
        value: cookieValue,
        expires: expirationDate,
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "strict",
    });
    console.log("requestData: ", requestData);
    console.log("expirationDate: ", expirationDate);
    return NextResponse.json({ message: "Cookies Set successfully" });
}
