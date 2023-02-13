import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex min-h-screen bg-gradient-to-br from-yellow-400 to-purple-600 items-center
      justify-center"
      >
        <Link className="cursor-pointer" href="/nft/robo">
          <Image src="/ceremoney.png" alt="hero" width={480} height={480} />
          <p className="text-white text-center text-xl font-extralight">
            robo drop
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
