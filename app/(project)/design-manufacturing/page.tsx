import { DesignManufacture } from "@/components";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Design & Manufacturing",
  robots: {
    index: true,
    follow: true,
  },
}

const DesignManufacturingPage = () => {
  return (
    <main className="overflow-hidden">
      <DesignManufacture />
    </main>
  );
};

export default DesignManufacturingPage;
