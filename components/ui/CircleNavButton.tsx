import { cn } from "@/lib/cn";

type CircleNavButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  label: string;
  theme?: "light" | "dark";
};

export function CircleNavButton({
  direction,
  onClick,
  disabled = false,
  label,
  theme = "light",
}: CircleNavButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] backdrop-blur-[16px] transition-[border-color,opacity,transform] duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40",
        theme === "light"
          ? "border-white/20 bg-glass text-white hover:border-white"
          : "border-ink/15 bg-paper/80 text-ink hover:border-ink/40",
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={direction === "prev" ? "" : "rotate-180"}
      >
        <path
          d="M15 6l-6 6 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
