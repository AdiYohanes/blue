import { OilSpill } from "@/components";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Oil Spill Response",
  robots: {
    index: true,
    follow: true,
  },
}

const OilSpillPage = () => {
  return (
    <main className="overflow-hidden">
      <OilSpill />
    </main>
  );
};

export default OilSpillPage;
