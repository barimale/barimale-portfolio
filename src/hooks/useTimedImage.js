import { useCallback, useEffect, useRef, useState } from "react";

export const useTimedImage = (durationSeconds) => {
  const [image, setImage] = useState(null);
  const timerRef = useRef(null);

  const showImage = useCallback(
    (imageUrl) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setImage(imageUrl);

      timerRef.current = setTimeout(() => {
        setImage(null);
      }, durationSeconds * 1000);
    },
    [durationSeconds]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return {
    image,
    visible: image !== null,
    showImage,
  };
};