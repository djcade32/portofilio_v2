"use client";

import { useState } from "react";
import Button from "./core/Button";
import PDFViewer from "./PDFViewer";

const ResumeButton = () => {
  const [pdfViewerOpened, setPdfViewerOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setPdfViewerOpened(true)}>Resume</Button>
      <PDFViewer open={pdfViewerOpened} close={() => setPdfViewerOpened(false)} />
    </>
  );
};

export default ResumeButton;
