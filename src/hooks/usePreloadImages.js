import { useRef, useState } from "react";

const preloadCache = new Set();

export function usePreloadImages(paths) {
  const [loaded, setLoaded] = useState(0);
  const [error, setError] = useState(null);
  const [started, setStarted] = useState(false);

  const total = paths.length;
  const startedRef = useRef(false);

  const start = () => {
    if (startedRef.current) return;

    startedRef.current = true;
    setStarted(true);

    Promise.all(
      paths.map(
        (src) =>
          new Promise((resolve, reject) => {
            if (preloadCache.has(src)) {
              setLoaded((l) => l + 1);
              return resolve();
            }

            const img = new Image();
            img.src = src;

            img.onload = () => {
              preloadCache.add(src);
              setLoaded((l) => l + 1);
              resolve();
            };

            img.onerror = () => {
              const err = new Error(`Failed to load image: ${src}`);
              setError(err);
              reject(err);
            };
          })
      )
    ).catch(() => {});
  };

  return {
    start,
    ready: loaded === total && total > 0,
    loaded,
    total,
    progress: total > 0 ? loaded / total : 0,
    error,
    started,
  };
}
