"use client";

import React from "react";
// path/to/ReactScanComponent

// react-scan must be imported before react
import { scan } from "react-scan";
import { JSX, useEffect } from "react";

export default function ReactScan() {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
}
