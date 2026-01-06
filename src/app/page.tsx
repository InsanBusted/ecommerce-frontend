"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Home() {
  const handleLogout = async () => {
    await authClient.signOut();

    alert("signed out");
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="font-bold text-4xl">Merdeka !!!</h1>
      <div className="flex gap-3">
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
