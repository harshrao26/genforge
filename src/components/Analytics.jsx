 "use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    window.gtag("config", "G-V3Q4Z90H7V", { page_path: url });
  }, [pathname, searchParams]);

  return null;
}