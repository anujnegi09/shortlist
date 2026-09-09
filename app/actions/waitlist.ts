"use server";

import { adminDb } from "@/lib/firebase/admin";

export async function joinWaitlist(email: string) {
  const normalizedEmail = email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(normalizedEmail)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    };
  }

  try {
    const existing = await adminDb
      .collection("waitlist")
      .where("email", "==", normalizedEmail)
      .get();

    if (!existing.empty) {
      return {
        success: false,
        error: "This email is already on the waitlist.",
      };
    }

    await adminDb.collection("waitlist").add({
      email: normalizedEmail,
      createdAt: new Date(),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Waitlist error:", error);

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}