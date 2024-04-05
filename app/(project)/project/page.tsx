import { Project } from "@/components";
import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Project",
  robots: {
    index: true,
    follow: true,
  },
}

const ProjectPage = () => {
  return (
    <main className="overflow-hidden">
      <Project />
    </main>
  );
};

export default ProjectPage;
