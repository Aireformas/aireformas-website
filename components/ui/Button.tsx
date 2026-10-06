import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "primary-light" | "ghost-light";

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
    "border-ink/30 text-ink hover:border-ink bg-transparent",
  "primary-light":
    "border-white/40 text-white hover:border-white bg-transparent",
  "ghost-light":
    "border-white/20 text-white/90 hover:border-white/60 bg-glass backdrop-blur-md",
};

function buttonClassName(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-full border-[1.5px] px-7 py-3.5 text-sm font-medium transition-[transform,border-color,background-color] duration-300 active:scale-95",
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
