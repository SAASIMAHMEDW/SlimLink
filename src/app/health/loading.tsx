const Loading = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="grow">
        <div className="container mx-auto px-20 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Page Heading Skeleton */}
            <div className="text-center space-y-3">
              <div className="h-10 bg-linear-to-r from-slate-700/50 to-slate-600/50 rounded-lg w-64 mx-auto animate-pulse"></div>
              <div className="h-6 bg-slate-700/30 rounded-lg w-96 mx-auto animate-pulse"></div>
            </div>

            {/* Main Status Card Skeleton */}
            <div className="rounded-xl bg-[#1e1e3f]/90 shadow-xl border border-purple-100 dark:border-purple-900/30 overflow-hidden">
              <div className="relative p-6 md:p-8">
                {/* Decorative blur elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ba63d9] rounded-full blur-3xl opacity-20 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f05ee7] rounded-full blur-2xl opacity-20 -z-10"></div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Icon Skeleton */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-full animate-pulse"></div>
                  </div>

                  {/* Text Content Skeleton */}
                  <div className="grow text-center md:text-left w-full space-y-2">
                    <div className="h-8 bg-slate-700/50 rounded-lg w-72 mx-auto md:mx-0 animate-pulse"></div>
                    <div className="h-4 bg-slate-600/30 rounded-lg w-80 mx-auto md:mx-0 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Component Status Section Skeleton */}
            <div className="space-y-4">
              <div className="rounded-xl bg-[#1e1e3f]/90 shadow-xl border border-purple-100 dark:border-purple-900/30 divide-y divide-slate-700 overflow-hidden">
                {/* Render 4 skeleton items */}
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="p-4 flex items-center justify-between animate-pulse"
                  >
                    {/* Component name skeleton */}
                    <div className="h-5 bg-slate-700/50 rounded-lg w-40"></div>

                    {/* Status indicator skeleton */}
                    <div className="flex items-center gap-2">
                      <div className="size-2 rounded-full bg-slate-600/50"></div>
                      <div className="h-4 bg-slate-600/50 rounded-lg w-24"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loading;
