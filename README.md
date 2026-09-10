\# Shortlist

Shortlist is a community idea board where users can share product ideas, discover ideas from other users, and upvote the ideas they find useful.

The project also includes a public waitlist where users can submit their email address to join the waitlist.

## Features

* 🔐 Google authentication with Firebase Authentication
* 💡 Create and share ideas
* 📋 View community ideas
* 🕒 Ideas are displayed newest first
* 👍 Upvote an idea once per user
* 🗑️ Delete your own ideas
* 📧 Join the waitlist using email
* 🔒 Firestore Security Rules for database authorization
* ⚡ Firebase Admin SDK for secure server-side waitlist operations
* 📱 Responsive interface

## Tech Stack

* **Next.js** — App Router
* **TypeScript** — Type-safe development
* **Firebase Authentication** — Google sign-in
* **Cloud Firestore** — Database for ideas and votes
* **Firebase Admin SDK** — Server-side waitlist operations
* **Tailwind CSS** — Styling
* **Vercel** — Deployment

## Application Flow

### Authentication

Users sign in using Google through Firebase Authentication.

```text
User
  ↓
Google Sign-In
  ↓
Firebase Authentication
  ↓
Authenticated User
  ↓
Board
```

Authentication state is managed globally using a React Context provider.

### Ideas

Authenticated users can create ideas and view ideas posted by the community.

```text
Board
  ↓
IdeaForm
  ↓
createIdea()
  ↓
Cloud Firestore
  ↓
Firestore Security Rules
```

Ideas contain information such as:

* Title
* Description
* Creator
* Creator name
* Vote count
* Created timestamp
* Updated timestamp

### Voting

Each user can vote on an idea only once.

Votes are stored in a subcollection:

```text
ideas/{ideaId}/votes/{userId}
```

The vote operation updates two things atomically:

1. Creates the user's vote document.
2. Increases the idea's vote count.

Firestore Security Rules prevent users from voting multiple times.

### Deleting Ideas

Users can delete only ideas that they created.

The frontend only displays the Delete button to the owner, while the actual authorization is enforced by Firestore Security Rules.

## Waitlist

The waitlist does not allow direct client-side Firestore access.

The flow is:

```text
Landing Page
    ↓
Server Action
    ↓
Email Validation
    ↓
Firebase Admin SDK
    ↓
Cloud Firestore
```

The Firestore rules explicitly deny client access to the waitlist:

```text
allow read, write: if false;
```

This ensures that the browser cannot directly read or write waitlist data.

## Firestore Security

Firestore Security Rules are used to enforce authorization at the database level.

The rules ensure that:

* Only authenticated users can access ideas.
* Users can create their own ideas.
* New ideas start with zero votes.
* Required fields have the correct data types.
* Only the vote count and timestamp can be changed during voting.
* A vote can increase the vote count by only one.
* A user can vote only once per idea.
* Users can delete only their own ideas.
* Vote documents cannot be modified or deleted.
* The waitlist cannot be accessed directly from the client.

Client-side checks are used for user experience, but Firestore Security Rules provide the actual database-level protection.

## Project Structure

```text
shortlist/
│
├── app/
│   ├── actions/
│   │   └── waitlist.ts
│   │
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts
│   │
│   ├── board/
│   │   └── page.tsx
│   │
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── board/
│   │   ├── IdeaCard.tsx
│   │   ├── IdeaForm.tsx
│   │   └── IdeaList.tsx
│   │
│   └── Navbar.tsx
│
├── lib/
│   ├── firebase/
│   │   ├── admin.ts
│   │   ├── auth.ts
│   │   └── client.ts
│   │
│   └── firestore/
│       └── ideas.ts
│
├── providers/
│   └── AuthProvider.tsx
│
├── public/
│
├── firestore.rules
├── NOTES.md
├── README.md
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Environment Variables

Create a `.env.local` file in the project root.

The Firebase client configuration uses the following environment variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

The Firebase Admin SDK uses:

```env
FIREBASE_SERVICE_ACCOUNT=
```

The Firebase service account is sensitive and must never be committed to GitHub.

Make sure `.env.local` is included in `.gitignore`.

## Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd shortlist
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env.local` and add the required Firebase configuration and Admin SDK credentials.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

## Deployment

The application can be deployed using Vercel.

Before deploying, configure all required environment variables in the Vercel project settings.

Also make sure the deployed domain is configured as an authorized domain in Firebase Authentication.

## Security Notes

* Firebase Admin credentials are stored only in server-side environment variables.
* No Firebase service-account credentials are committed to the repository.
* The waitlist cannot be accessed directly from the client.
* Firestore rules enforce ownership and voting restrictions.
* Authentication is required for the community board.
* Client-side validation is supplemented by database-level security rules.

## Development Notes

The project was built using Next.js App Router and Firebase services.

`NOTES.md` contains additional development notes, including:

* New technologies learned
* How AI was used during development
* Problems encountered and how they were solved
* Features that were intentionally cut
* Known fragile areas
* What could be improved with additional development time

## Future Improvements

Possible improvements include:

* Pagination for the ideas board
* Better loading and error states
* More detailed voting feedback
* Improved accessibility
* Automated tests
* Rate limiting for the waitlist
* Better validation and input constraints
* Admin functionality for managing ideas and the waitlist
* Improved responsive design
* More comprehensive monitoring and error handling

## License

This project was created as part of a development assignment.
