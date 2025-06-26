"use client"
import { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalType {
  children: ReactElement | null;
  styling?: string;
}

const Modal: React.FC<ModalType> = ({ children, styling }) => {
  const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
    // This will only run in the browser
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-auto bg-black bg-opacity-50 ${styling}`}
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
