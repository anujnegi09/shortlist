// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8FAFC]">
//       {/* Background decoration */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-[-180px] h-105 w-[420px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
//         <div className="absolute right-[-120px] top-[180px] h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-3xl" />
//       </div>

//       <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
//         <div className="mx-auto max-w-4xl text-center">
//           {/* Badge */}
//           <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
//             <span className="h-2 w-2 rounded-full bg-blue-600" />
//             Build what people actually want
//           </div>

//           {/* Main heading */}
//           <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
//             Turn ideas into a
//             <span className="block text-blue-600">better product.</span>
//           </h1>

//           {/* Description */}
//           <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
//             Shortlist helps product teams collect feature ideas, understand
//             what users care about, and focus on the improvements that matter
//             most.
//           </p>

//           {/* CTA */}
//           <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <Link
//               href="#waitlist"
//               className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
//             >
//               Join the waitlist
//             </Link>

//             <Link
//               href="#how-it-works"
//               className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 sm:w-auto"
//             >
//               See how it works
//             </Link>
//           </div>

//           {/* Trust text */}
//           <p className="mt-6 text-xs text-slate-500 sm:text-sm">
//             Simple feedback. Clear priorities. Better products.
//           </p>

//           {/* Product preview */}
//           <div className="mx-auto mt-16 max-w-3xl">
//             <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:p-4">
//               <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-5 text-left sm:p-7">
//                 {/* Preview header */}
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-semibold text-slate-950">
//                       Feature Board
//                     </p>
//                     <p className="mt-1 text-xs text-slate-500">
//                       What should we build next?
//                     </p>
//                   </div>

//                   <div className="hidden rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white sm:block">
//                     Submit idea
//                   </div>
//                 </div>

//                 {/* Preview ideas */}
//                 <div className="mt-6 space-y-3">
//                   <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
//                     <div className="flex min-w-[48px] flex-col items-center rounded-lg bg-blue-50 px-2 py-2 text-blue-600">
//                       <span className="text-xs">▲</span>
//                       <span className="text-sm font-bold">24</span>
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-slate-900">
//                         Add dark mode
//                       </h3>
//                       <p className="mt-1 text-xs text-slate-500">
//                         Make the dashboard comfortable to use at night.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
//                     <div className="flex min-w-[48px] flex-col items-center rounded-lg bg-slate-50 px-2 py-2 text-slate-600">
//                       <span className="text-xs">▲</span>
//                       <span className="text-sm font-bold">18</span>
//                     </div>

//                     <div>
//                       <h3 className="text-sm font-semibold text-slate-900">
//                         Export your data
//                       </h3>
//                       <p className="mt-1 text-xs text-slate-500">
//                         Give users an easy way to download their information.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -top-45 h-105 w-105 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="absolute -right-30 top-45 h-75 w-75 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Build what people actually want
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Turn ideas into a
            <span className="block text-blue-600">better product.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Shortlist helps product teams collect feature ideas, understand
            what users care about, and focus on the improvements that matter
            most.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#waitlist"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto"
            >
              Join the waitlist
            </Link>

            <Link
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 sm:w-auto"
            >
              See how it works
            </Link>
          </div>

          {/* Trust text */}
          <p className="mt-6 text-xs text-slate-500 sm:text-sm">
            Simple feedback. Clear priorities. Better products.
          </p>

          {/* Product preview */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:p-4">
              <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-5 text-left sm:p-7">
                {/* Preview header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Feature Board
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      What should we build next?
                    </p>
                  </div>

                  <div className="hidden rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white sm:block">
                    Submit idea
                  </div>
                </div>

                {/* Preview ideas */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex min-w-12 flex-col items-center rounded-lg bg-blue-50 px-2 py-2 text-blue-600">
                      <span className="text-xs">▲</span>
                      <span className="text-sm font-bold">24</span>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Add dark mode
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Make the dashboard comfortable to use at night.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex min-w-12 flex-col items-center rounded-lg bg-slate-50 px-2 py-2 text-slate-600">
                      <span className="text-xs">▲</span>
                      <span className="text-sm font-bold">18</span>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Export your data
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Give users an easy way to download their information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
