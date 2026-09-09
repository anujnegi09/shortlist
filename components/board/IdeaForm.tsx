"use client";

import { FormEvent, useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { createIdea } from "@/lib/firestore/ideas";

type IdeaFormProps = {
  onCreated?: () => void;
};

export default function IdeaForm({ onCreated }: IdeaFormProps) {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user) {
      setMessage("You must be logged in to create an idea.");
      return;
    }

    if (!title.trim() || !description.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await createIdea({
        title: title.trim(),
        description: description.trim(),
        createdBy: user.uid,
        createdByName: user.displayName || user.email || "Anonymous",
      });

      setTitle("");
      setDescription("");
      setMessage("Idea created successfully!");

      onCreated?.();
    } catch (error) {
      console.error("Error creating idea:", error);
      setMessage("Failed to create idea. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-950">
        Share an Idea
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Tell the community about your idea.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Title
          </label>

          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your idea title"
            className="w-full rounded-lg border text-black border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
            disabled={loading}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Description
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your idea..."
            rows={5}
            className="w-full resize-none text-black rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Idea"}
        </button>

        {message && (
          <p className="text-sm text-slate-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}