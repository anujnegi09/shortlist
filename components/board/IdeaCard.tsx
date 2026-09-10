"use client";

import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { deleteIdea, voteForIdea } from "@/lib/firestore/ideas";

export type Idea = {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdByName: string;
  votes: number;
  createdAt?: unknown;
  updatedAt?: unknown;
};

type IdeaCardProps = {
  idea: Idea;
  onDeleted?: (ideaId: string) => void;
  onVoted?: (ideaId: string) => void;
  hideDelete?: boolean; // UI-only: hide delete button even if owner
};

export default function IdeaCard({
  idea,
  onDeleted,
  onVoted,
  hideDelete = false,
}: IdeaCardProps) {
  const { user } = useAuth();

  const [voting, setVoting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  const isOwner = user?.uid === idea.createdBy;

  async function handleVote() {
    if (!user || voting) return;

    try {
      setVoting(true);
      setError("");

      await voteForIdea(idea.id, user.uid);

      onVoted?.(idea.id);
    } catch (error) {
      console.error("Error voting:", error);
      setError("You may have already voted.");
    } finally {
      setVoting(false);
    }
  }

  async function handleDelete() {
    if (!user || !isOwner || deleting) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete this idea?"
    );

    if (!confirmed) return;

    try {
      setDeleting(true);
      setError("");

      await deleteIdea(idea.id);

      onDeleted?.(idea.id);
    } catch (error) {
      console.error("Error deleting idea:", error);
      setError("Failed to delete idea.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <article className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-slate-950">
            {idea.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            by {idea.createdByName}
          </p>
        </div>

        <button
          type="button"
          onClick={handleVote}
          disabled={voting}
          className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>▲</span>
          <span>{idea.votes || 0}</span>
        </button>
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        {idea.description}
      </p>
 
      {isOwner && !hideDelete && (
        <button
          type="button"
          onClick={handleDelete}
          disabled={deleting}
          className="mt-4 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {deleting ? "Deleting..." : "Delete"}
        </button>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}
    </article>
  );
}