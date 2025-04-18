"use client";

import { useEffect } from "react";

const BootstrapLoader = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as string);
  }, []);

  return null;
};

export default BootstrapLoader;
