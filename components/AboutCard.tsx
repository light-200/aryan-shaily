import React from "react";

export default function AboutCard({ children }: any) {
  return (
    <div className="about p-4 bg-cardBg0 relative opacity-0 w-[260px] h-[300px] text-black text-xs leading-5 rounded-md flex flex-col gap-2">
      {children}
    </div>
  );
}
