import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Image = ({ src, alt }) => {
  const [imageStyle, setImageStyle] = useState({});

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 800px)",
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setImageStyle({ width: "1000", height: "562" });
    } else if (isTablet) {
      setImageStyle({ width: "650", height: "366" });
    } else {
      setImageStyle({ width: "300", height: "170" });
    }
  }, [isDesktopOrLaptop, isTablet]);

  return <img src={src} alt={alt} {...imageStyle} />;
};

export default Image;
