import React from "react";
import Link from "next/link";
import s from "./Dropdown.module.css";

function DropdownItem({ children, link = "#" }) {
  return (
    <Link href={link}>
      <a className={s.item}>
        {children}
      </a>
    </Link>
  );
}

export default DropdownItem;
