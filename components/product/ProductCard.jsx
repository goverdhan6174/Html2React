import React from "react";
import s from "./Product.module.css";
import { Text } from "@components/ui";

const ProductCard = (props, ref) => {
  let product = props.product;
  let date = Date(product.date).split(" ");
  return (
    <div className={s.card} ref={ref}>
      <div className={s.upperCard}>
        <div className={s.img}>
          <img src={product.image} alt={product.image} />
        </div>
        <div>
          <Text>{product.product_name}</Text>
          <Text variant="subText">{product.brand_name}</Text>
          <Text>$ {product.price}</Text>
        </div>

        <Text variant="subText">
          {product.address.state} {product.address.city}
        </Text>
        <Text variant="subText">
          Date :{" "}
          <b>
            {date[1]} {date[2]},{date[3]}
          </b>
        </Text>
      </div>

      <Text
        variant="subText"
        className="mt-4"
        style={{ maxWidth: "35ch", width: "35ch" }}
      >
        {product.discription}
      </Text>
    </div>
  );
};

export default React.forwardRef(ProductCard);
