import { useEffect, useRef, RefObject } from "react";

export default function useScroll(
  parentRef: RefObject<HTMLElement>,
  childRef: RefObject<HTMLElement>,
  callback: () => void,
): void {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: parentRef.current,
      threshold: 0,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log("Intersecting");
        callback();
      }
    }, options);

    if (childRef.current) {
      observer.current.observe(childRef.current);
    }

    return function cleanup() {
      if (observer.current && childRef.current) {
        observer.current.unobserve(childRef.current);
      }
    };
  }, [callback, parentRef, childRef]);
}
