import React from 'react'
import { SessionProvider } from 'next-auth/react'
"use client";

type Provider = {
  children: string
  session: null
}

export default function Provider({children, session} : Provider) {
  return (
   <SessionProvider session={session}>
    {children}
   </SessionProvider>
  )
}
