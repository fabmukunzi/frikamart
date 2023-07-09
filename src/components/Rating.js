import { useRef, useEffect } from "react";
import jSuites from "jsuites";

import "jsuites/dist/jsuites.css";

export default function Rating({ options }) {
  const ratingRef = useRef(null);

  useEffect(() => {
    jSuites.rating(ratingRef.current, options);
  }, [options]);

  return <div ref={ratingRef} />;
}