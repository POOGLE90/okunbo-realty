import React from "react";
import Layout from "@/components/Layout";
import Hero from "./hero/index";
import ServiceAreas from "../universal/service-areas";
import Leadership from "./leadership/index";

export default function About() {
  return (
    <Layout>
      <Hero />
      <Leadership />
      <ServiceAreas />
    </Layout>
  );
}
