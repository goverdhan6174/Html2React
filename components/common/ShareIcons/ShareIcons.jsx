import React from "react";
import Link from "next/link";
import cn from "classnames";
import s from "./ShareIcons.module.css";

function ShareIcons({ className, size = 3 }) {
  return (
    <ul className={cn(s.socials, s.socialicons, className)}>
      {[
        "lni-facebook-filled",
        "lni-twitter-original",
        "lni-instagram-original",
        "lni-linkedin-original",
      ].map((icon) => (
        <li key={icon}>
          <Link href="#">
            <a>
              <i className={cn(s.icon, icon, `text-${size}xl`)}></i>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ShareIcons;
