import { useEffect, useState } from "react";

export const useCustomProgress = () => {
  const [progress, setProgress] = useState(0);
  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollpx / winHeightPx) * 1850);

    setProgress(scrollLen);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  return { progress };
};
export const useExtraProgress = () => {
  const [progress, setProgress] = useState(0);
  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollpx / winHeightPx) * 100);

    setProgress(scrollLen);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  return { progress };
};
