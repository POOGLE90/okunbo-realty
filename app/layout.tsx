import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import localFont from "next/font/local";
import { Providers } from "./providers";

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
  title: "HeavenHomes - Real Estate Website Template",
  description:
    "heavenhomes is a real estate website template that helps you to find the best property for you.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          dmSans.variable,
          plusJakartaSans.variable,
          authorSemibold.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
