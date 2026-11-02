import { cn } from "@/lib/cn";

type InstagramIconProps = {
  className?: string;
};

export function InstagramIcon({ className }: InstagramIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5.25" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  );
}
