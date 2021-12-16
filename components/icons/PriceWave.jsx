import React from "react";
import cn from "classnames";

function PriceWave({ color = "#0067f4", ...props }) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 350 112.35"
      fill={color.toString()}
      {...props}
    >
      <g id="bottom-part">
        <g id="Group_747" dataname="Group 747">
          <path
            id="Path_294"
            dataname="Path 294"
            className={cn("opacity-10", color)}
            d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
            transform="translate(0 0)"
          ></path>
          <path
            id="Path_297"
            dataname="Path 297"
            className={cn("opacity-20", color)}
            d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
            transform="translate(0 0)"
          ></path>
          <path
            id="Path_296"
            dataname="Path 296"
            className={cn("opacity-40", color)}
            d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
            transform="translate(0 0)"
          ></path>
          <path
            id="Path_295"
            dataname="Path 295"
            className={cn("opacity-60", color)}
            d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
            transform="translate(0 0)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default PriceWave;
