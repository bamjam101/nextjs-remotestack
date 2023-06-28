import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RemoteStack | Find your developers",
  description:
    "A platform to provide users with skilled and experienced programmers to implement ideas in form of projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100/50 text-gray-800 w-full px-10 sm:px-16 md:px-[86px] lg:px-[162px] xl:px-[256px] ${inter.className}`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
