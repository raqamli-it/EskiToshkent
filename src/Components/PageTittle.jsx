import React from "react";

export default function PageTitle({ title }) {
  return (
    <div className="background py-16">
      <h1 className="w-4/5 mx-auto mt-7 font-semibold text-[32px] text-[#858585] border-b-[3px] border-[#858585]">
        {title}
      </h1>
    </div>
  );
}
