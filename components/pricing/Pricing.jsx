import React from "react";
import s from "./Pricing.module.css";
import cn from "classnames";
import { Text, Button, Container } from "@components/ui";
import { PriceWave } from "@components/icons";

const prices = [
  {
    id: 0,
    name: "Basic",
    color: "#2bdbdc",
    price: "199",
    align: null,
    imageSrc: null,
    points: [
      "Carefully crafted components",
      "Amazing page examples",
      "Super friendly support team",
      "Awesome Support",
    ],
  },
  {
    id: 1,
    name: "Pro",
    color: "#0067f4",
    price: "399",
    align: "right",
    imageSrc: "/images/baloon.svg",
    points: [
      "Carefully crafted components",
      "Amazing page examples",
      "Super friendly support team",
      "Awesome Support",
    ],
  },
  {
    id: 2,
    name: "Enterprise",
    color: "#4da422",
    price: "799",
    align: "left",
    imageSrc: "/images/flower.svg",
    points: [
      "Carefully crafted components",
      "Amazing page examples",
      "Super friendly support team",
      "Awesome Support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className={s.container}>
      <Text variant="pageHeading">Our Pricing</Text>
      <Text variant="pageSubHeading" className="text-accent-5 mx-auto">
        Stop wasting time and money designing and managing a website that
        doesn’t get results. Happiness guaranteed!
      </Text>

      <Container>
        <div className={s.tableContainer}>
          {prices.map((price) => {
            return <Table price={price} key={price.id} />;
          })}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;

function Table({ price }) {
  return (
    <div className={s.table}>
      <div
        className={cn(s.tableText, {
          "items-start": price.align == "right",
          "items-end": price.align == "left",
          "items-center": !price.align,
        })}
      >
        <Text variant="baseHead" as="h3">
          {price.name}
        </Text>
        <div className={s.underline} style={{ background: price.color }}></div>
        <Text variant="heading" as="p">
          $ {price.price}
        </Text>
        <Text variant="subHeading" className="text-accent-5" as="p">
          per year
        </Text>
      </div>

      <ul className={s.points}>
        {price.points.map((point) => {
          return (
            <li key={point} className={s.point}>
              <i className="lni-check-mark-circle"></i>
              <Text variant="subText">{point}</Text>
            </li>
          );
        })}
      </ul>

      {price.imageSrc && (
        <img
          src={price.imageSrc}
          alt={price.name}
          className={cn(s.image, { "right-0": price.align == "right" })}
        />
      )}

      <Button className="z-10 mb-10"> Get Started</Button>

      <PriceWave className={s.bottom} color={price.color} />
    </div>
  );
}
