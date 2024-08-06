"use client";

import React from "react";
import Curtain from "./curtain";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [showCurtain, setShowCurtain] = React.useState<boolean>(false);

  React.useEffect(() => {
    const curtainShown = localStorage.getItem("curtain-shown");

    if (!curtainShown) {
      setShowCurtain(true);
      localStorage.setItem("curtain-shown", "true");
    }
  }, []);

  return (
    <>
      {showCurtain && <Curtain />}
      <Header />
      {children}
      <Footer />
    </>
  );
}
