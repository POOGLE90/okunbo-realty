import Curtain from "./curtain";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Curtain />
      <Header />
      {children}
      <Footer />
    </>
  );
}
