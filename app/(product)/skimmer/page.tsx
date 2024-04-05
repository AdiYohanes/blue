import { Skimmer } from "@/components";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Skimmer",
  robots: {
    index: true,
    follow: true,
  },
}

const SkimmerPage = () => {
  return (
    <main className="overflow-hidden">
      <Skimmer />
    </main>
  );
};

export default SkimmerPage;
