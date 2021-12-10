import React from "react";
import s from "./Testimonial.module.css";
import cn from "classnames";
import { Text, Button, Container } from "@components/ui";
import { memberWave } from "@components/icons";

const members = [
  {
    id: 0,
    name: "Isabela Moreira",
    position: "CEO, GrayGrids",
    about:
      "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    imageSrc: "/images/baloon.svg",
  },
  {
    id: 1,
    name: "Fiona",
    position: "Lead Designer, UIdeck",
    about:
      "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    imageSrc: "/images/baloon.svg",
  },
  {
    id: 2,
    name: "Elon Musk",
    position: "CEO, SpaceX",
    about:
      "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    imageSrc: "/images/flower.svg",
  },
  {
    id: 3,
    name: "Fajar Siddiq",
    position: "CEO, MarkerFlix",
    about:
      "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
    imageSrc: "/images/flower.svg",
  },
];

function Testimonial() {
  return (
    <section id="testimonial" className={s.container}>
      <Text variant="pageHeading">Our Pricing</Text>
      <Text variant="pageSubHeading" className="text-accent-5 mx-auto">
        Stop wasting time and money designing and managing a website that
        doesn’t get results. Happiness guaranteed!
      </Text>
      <Container>
        <div className={s.tableContainer}>
          {members.map((member) => {
            return <Table member={member} key={member.id} />;
          })}
        </div>
      </Container>

      <div className={s.partners}>
        <img src="/images/client_logo_01.png" alt="Logo" />
        <img src="/images/client_logo_02.png" alt="Logo" />
        <img src="/images/client_logo_03.png" alt="Logo" />
        <img src="/images/client_logo_04.png" alt="Logo" />
      </div>
    </section>
  );
}

function Table({ member }) {
  return (
    <div className={s.table}>
      <div className={s.image}>
        <img src={member.imageSrc} alt={member.name} />
      </div>
      <Text>{member.about}</Text>
      <div className={s.underline}></div>
      <Text variant="baseHead" as="h3">
        {member.name}
      </Text>
      <Text variant="subText" className="text-accent-5 -mt-4">
        {member.position}
      </Text>
    </div>
  );
}

export default Testimonial;
