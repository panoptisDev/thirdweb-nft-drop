import sanityClient from "../lib/sanity";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Collection } from "../types/typings";
import imageUrlFor from "../utils/imageUrlFor";

interface Props {
  collections: Collection[];
}

const Home = ({ collections }: Props) => {
  const vaporRobos = collections.find((collection) => {
    return collection.collectionName.toLowerCase() === "vapor robos";
  });
  const goldenEras = collections.find((collection) => {
    return collection.collectionName.toLowerCase() === "golden era";
  });

  return (
    <div>
      <Head>
        <title>Ceremoney</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <div className="flex flex-col min-h-screen bg-black bg-opacity-50 bg-ceremoney bg-darken-10 bg-no-repeat bg-center bg-fixed items-center justify-center p-12">
        <div className="text-center space-y-12 mb-12">
          <h1 className="text-white text-4xl font-space-grotesk">CEREMONEY</h1>
          <p className="text-white text-1xl font-space-grotesk">presents</p>
        </div>
        <Link
          className="cursor-pointer hover:scale-[1.02] hover:-translate-y-2 transition duration-300"
          href={`/nft/${vaporRobos?.slug.current}`}
        >
          <div className="p-2 bg-gradient-to-bl to-[#F97A65] from-[#6F3056] rounded-lg">
            <Image
              src={imageUrlFor(vaporRobos?.mainImage).url()}
              alt="hero"
              width={480}
              height={480}
              priority
              className="rounded-lg hover:scale-[1.02] transition duration-300"
            />
          </div>
        </Link>
        <p className="text-white text-center text-xl font-extralight mt-6 font-press-start lowercase">
          {vaporRobos ? vaporRobos.collectionName : "Vapor Robos"}
        </p>
        <p className="text-white text-md mt-16 font-space-grotesk">
          past drops
        </p>

        <div className="flex flex-col items-center justify-center space-y-12 mt-12 font-ultra text-[#FFD700] text-xl rounded-xl p-1 underline decoration-white/80 underline-offset-4 uppercase">
          {goldenEras ? goldenEras.collectionName : "Golden Era"}
        </div>

        <Link href={`/nft/${goldenEras?.slug.current}`}>
          <div className="flex flex-col items-center justify-center w-48 md:w-64 lg:w-64 bg-slate-800 rounded-lg mt-4 shadow-md shadow-slate-800 hover:scale-[1.02] hover:-translate-y-1 transition duration-300 cursor-pointer">
            <Image
              src={imageUrlFor(goldenEras?.previewImage).url()}
              alt="golden era card"
              height={340}
              width={340}
              className="rounded-t-lg border-4 border-slate-800"
            />
            <div className="flex flex-row justify-between items-center text-center p-2 font-ultra text-xs text-[#FFD700] bg-slate-900 border-4 border-slate-800 rounded-b-xl">
              {goldenEras?.description || "Golden Era"}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    *[_type == "collection"]{
      _id,
      title,
      address,
      description,
      collectionName,
      mainImage {
        asset
      },
      previewImage {
        asset
      },
      slug {
        current
      },
      creator => {
        _id,
        name,
        address,
        slug {
          current
        },
      }
    }
  `;

  const collections: Collection[] = await sanityClient.fetch(query);

  return {
    props: {
      collections,
    },
  };
};
