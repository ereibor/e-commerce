"use client";

import { signIn } from "next-auth/react"; // Import directly from next-auth/react for client components

export default function Home() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col items-center">
       <div className="bg-white">THIS HOME PAGE</div> 
      <button
        onClick={() => signIn("google")}
        className="bg-black  text-white p-2 px-4 rounded-md"
      >
        Sign in with Google
      </button>
      </div>
    </div>
  );
}
