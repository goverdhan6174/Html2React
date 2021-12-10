import Head from "next/head";
import { Navbar, Footer } from "@components/common";
import Banner from "@components/banner";
import Crafted from "@components/crafted";
import Pricing from "@components/pricing";
import Form from "@components/form";
import Contact from "@components/contact";
import Testimonial from "@components/testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Build React</title>
        <meta
          name="description"
          content="Test to convert pure html css site to react"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Crafted />
      <Pricing />
      <Contact />
      <Testimonial />
      <Form />
      <Footer />
    </>
  );
}
