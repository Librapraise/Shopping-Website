import { OAuthStrategy, createClient } from "@wix/sdk";
import { getMaxAge } from "next/dist/server/image-optimizer";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export const middleware = async (next) => {
    const res = NextResponse.next();

    if (cookies.get("refreshToken")) {
        return res
    }

    const wixClient = createClient({
        auth: OAuthStrategy({ clientId: NEXT_PUBLIC_WIX_CLIENT_ID }),
    });

    const tokens = await wixClient.auth.generateVisitorTokens();
    res.cookies.set("refreshToken", JSON.stringify(tokens, refreshToken), {
        maxAge: 60 * 60 * 24 * 30,
    });
    
    return res;
}