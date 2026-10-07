import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
  wide?: boolean;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  wide = false,
}: ContainerProps) {
  return (
    <Tag className={cn(wide ? "container-wide" : "container-site", className)}>
      {children}
    </Tag>
  );
}
