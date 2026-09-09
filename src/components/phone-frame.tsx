"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[390px]",
        className,
      )}
    >
      <div
        className="relative overflow-hidden rounded-[2.4rem] border border-[var(--phone-bezel)] bg-[var(--phone-bezel)] shadow-[0_40px_80px_-20px_rgba(8,16,32,0.55),0_0_0_1px_rgba(201,162,39,0.12)]"
        style={{ aspectRatio: "390 / 844" }}
      >
        <div className="absolute inset-[10px] overflow-hidden rounded-[2rem] bg-[var(--phone-canvas)]">
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-[var(--phone-bezel)]" />
          <div className="relative h-full overflow-y-auto overscroll-contain">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
