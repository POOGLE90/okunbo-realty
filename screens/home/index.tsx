import React from "react";
import Benefits from "./benefits";
import Hero from "./hero";
import LatestListings from "./latest-listings";
import Team from "./team";
import ServiceAreas from "../universal/service-areas";
import VideoSection from "./video-section";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <LatestListings />
      <ServiceAreas />
      <Team />
      <Benefits />
    </>
  );
}
