"use client";

import IdeaCard, { Idea } from "./IdeaCard";

type IdeaListProps = {
  ideas: Idea[];
  loading?: boolean;
  onDeleted?: (ideaId: string) => void;
};

export default function IdeaList({
  ideas,
  loading = false,
  onDeleted,
}: IdeaListProps) {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 text-center text-slate-500 shadow-sm">
        Loading ideas...
      </div>
    );
  }

  if (ideas.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow-sm">
        <p className="text-slate-600">No ideas yet.</p>

        <p className="mt-1 text-sm text-slate-400">
          Be the first person to share an idea!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {ideas.map((idea) => (
        <IdeaCard
          key={idea.id}
          idea={idea}
          onDeleted={onDeleted}
        />
      ))}
    </div>
  );
}