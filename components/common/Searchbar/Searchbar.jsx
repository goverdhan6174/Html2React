import { useEffect, useMemo } from "react";
import cn from "classnames";
import s from "./Searchbar.module.css";
import { useRouter } from "next/router";
import { Button } from "@components/ui";

const Searchbar = ({ className, id = "search" }) => {
  const router = useRouter();

  const handleKeyUp = (e) => {
    e.preventDefault();
  };

  return useMemo(
    () => (
      <div className={cn(s.root, className)}>
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <span className="h-full flex items-center justify-center">
          <i className="lni-envelope text-2xl text-blue"></i>
        </span>
        <input
          id={id}
          className={s.input}
          placeholder="John@email.com"
          onKeyUp={handleKeyUp}
        />
        {/* <div className={s.iconContainer}>
          <svg className={s.icon} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
        </div> */}
        <Button> Subscribe</Button>
      </div>
    ),
    []
  );
};

export default Searchbar;
