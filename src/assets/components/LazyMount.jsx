import { useEffect, useRef, useState } from "react";

export default function LazyMount({ children, rootMargin = "200px", fallback = null }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setMounted(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [mounted, rootMargin]);

  return <div ref={ref}>{mounted ? children : fallback}</div>;
}

