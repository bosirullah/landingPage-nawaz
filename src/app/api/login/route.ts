// src/app/api/login/route.ts

import { NextRequest, NextResponse } from "next/server";

const ADMIN_EMAIL = process.env.EMAIL;
const ADMIN_PASSWORD = process.env.PASSWORD;

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        return NextResponse.json(
            { message: "Login successful" },
            { status: 200 }
        );
    } else {
        return NextResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }
}
