"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ProjectModal from "@/components/ui/ProjectModal";

const ModalContext = createContext<{ openModal: () => void }>({
  openModal: () => {},
});

export function useProjectModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <ProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
}
