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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <div className="flex flex-col min-h-screen bg-black bg-opacity-50 bg-ceremoney bg-darken-10 bg-no-repeat bg-center bg-fixed items-center justify-center p-14">
        <div className="text-center space-y-12 mb-12">
          <h1 className="text-white text-4xl font-space-grotesk">CEREMONEY</h1>
          <p className="text-white text-1xl font-space-grotesk">presents</p>
        </div>
        <Link className="cursor-pointer" href="/nft/robo">
          <div className="p-2 bg-gradient-to-bl to-[#F97A65] from-[#6F3056] rounded-lg">
            <Image
              src="/vaporrobo.png"
              alt="hero"
              width={480}
              height={480}
              priority
            />
          </div>
          <p className="text-white text-center text-xl font-extralight mt-6 font-press-start">
            vapor robos
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
