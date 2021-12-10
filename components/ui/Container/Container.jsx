import cn from "classnames";
import React from "react";

const Container = ({ children, className, el = "div", clean }) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-6xl px-6": !clean,
  });

  let Component = el;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
