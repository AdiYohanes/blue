import { Assesment } from "@/components";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assesment",
  robots: {
    index: true,
    follow: true,
  },
};

const AssesmentPage = () => {
  return (
    <main className="overflow-hidden">
      <Assesment />
    </main>
  );
};

export default AssesmentPage;
