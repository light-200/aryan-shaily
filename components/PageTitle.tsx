import React from "react";

export default function PageTitle({ children }: any) {
  return (
    <>
      <div className="row-start-6 md:text-8xl xl:text-9xl font-black col-span-full whitespace-nowrap">
        {children}
      </div>
    </>
  );
}
