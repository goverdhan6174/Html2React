import React, { useState, useRef, useEffect } from "react";
import s from "./Product.module.css";
import ArrowRight from "@components/icons/ArrowRight";
import ProductCard from "./ProductCard";
import { Text } from "@components/ui";

function Products({ data, label }) {
  const sliderRef = useRef(null);
  const childRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(1);

  const modRef = useRef(0);

  useEffect(() => {
    if (sliderRef.current && childRef.current)
      modRef.current =
        Math.floor(
          sliderRef.current.offsetWidth / childRef.current.offsetWidth
        ) - 1 || 1;
  }, [sliderRef.current, childRef.current]);

  const slide = () => {
    sliderRef.current.style.transform = `translateX(calc(-${
      childRef.current.offsetWidth * sliderPosition
    }px))`;

    setSliderPosition(
      (prev) => (prev + 1) % (data.length - modRef.current || 1)
    );
  };

  return (
    <div className={s.container}>
      <Text variant="sectionHeading">{label}</Text>
      <hr className="my-8" />
      <div className={s.sliderCam}>
        <div className={s.slider}>
          <div className={s.slide} ref={sliderRef}>
            {data.map((product, index) => {
              if (index == 0) {
                return (
                  <ProductCard
                    ref={childRef}
                    key={product.date + product.time}
                    product={product}
                  />
                );
              } else {
                return (
                  <ProductCard
                    key={product.date + product.time}
                    product={product}
                  />
                );
              }
            })}
          </div>
        </div>
        {modRef.current < data.length && (
          <div className={s.buttonContainer} onClick={slide}>
            <ArrowRight size={2} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
