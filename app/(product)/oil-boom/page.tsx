import { OilBoom } from "@/components";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Oil Boom",
  robots: {
    index: true,
    follow: true,
  },
}

const OilBoomPage = () => {
  return (
    <main className="overflow-hidden">
        <OilBoom />
    </main>
  );
};

export default OilBoomPage;
