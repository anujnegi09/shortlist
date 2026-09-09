"use client";
import { auth } from "@/lib/firebase/client";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Google sign-in
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

// Email/password sign-up (new account)
export function signUpWithEmail(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Email/password sign-in (existing account)
export function signInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Sign out (works regardless of which method was used)
export function signOutUser() {
  return signOut(auth);
}