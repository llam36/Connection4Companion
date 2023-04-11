import {NextResponse} from "next/server"

export default function checkMethod(allowedMethods, method) {
    if (allowedMethods.includes(method)) {
        return NextResponse.next()
        
    }
    return new NextResponse(
        JSON.stringify({ success: false, error: "Invalid request method: " + method }),
        { status: 400 }
    )
} 