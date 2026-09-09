// "use client";

// import { signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase/client";
// import { useCallback, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import { useAuth } from "@/providers/AuthProvider";
// import { getIdeas } from "@/lib/firestore/ideas";

// import IdeaForm from "@/components/board/IdeaForm";
// import IdeaList from "@/components/board/IdeaList";

// import type { Idea } from "@/components/board/IdeaCard";

// export default function BoardPage() {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   const [ideas, setIdeas] = useState<Idea[]>([]);
//   const [ideasLoading, setIdeasLoading] = useState(true);

//   const loadIdeas = useCallback(async () => {
//     try {
//       setIdeasLoading(true);

//       const data = await getIdeas();

//       setIdeas(data as Idea[]);
//     } catch (error) {
//       console.error("Error loading ideas:", error);
//     } finally {
//       setIdeasLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (user) {
//       loadIdeas();
//     }
//   }, [user, loadIdeas]);

//   function handleDeleted(ideaId: string) {
//     setIdeas((currentIdeas) =>
//       currentIdeas.filter((idea) => idea.id !== ideaId)
//     );
//   }
//   async function handleSignOut() {
//   try {
//     await signOut(auth);
//     router.push("/login");
//   } catch (error) {
//     console.error("Sign out failed:", error);
//   }
// }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   useEffect(() => {
//   if (!loading && !user) {
//     router.push("/login");
//   }
// }, [user, loading, router]);

// if (loading || !user) {
//   return <div>Loading...</div>;
// }

//   return (
//     <main className="min-h-screen bg-[#F8FAFC] p-8">
//       <div className="mx-auto max-w-4xl">
//         <h1 className="text-3xl font-bold text-slate-950">
//   Welcome to Shortlist
// </h1>

// <div className="mt-6 flex items-center justify-between gap-4 rounded-xl bg-white p-6 shadow-sm">
//   <div>
//     <p className="text-slate-700">
//       <strong>Name:</strong>{" "}
//       {user.displayName || "Not available"}
//     </p>

//     <p className="mt-2 text-slate-700">
//       <strong>Email:</strong>{" "}
//       {user.email || "Not available"}
//     </p>
//   </div>

//   <button
//     type="button"
//     onClick={handleSignOut}
//     className="shrink-0 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
//   >
//     Sign Out
//   </button>
// </div>

//         <div className="mt-8">
//           <IdeaForm onCreated={loadIdeas} />
//         </div>

//         <section className="mt-8">
//           <h2 className="mb-4 text-2xl font-semibold text-slate-950">
//             Community Ideas
//           </h2>

//           <IdeaList
//             ideas={ideas}
//             loading={ideasLoading}
//             onDeleted={handleDeleted}
//           />
//         </section>
//       </div>
//     </main>
//   );
// }


"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/providers/AuthProvider";
import { getIdeas } from "@/lib/firestore/ideas";

import IdeaForm from "@/components/board/IdeaForm";
import IdeaList from "@/components/board/IdeaList";
import Navbar from "@/components/NavBar";

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
      currentIdeas.filter((idea) => idea.id !== ideaId)
    );
  }

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-3xl font-bold text-slate-950">
          Welcome to Shortlist
        </h1>

        <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <p className="text-slate-700">
            <strong>Name:</strong>{" "}
            {user.displayName || "Not available"}
          </p>

          <p className="mt-2 text-slate-700">
            <strong>Email:</strong>{" "}
            {user.email || "Not available"}
          </p>
        </div>

        <div className="mt-8">
          <IdeaForm onCreated={loadIdeas} />
        </div>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold text-slate-950">
            Community Ideas
          </h2>

          <IdeaList
            ideas={ideas}
            loading={ideasLoading}
            onDeleted={handleDeleted}
          />
        </section>
      </div>
    </main>
  );
}