import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  writeBatch,
} from "firebase/firestore";

import { db } from "@/lib/firebase/client";

export type CreateIdeaData = {
  title: string;
  description: string;
  createdBy: string;
  createdByName: string;
};

export async function createIdea(data: CreateIdeaData) {
  const ideasRef = collection(db, "ideas");

  const docRef = await addDoc(ideasRef, {
    title: data.title,
    description: data.description,
    createdBy: data.createdBy,
    createdByName: data.createdByName,
    votes: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getIdeas() {
  const ideasRef = collection(db, "ideas");

  const ideasQuery = query(
    ideasRef,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(ideasQuery);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function voteForIdea(
  ideaId: string,
  userId: string
) {
  const ideaRef = doc(db, "ideas", ideaId);
  const voteRef = doc(db, "ideas", ideaId, "votes", userId);

  const batch = writeBatch(db);

  batch.set(voteRef, {
    userId,
    createdAt: serverTimestamp(),
  });

  batch.update(ideaRef, {
    votes: increment(1),
    updatedAt: serverTimestamp(),
  });

  await batch.commit();
}

export async function deleteIdea(ideaId: string) {
  const ideaRef = doc(db, "ideas", ideaId);

  await deleteDoc(ideaRef);
}