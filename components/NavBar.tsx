"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  }

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-slate-950"
        >
          Shortlist
        </Link>

        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                href="/board"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Go to Board
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Home
              </Link>

              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}