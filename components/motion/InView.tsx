"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";

type InViewProps<T extends ElementType> = {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function InView<T extends ElementType = "div">({
  children,
  className,
  staggerIndex = 0,
  as,
  ...rest
}: InViewProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView, reducedMotion } = useInView();

  const style =
    !reducedMotion && staggerIndex > 0
      ? { transitionDelay: `${staggerIndex * 80}ms` }
      : undefined;

  return (
    <Tag
      ref={ref}
      className={cn(
        "motion-reveal",
        inView ? "motion-reveal-active" : "motion-reveal-pending",
        className,
      )}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
