import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  robots: {
    index: true,
    follow: true,
  },
};

import { About } from "@/components";
import React from "react";

const AboutPage = () => {
  return (
    <main className="overflow-hidden">
      <About />
    </main>
  );
};

export default AboutPage;
