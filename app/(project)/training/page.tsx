import { Training } from "@/components";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Training",
  robots: {
    index: true,
    follow: true,
  },
}

const TrainingPage = () => {
  return (
    <main className="overflow-hidden">
      <Training />
    </main>
  );
};

export default TrainingPage;
