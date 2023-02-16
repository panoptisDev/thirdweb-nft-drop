import React from "react";
import Header from "./components/Header";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { Collection } from "../../types/typings";
import sanityClient from "../../lib/sanity";

function GoldenEra({ collection }: { collection: Collection }) {
  return (
    <>
      <Head>
        <title>{collection.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen bg-black bg-opacity-50">
        <div className="w-3/4 mt-10">
          <Header />
          <div className="flex justify-center text-3xl text-center font-ultra tracking-wider text-[#FFD700] sm:text-4xl md:text-6xl rounded-xl mt-12 underline decoration-white underline-offset-8 uppercase">
            {collection.collectionName}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-8">
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/hulk_hogan.png"
                alt="hulkster"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/jimmy_snuka.png"
                alt="superfly"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/randy_savage.png"
                alt="macho man"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/jake_roberts.png"
                alt="the snake"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/andre.png"
                alt="the giant"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>

            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/ric_flair.png"
                alt="nature boy"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/roddy_piper.png"
                alt="rowdy"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/iron_sheik.png"
                alt="the iron sheik"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/bret_hart.png"
                alt="hitman"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/ultimate_warrior.png"
                alt="uw"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>

            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/undertaker.png"
                alt="the ut"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
            <div className="p-2 bg-[#FFD700]/80 mask mask-squircle">
              <Image
                src="/ge/sgt_slaughter.png"
                alt="superfly"
                width={400}
                height={400}
                className="mask mask-squircle"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoldenEra;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    *[_type == "collection" && slug.current == "golden-era"][0]{
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
      },
    }
  `;
  const collection: Collection = await sanityClient.fetch(query);

  if (!collection) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      collection,
    },
  };
};
