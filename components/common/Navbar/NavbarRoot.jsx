import { useState, useEffect } from "react";
import cn from "classnames";
import s from "./Navbar.module.css";

const throttle = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

const NavbarRoot = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const timeoutInMS = 200;

  useEffect(() => {
    const checkScroll = () => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;
      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    };
    const handleScroll = throttle(() => {
      checkScroll();
      if (checkScroll.current) clearTimeout(checkScroll.current);
      checkScroll.current = setTimeout(checkScroll, timeoutInMS * 2);
    }, timeoutInMS);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      if (checkScroll.current) clearTimeout(checkScroll.current);
    };
  }, [hasScrolled]);

  return (
    <div
      className={cn(s.root, {
        // "shadow-magical": hasScrolled,
        "shadow-nav-drop": hasScrolled,
        "bg-white": hasScrolled,
      })}
    >
      {children}
    </div>
  );
};

export default NavbarRoot;
