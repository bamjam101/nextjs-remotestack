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
    <>
      {children}
      <Footer progress={""} />
    </>
  );
}
