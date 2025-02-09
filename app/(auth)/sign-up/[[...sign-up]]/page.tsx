"use client"
import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function SignUpPage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 animate-pulse bg-opacity-10 "></div>

      <div className="z-10 flex flex-col items-center justify-center p-6 rounded-lg bg-black bg-opacity-40 backdrop-blur-lg shadow-lg">
        <h1 className="text-white text-3xl font-bold mb-4">Welcome to DRISHYA</h1>
        {/* <p className="text-gray-300 mb-6">Sign up to start chatting with your friends</p> */}
        <SignUp />
      </div>
    </main>
  )
}
