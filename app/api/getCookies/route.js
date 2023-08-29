import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const cookieList = cookies().getAll();
    return NextResponse.json({ cookieList });
}

export async function POST(req, res) {
    try {
        const requestData = await req.json();
        const name = requestData.name;

        if (!name) {
            return NextResponse.json({ message: "Cookie name is missing" }, 400);
        }

        const cookieStore = await cookies(req);
        const isCookieExists = cookieStore.has(name);
        let message = "Cookie not found!";
        let cookieData = [];

        if (isCookieExists) {
            cookieData.push(cookieStore.get(name));
            message = "Cookie data found!";
        }

        return NextResponse.json({ isCookieExists, message, cookieData });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred", error }, 500);
    }
}
