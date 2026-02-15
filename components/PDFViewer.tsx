"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import ModalPortal from "./core/ModalPortal";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import Button from "./core/Button";
import { useIsMobile } from "@/hooks/useIsMobile";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface Props {
  open: boolean;
  close: () => void;
}

const PDFViewer = ({ open, close }: Props) => {
  const isMobile = useIsMobile();
  const [numPages, setNumPages] = useState<number>();
  const [docLoaded, setDocLoaded] = useState(false);

  const handleClose = useCallback(() => {
    close();
    setDocLoaded(false);
  }, [close]);

  useEffect(() => {
    isMobile && handleClose();
  }, [isMobile, handleClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setDocLoaded(true);
  }

  return (
    open && (
      <ModalPortal>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <div className="relative z-10 bg-background border border-secondary rounded-xl p-8 shadow-xl">
            {docLoaded && (
              <>
                <Button
                  variant="Ghost"
                  className="border-none! absolute top-0 right-0 hover:bg-transparent p-2! hover:opacity-50"
                  onClick={handleClose}
                >
                  <X className="text-gray-400" />
                </Button>

                <div className="flex justify-end my-2">
                  <Button variant="Ghost" className=" py-1! px-3!" asChild>
                    <a
                      href="/docs/resume.pdf"
                      className="flex items-center gap-2"
                      download="resume.pdf"
                    >
                      Download <Download size={20} />
                    </a>
                  </Button>
                </div>
              </>
            )}

            <Document file="/docs/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <div className="overflow-y-scroll h-187.5">
                {Array.from({ length: numPages ?? 1 }).map((_, idx) => (
                  <Page key={idx + 1} pageNumber={idx + 1} height={750} />
                ))}
              </div>
            </Document>
          </div>
        </div>
      </ModalPortal>
    )
  );
};

export default PDFViewer;
