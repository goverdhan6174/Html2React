import React, { useState, useEffect } from "react";
import cn from "classnames";
import s from "./Dropdown.module.css";
import { ArrowDownSolid } from "@components/icons";
import DropDownItem from "./DropdownItem";

function Dropdown({
  label,
  items = [],
  onChange = () => {},
  // reset = () => {},
}) {
  let [active, setActive] = useState(false);
  let [selected, setSelected] = useState(null);

  let clickHandler = () => {
    setActive((prev) => !prev);
  };

  let selectHandler = (value) => {
    setSelected(value);
    clickHandler();
  };

  let reset = () => setSelected(null);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <div className={s.dropdown}>
      <button className={s.button} onClick={clickHandler}>
        <span>{selected ? selected : label || "Dropdown"}</span>
        <ArrowDownSolid className={s.arrow} />
      </button>
      <ul className={cn({ hidden: !active })}>
        <li onClick={() => selectHandler(null)}>
          <DropDownItem>Clear</DropDownItem>
        </li>
        {items.map((item) => {
          return (
            <li key={item} onClick={() => selectHandler(item)}>
              <DropDownItem>{item}</DropDownItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
