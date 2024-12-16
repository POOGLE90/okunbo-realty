import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import localFont from "next/font/local";
import Script from "next/script";
import { Providers } from "./providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const authorSemibold = localFont({
  src: "../public/fonts/Author-Semibold.otf",
  weight: "600",
  variable: "--font-author-semibold",
});

export const metadata = {
  title: "Okunbo Realty - Real Estate Website",
  description:
    "Okunbo Realty is a real estate website that helps you to find the best property for you.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              realscout-office-listings {
                --rs-listing-divider-color: rgb(101, 141, 172);
                width: 100%;
              }
            `
          }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          plusJakartaSans.variable,
          authorSemibold.variable,
        )}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
