import React from "react";

export default function AboutCard({ children }: any) {
  return (
    <div className="p-4 bg-cardBg0 relative w-[260px] h-[300px] text-black text-xs leading-5 rounded-md flex flex-col gap-2">
      {children}
    </div>
  );
}
