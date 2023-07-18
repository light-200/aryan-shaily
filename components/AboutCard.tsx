import React from "react";

export default function AboutCard({ children }: any) {
  return (
    <div className="p-4 bg-zinc-200 relative w-[260px] h-[300px] text-black text-base rounded-md border-zinc-500 border-2 flex flex-col gap-2">
      {children}
    </div>
  );
}
