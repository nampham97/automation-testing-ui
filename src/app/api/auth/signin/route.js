import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {email, password} = await req.json();
        console.log('vao be:', {email, password})
    } catch (error) {
        console.log({error})
    }

    return NextResponse.json({message: 'ok'})
}