"use client";

import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProps {
  children: React.ReactNode;
  delegate?: string;
  options?: any;
}

const Fancybox: React.FC<FancyboxProps> = ({ children, delegate = "[data-fancybox]", options = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      NativeFancybox.bind(container, delegate, options);
    }

    return () => {
      if (container) {
        NativeFancybox.unbind(container);
        NativeFancybox.close();
      }
    };
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
};

export default Fancybox;
