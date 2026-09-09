import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
};

export function Logo({
  className,
  markClassName,
  showWordmark = true,
  wordmarkClassName,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        className={cn("h-8 w-8 shrink-0", markClassName)}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={!showWordmark}
        role={showWordmark ? "presentation" : "img"}
      >
        {!showWordmark ? <title>Closeout Desk</title> : null}
        <rect width="64" height="64" rx="14" fill="#0B1B33" />
        <rect
          x="12"
          y="16"
          width="40"
          height="32"
          rx="4"
          fill="#122744"
          stroke="#C9A227"
          strokeWidth="1.5"
        />
        <path
          d="M18 24h28M18 30h20M18 36h16"
          stroke="#7BA3C9"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="44" cy="36" r="5" fill="#C9A227" />
        <path
          d="M42 36.2l1.4 1.4 2.8-3.2"
          stroke="#0B1B33"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark ? (
        <span
          className={cn(
            "font-[family-name:var(--font-display)] text-[1.15rem] font-semibold tracking-[-0.02em] text-[var(--ink)]",
            wordmarkClassName,
          )}
        >
          Closeout Desk
        </span>
      ) : null}
    </span>
  );
}
