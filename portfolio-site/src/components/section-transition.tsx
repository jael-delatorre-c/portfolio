"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SectionTransitionProps = React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode;
};

export function SectionTransition({
  children,
  className,
  ...props
}: SectionTransitionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
