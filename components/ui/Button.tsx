import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "primary-light" | "ghost-light" | "editorial" | "accent";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-ink/20 text-ink hover:border-accent hover:text-accent bg-transparent rounded-sm px-7 py-3.5 text-sm font-medium border",
  "primary-light":
    "border-white/40 text-white hover:border-white bg-transparent rounded-sm px-7 py-3.5 text-sm font-medium border",
  "ghost-light":
    "border-white/20 text-white/90 hover:border-white/60 bg-glass rounded-sm px-7 py-3.5 text-sm font-medium border backdrop-blur-md",
  editorial:
    "border-b border-ink/25 pb-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink hover:border-accent hover:text-accent rounded-none px-0 py-0 border-x-0 border-t-0",
  accent:
    "rounded-sm border border-accent bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:border-accent hover:bg-accent/90 hover:text-white",
};

function buttonClassName(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex items-center justify-center transition-[transform,border-color,color,background-color] duration-300",
    variant !== "editorial" && "active:scale-[0.98]",
    variantClasses[variant],
    className,
  );
}

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;

  if (props.href !== undefined) {
    const isHash = props.href.startsWith("#");
    if (isHash) {
      return (
        <a
          href={props.href}
          onClick={props.onClick}
          className={buttonClassName(variant, className)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={props.href}
        onClick={props.onClick}
        className={buttonClassName(variant, className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={buttonClassName(variant, className)}
    >
      {children}
    </button>
  );
}
