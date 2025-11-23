import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#222949] px-4 sm:px-6 lg:px-10 py-4 w-full bg-white/80 dark:bg-[#101322]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-4 text-gray-900 dark:text-white">
        <div className="text-primary text-xl">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          SlimLink
        </h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden sm:flex items-center gap-8">
          <NavLink href="/" label="Dashboard" />

          <NavLink href="/health" label="Health Status" />
        </div>

        <button className="sm:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
            menu
          </span>
        </button>
      </div>
    </header>
  );
}
