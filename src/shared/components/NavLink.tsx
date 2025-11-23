"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const styleActive = !isActive
    ? "text-primary dark:text-primary"
    : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary";
  return (
    <Link
      href={href}
      className={`text-sm font-medium leading-normal transition-colors ${styleActive}`}
    >
      {label}
    </Link>
  );
}
