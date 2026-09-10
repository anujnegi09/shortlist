"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { getIdeas } from "@/lib/firestore/ideas";

import IdeaForm from "@/components/board/IdeaForm";
import IdeaList from "@/components/board/IdeaList";
import Navbar from "@/components/NavBar";
import Loading from "@/components/common/Loading";

import type { Idea } from "@/components/board/IdeaCard";

export default function BoardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [ideasLoading, setIdeasLoading] = useState(true);

  const loadIdeas = useCallback(async () => {
    try {
      setIdeasLoading(true);

      const data = await getIdeas();

      setIdeas(data as Idea[]);
    } catch (error) {
      console.error("Error loading ideas:", error);
    } finally {
      setIdeasLoading(false);
    }
  }, []);

  // Redirect signed-out users to login
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Load ideas when user is authenticated
  useEffect(() => {
    if (user) {
      loadIdeas();
    }
  }, [user, loadIdeas]);

  function handleDeleted(ideaId: string) {
    setIdeas((currentIdeas) =>
      currentIdeas.filter((idea) => idea.id !== ideaId),
    );
  }

  // UI-only derived list: ideas belonging to the current user
  const myIdeas = useMemo(
    () => ideas.filter((idea) => idea.createdBy === user?.uid),
    [ideas, user?.uid],
  );

  if (loading || !user) {
    return <Loading text="Loading..." fullScreen />;
  }

  function handleVoted(ideaId: string) {
    setIdeas((currentIdeas) =>
      currentIdeas.map((idea) =>
        idea.id === ideaId ? { ...idea, votes: (idea.votes || 0) + 1 } : idea,
      ),
    );
  }
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="mx-auto max-w-6xl p-8">
        <h1 className="text-3xl font-bold text-slate-950">
          Welcome to Shortlist
        </h1>

        <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <p className="text-slate-700">
            <strong>Name:</strong> {user.displayName || "Not available"}
          </p>

          <p className="mt-2 text-slate-700">
            <strong>Email:</strong> {user.email || "Not available"}
          </p>
        </div>

        {/* Create + My Published Ideas */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-950">
              Create an Idea
            </h2>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <IdeaForm onCreated={loadIdeas} />
            </div>
          </section>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="mb-4 text-lg font-semibold text-slate-950">
              My Published Ideas
            </h2>
            <IdeaList
              ideas={myIdeas}
              loading={ideasLoading}
              onVoted={handleVoted}
              onDeleted={handleDeleted}
            />
          </aside>
        </div>

        {/* Community Ideas — everyone's ideas, no delete button for anyone */}
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-slate-950">
            Community Ideas
          </h2>

          <IdeaList
            ideas={ideas}
            loading={ideasLoading}
            onVoted={handleVoted}
            hideDelete
          />
        </section>
      </div>
    </main>
  );
}
