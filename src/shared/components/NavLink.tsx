"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, label, icon, onClick }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2.5 font-semibold text-sm rounded-full transition-all ease-linear ${
        isActive
          ? "bg-linear-to-r from-purple-400 to-purple-600 text-white"
          : "text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30"
      }`}
    >
      {icon && (
        <span
          className={`size-5 flex items-center justify-center ${
            isActive
              ? "[&_path]:fill-white [&_path]:stroke-white [&>svg]:stroke-white"
              : "[&_path]:fill-gray-700 dark:[&_path]:fill-gray-300 [&_path]:stroke-gray-700 dark:[&_path]:stroke-gray-300"
          }`}
        >
          {icon}
        </span>
      )}
      <span className="whitespace-nowrap">{label}</span>
    </Link>
  );
}
