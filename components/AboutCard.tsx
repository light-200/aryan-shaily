import React from "react";

export default function AboutCard({ children }: any) {
  return (
    <div className="p-4 bg-zinc-300 relative w-[260px] h-[300px] text-black text-sm">
      {children}
    </div>
  );
}
