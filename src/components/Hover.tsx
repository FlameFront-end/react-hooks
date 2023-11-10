import React, { useRef } from "react";
import useHover from "../hooks/useHover";

const Hover: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isHovering = useHover(ref);

  return (
    <div
      ref={ref}
      style={{
        width: "100px",
        height: "100px",
        background: isHovering ? "red" : "green",
      }}
    ></div>
  );
};

export default Hover;
