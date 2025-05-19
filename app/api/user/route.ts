import { auth } from "@/auth"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
 
export async function GET() {
  const session = await auth()
  
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 })
  }
 
  return NextResponse.json({
    user: session.user,
  })
}
