import React from "react";
import s from "./Dropdown.module.css";

function DropdownItem({ children }) {
  return <span className={s.item}>{children}</span>;
}

export default DropdownItem;
