import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Footer from "../components/Footer";

export const metadata = {
  title: "RemoteStack | Find your developers",
  description:
    "A platform to provide users with skilled and experienced programmers to implement ideas in form of projects.",
};

export default function BrowseLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100/50 text-gray-800 w-full px-10 sm:px-16 md:px-[108px] lg:px-[256px] ${inter.className}`}
      >
        {children}
        <Footer progress={""} />
      </body>
    </html>
  );
}
