"use client";
import { DownloadProps } from "@/types";
import React, { useState } from "react";

const DownloadButton = ({ pdfPath }: DownloadProps) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setTimeout(() => {
      setDownloaded(true);
      window.open(pdfPath, "_blank");
    }, 1000);
  };

  return (
    <button
    onClick={handleDownloadClick}
    className="download-button transform active:scale-95 bg-blue-500 hover:bg-blue-400 text-white px-16 py-6 rounded-lg font-bold tracking-widest w-[200px]">
      <div className="flex justify-center items-center relative">
        <div className="flex items-center">
          {/* Download Icon */}
          <svg
            className="download-icon"
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="download-arrow"
              d="M13 9L9 13M9 13L5 9M9 13V1"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Checked Icon */}
        </div>
        <div className="button-copy pl-2 leading-none uppercase">Download</div>
      </div>
    </button>
  );
};

export default DownloadButton;
