"use client";

import { useState } from "react";
import Button from "./core/Button";
import PDFViewer from "./PDFViewer";
import { useIsMobile } from "@/hooks/useIsMobile";

const ResumeButton = () => {
  const [pdfViewerOpened, setPdfViewerOpened] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <Button onClick={() => !isMobile && setPdfViewerOpened(true)} asChild={isMobile}>
        {isMobile ? (
          <a
            href="/docs/resume.pdf"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        ) : (
          "Resume"
        )}
      </Button>
      <PDFViewer open={pdfViewerOpened} close={() => setPdfViewerOpened(false)} />
    </>
  );
};

export default ResumeButton;
