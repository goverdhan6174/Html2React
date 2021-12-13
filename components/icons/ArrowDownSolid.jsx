import React from "react";

function ArrowDownSolid({ className, size = 1, ...props }) {
  return (
    <svg
      width={(12 * size).toString()}
      height={(10 * size).toString()}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path d="M6.09409 9.18994L0.816466 0.0488263L11.3717 0.0488253L6.09409 9.18994Z" />
    </svg>
  );
}

export default ArrowDownSolid;
