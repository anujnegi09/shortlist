"use client";
import { auth } from "@/lib/firebase/client";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Google sign-in
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}
//sign out user
export function signOutUser() {
  return signOut(auth);
}