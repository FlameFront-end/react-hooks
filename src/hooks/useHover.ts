import { useEffect, useState, RefObject } from "react";

export default function useHover(ref: RefObject<HTMLElement>): boolean {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const on = (): void => setIsHovering(true);
  const off = (): void => setIsHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const node: HTMLElement = ref.current;

    node.addEventListener("mouseenter", on);
    node.addEventListener("mousemove", on);
    node.addEventListener("mouseleave", off);

    return function cleanup() {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mousemove", on);
      node.removeEventListener("mouseleave", off);
    };
  }, [ref]);

  return isHovering;
}
