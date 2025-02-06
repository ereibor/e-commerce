"use client";


import { signIn } from "next-auth/react"; // Import directly from next-auth/react for client components


export default function Home() {
  return (
    <div className="">
      

      <div className="bg-white w-full">THIS HOME PAGE</div>
      {/* <button
        onClick={() => signIn("google")}
        className="bg-white p-2 px-4 rounded-md"
      >
        Sign in with Google
      </button> */}
    </div>
  );
}
