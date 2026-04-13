import { useEffect, useState } from "react";

export function useMediaQuery(query, defaultValue = false) {
  const getMatch = () => {
    if (typeof window === "undefined" || !window.matchMedia) return defaultValue;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia(query);

    const onChange = () => setMatches(mql.matches);
    onChange();

    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

