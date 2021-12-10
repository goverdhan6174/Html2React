import React from "react";
import cn from "classnames";
import s from "./Crafted.module.css";
import { Text, Container } from "@components/ui";

const services = [
  {
    id: 0,
    icon: "lni-bolt",
    title: "Startup",
    desc: "Short description for the ones who look for something new.",
  },
  {
    id: 1,
    icon: "lni-bar-chart",
    title: "SaaS Business",
    desc: "Short description for the ones who look for something new.",
  },
  {
    id: 2,
    icon: "lni-brush",
    title: "Agency",
    desc: "Short description for the ones who look for something new.",
  },
  {
    id: 3,
    icon: "lni-bulb",
    title: "App Landing",
    desc: "Short description for the ones who look for something new.",
  },
];

function Crafted() {
  return (
    <Container>
      <section id="services" className={s.container}>
        <div className={s.first}>
          <Text variant="pageHeading">Crafted For</Text>
          <Text variant="pageSubHeading" className="text-accent-5">
            Stop wasting time and money designing and managing a website that
            doesn’t get results. Happiness guaranteed!
          </Text>

          <div className={s.services}>
            {services.map((service) => {
              return (
                <div key={service.id} className={s.service}>
                  <i className={cn(s.icons, service.icon)}></i>
                  <div className={s.info}>
                    <Text variant="sectionHeading">{service.title}</Text>
                    <Text variant="subText">{service.desc}</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.second}>
          <img src="/images/services.png" alt="Services" />
        </div>
      </section>
    </Container>
  );
}

export default Crafted;
