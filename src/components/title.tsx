// app/_components/TitleSetter.tsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function toTitle(path: string) {
  if (path === "/" || !path) return "Home";
  return path
    .split("?")[0]
    .split("#")[0]
    .split("/")
    .filter(Boolean)
    .map(s => s.replace(/-/g, " "))
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" • ");
}

export default function TitleSetter() {
  const pathname = usePathname();
  useEffect(() => {
    document.title = `${toTitle(pathname)} | HakamTechSol`;
  }, [pathname]);
  return null;
}
