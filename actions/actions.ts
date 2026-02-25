"use server";


import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    const authObject = await auth();
    
    authObject.protect();
    
    const { sessionClaims } = authObject;
  // Property 'protect' does not exist on type 'Promise<SessionAuthWithRedirect>'.
}