import React from "react";

function ArrowRight({ className, size, ...props }) {
  return (
    <svg
      width={(12 * size).toString()}
      height={(35 * size).toString()}
      viewBox="0 0 12 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1 1L11 17.5L1 34"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowRight;
