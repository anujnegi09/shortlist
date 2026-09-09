"use client";

import { FormEvent, useState } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    const result = await joinWaitlist(email);

    setLoading(false);

    if (result.success) {
      setMessage("You're on the list! We'll keep you updated.");
      setEmail("");
    } else {
      setMessage(result.error || "Something went wrong.");
    }
  }

  return (
    <section
      id="waitlist"
      className="bg-[#F8FAFC] px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-xl shadow-slate-900/5 sm:px-12">
          <p className="text-sm font-semibold text-blue-600">
            Early access
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Be the first to try Shortlist
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Join the waitlist and get early access when Shortlist is ready.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Joining..." : "Join waitlist"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-sm text-slate-600">
              {message}
            </p>
          )}

          <p className="mt-5 text-xs text-slate-400">
            No spam. Just updates about Shortlist.
          </p>
        </div>
      </div>
    </section>
  );
}