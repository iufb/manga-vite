import { useState } from "react";

export const useImageLoading = (src: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const image = new Image();
  image.onload = () => {
    setLoading(false);
  };
  image.src = `${import.meta.env.VITE_API_HOST}/${src}`;
  return { loading, setLoading };
};
