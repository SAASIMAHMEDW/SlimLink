import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#ba63d9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-[#f05ee7] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-[#f37130] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* 404 Number with gradient */}
        <h1 className="text-[180px] font-black leading-none bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
          404
        </h1>

        {/* Main message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-slate-400 max-w-md mx-auto">
            {`The page you're looking for seems to have vanished into the digital
            void. Let's get you back on track.`}
          </p>
        </div>

        {/* Glassmorphic card with suggestions */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-4">
            {`Here's what you can do:`}
          </h3>
          <ul className="text-left space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Go back to the previous page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Visit our homepage to start fresh</span>
            </li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group relative px-8 py-3 bg-linear-to-r from-purple-400 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            <span className="relative z-10">Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 backdrop-blur-md bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 shadow-lg"
          >
            Go Back
          </button>
        </div>

        {/* Fun animated element */}
        <div className="mt-12 text-slate-500 text-sm">
          <p>Error Code: 404 | Lost in cyberspace 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
