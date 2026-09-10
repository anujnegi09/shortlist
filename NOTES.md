# Shortlist — Notes

## What was new to me and how I worked it out

This assignment introduced me to Next.js and Firebase in a more practical way.

I had previously worked mainly with React, Node.js, Express.js and MongoDB, but I had not built a complete application using Next.js App Router with Firebase Authentication and Firestore.

The main things I learned were:

* Next.js App Router and its file-based routing.
* Using `"use client"` when a component needs client-side state, effects, or browser APIs.
* Firebase Authentication with Google sign-in.
* Cloud Firestore for storing ideas and votes.
* Firebase Admin SDK for server-side operations.
* Next.js Server Actions for server-side waitlist signup.
* Firestore Security Rules and how they protect data even when a user directly calls Firestore from the browser.
* Modeling votes using a subcollection so that one user can only vote once.

One of the more useful things I learned was that client-side UI restrictions are not enough for security. For example, disabling a vote button does not prevent someone from opening the browser console and calling Firestore directly. Because of that, I used Firestore rules and a vote document associated with the user's UID to enforce the one-vote limit.

I also learned how Firebase's production Firestore rules work. Initially, Firestore denied reads and writes, so I had to understand the rules and explicitly allow only the operations required by the application.

## How I used AI

I used AI throughout the assignment as a development assistant, mainly for understanding unfamiliar Next.js and Firebase concepts, debugging errors, reviewing implementation approaches, and generating initial code.

AI was useful for getting started quickly, especially with:

* Next.js App Router structure.
* Firebase client and Admin SDK setup.
* Firestore queries.
* Firestore security rules.
* Server Actions.
* React component structure.

However, I did not treat AI-generated code as automatically correct. I tested the code in the application and checked the Firebase console when something did not behave as expected.

For example, I initially received Firestore rules that needed to be changed to correctly enforce the one-vote requirement. I tested the rules by creating ideas, voting, and checking the vote documents in Firestore.

I also had an issue with the Firebase Admin SDK service-account environment variable. The JSON format was initially incorrect, which caused JSON parsing errors. I had to inspect the actual error, correct the environment variable format, and make sure the service account contained the required fields such as `client_email`.

Another issue was the redirect on the `/board` page. A router redirect was being called during rendering, which caused a Next.js error. I changed the implementation to perform the redirect inside `useEffect` after checking the authentication state.

These experiences made me realize that AI is useful for speed, but the generated solution still needs to be understood, tested, and sometimes changed.

## Where I got stuck and how I got past it

### Firebase Admin SDK

The Firebase Admin SDK was new to me. I initially had problems parsing the `FIREBASE_SERVICE_ACCOUNT` environment variable.

The main issue was that the service-account JSON was not formatted correctly as an environment variable. After checking the error message and the structure of the downloaded Firebase service-account JSON, I corrected the format and was able to use the Admin SDK from the Next.js server.

### Firestore Security Rules

Security rules were one of the least familiar parts of the assignment.

The important challenge was enforcing the one-vote rule securely. I did not want to rely only on the frontend button being disabled.

I modeled votes as:

`ideas/{ideaId}/votes/{userId}`

When a user votes, the application creates their vote document and increments the idea's vote count in the same batch. The Firestore rules check that the vote belongs to the authenticated user and that the user does not already have a vote document.

I tested this by voting once successfully and then attempting to vote again.

### Authentication redirect

I also encountered a Next.js issue when redirecting unauthenticated users from `/board`. The router was being called during the component render.

I fixed this by moving the redirect into a `useEffect` and checking the Firebase authentication loading state before redirecting.

## What I cut and why

I intentionally kept the application relatively small because the assignment asked for five core requirements first.

I did not add:

* An admin dashboard.
* Planned/shipped idea statuses.
* File or image uploads.
* Chat or messaging.
* Complex real-time functionality.
* A large UI/component library.
* Extra features that were not required.

The goal was to make the required functionality work correctly rather than spend the limited assignment time on optional features.

I also kept the product simple: a public landing page with a waitlist and a signed-in community ideas board.

## Anything I know is wrong or fragile

There are still areas I would improve in a production application.

The waitlist currently checks for an existing email before creating a new document. This handles normal duplicate submissions, but a more robust implementation would use the normalized email as the document ID and handle creation atomically to avoid race conditions.

The application also currently uses client-side Firestore reads for the ideas board. This is acceptable for the assignment, but for a larger application I would consider pagination and more deliberate query limits as the number of ideas grows.

The UI error handling is intentionally simple. Some errors are displayed as general messages rather than giving the user detailed information.

I also kept the application lightweight instead of adding extensive abstractions that were not necessary for the assignment.

## What I would do with another week

With another week, I would improve the project in several areas:

1. Add better loading, error, and empty states.
2. Add pagination or infinite scrolling for ideas.
3. Improve the voting UI and show whether the current user has already voted.
4. Add an admin workflow for marking ideas as planned or shipped.
5. Add automated tests for the voting and security logic.
6. Improve accessibility and keyboard navigation.
7. Improve the responsive design further.
8. Add better validation and rate limiting for the waitlist.
9. Improve the overall project architecture as the application grows.
10. Review the Firestore rules and data model again with larger-scale usage in mind.

## Final reflection

The biggest takeaway from this assignment was that I could learn an unfamiliar stack quickly by building something with it rather than trying to learn every part of the technology beforehand.

The most valuable part was not only getting the application working, but understanding why authentication, server-side code, Firestore data modeling, and security rules need to work together.

I also learned that using AI effectively means reviewing and testing its suggestions instead of blindly accepting generated code.
