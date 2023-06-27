import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/browse"} className="underline blue">
        Browse for developers
      </Link>
    </>
  );
}
