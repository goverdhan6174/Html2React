import Image from "next/image";
import s from "./Banner.module.css";
import { Button, Text } from "@components/ui";

function Banner() {
  return (
    <section id="home" className={s.banner}>
      <div className={s.top}></div>
      <div className={s.container}>
        <Text variant="heading">
          Handcrafted Landing Page for Startups and SaaS Businesses
        </Text>
        <Text variant="subHeading" className="text-accent-5">
          A simple, customizable, and, beautiful SaaS business focused landing
          page to make your project closer to launch!
        </Text>
        <div className={s.buttonContainer}>
          <Button> get in touch </Button>
          <Button variant="ghost"> watch the video </Button>
        </div>
      </div>

      <img src="/images/header-shape.svg" alt="" className={s.bottom} />
    </section>
  );
}

export default Banner;
