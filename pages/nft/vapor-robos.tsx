import { useAddress, useContract } from "@thirdweb-dev/react";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { Collection } from "../../types/typings";
import sanityClient from "../../lib/sanity";
import imageUrlFor from "../../utils/imageUrlFor";

type MintingSteps = undefined | "minting" | "minted";

function VaporRobos({ collection }: { collection: Collection }) {
  // auth
  //const connectWithMetaMask = useMetamask();
  //const disconnect = useDisconnect();
  const address = useAddress();

  const { contract, isLoading } = useContract(collection.address, "nft-drop");
  const [claimedSupply, setClaimedSupply] = React.useState<string>("0");
  const [totalSupply, setTotalSupply] = React.useState<string>("0");

  const [minting, setMinting] = React.useState<MintingSteps>(undefined);
  const [add, setAdd] = React.useState(false);

  useEffect(() => {
    (async () => {
      const [claimed, total] = await Promise.all([
        contract?.totalClaimedSupply(),
        contract?.totalSupply(),
      ]);

      setClaimedSupply((claimed || "0").toString());
      setTotalSupply((total || "0").toString());
    })();

    if (claimedSupply === totalSupply) {
      setMinting(undefined);
      return;
    }

    if (minting === "minting") {
      setTimeout(() => {
        setMinting("minted");
      }, 3000);
    }

    if (minting === "minted") {
      setTimeout(() => {
        setMinting(undefined);
        setClaimedSupply((Number(claimedSupply) + 1).toString());
        setAdd(true);

        setTimeout(() => {
          setAdd(false);
        }, 3000);
      }, 3000);
    }
  }, [address, minting, add, contract, isLoading]);

  const allMinted = Number(claimedSupply) >= Number(totalSupply);
  const disabled = address === undefined || allMinted || minting !== undefined;

  return (
    <>
      <Head>
        <title>{collection.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <div className="flex flex-col min-h-screen bg-slate-800 lg:grid lg:grid-cols-10">
        {/* left */}
        <div className="bg-gradient-to-t from-slate-800 to-rose-500 lg:col-span-4 lg:bg-gradient-to-l">
          <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <Carousel />
            <div className="text-center p-5 space-y-4">
              <h1 className="text-4xl text-white font-bold font-press-start">
                the robos
              </h1>
              <h2 className="text-sm lg:text-lg text-gray-200 font-press-start p-2">
                {collection.description}
              </h2>
            </div>

            <button
              disabled
              className="flex justify-center items-center w-1/2 border border-white shadow-md shadow-slate-600 text-lg text-white rounded-full bg-slate-800 px-4 py-2 opacity-50 mt-12 cursor-not-allowed"
            >
              view secondary market
            </button>
            <p className="text-sm text-gray-300 italic mt-1">coming soon</p>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-1 flex-col p-12 py-2 md:p-10 md:py-0 lg:col-span-6">
          <hr className="my-4 border md:border-none" />
          {/* header */}
          <Header />

          {/* {address && (
          <p className="text-gray-400 font-extralight">
            You're logged in with wallet {address.substring(0, 5)}
            ...
            {address.substring(address.length - 5)}
          </p>
        )} */}

          {/* content */}
          <div className="flex flex-col flex-1 items-center justify-center mt-10 lg:mt-2 space-y-4 text-center">
            <div className="bg-gradient-to-tr from-rose-800 to-purple-800 p-2 rounded-xl shadow-2xl hover:scale-105 duration-500">
              <Image
                src="/grid_0.webp"
                alt="collection image"
                className="w-80 rounded-lg shadow-2xl transition duration-500 object-contain"
                width={200}
                height={200}
                priority
              />
            </div>
            <h1 className="text-2xl font-bold lg:font-extrabold text-white font-press-start py-2">
              {collection.collectionName}
            </h1>
            <Link href="/creator/ryanimosity-eth">
              <div className="flex items-center space-x-10 border border-rose-500 p-4 rounded-xl bg-rose-500/20 hover:animate-pulse">
                <div className="flex flex-col items-center space-y-4 lg:space-y-2">
                  <Image
                    src={`${
                      (collection.creator &&
                        imageUrlFor(collection.creator?.image).url()) ||
                      "/avatar.webp"
                    }`}
                    alt="creator avatar"
                    className="rounded-full border border-white w-20 lg:w-16"
                    width={200}
                    height={200}
                    priority
                  />
                  <p className="font-extralight text-xl lg:text-lg text-white">
                    creator:
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-white text-4xl font-extralight underline decoration-rose-500/60">
                  {collection.creator?.name || "ryanimosity.eth"}
                </div>
              </div>
            </Link>
            <p
              className={`font-press-start text-xl lg:text-lg text-rose-400 font-extralight transition duration-300 p-2 pr-3 min-w-24 ${
                add && "border border-green-400 rounded-full animate-pulse"
              }`}
            >
              {isLoading
                ? "Loading...."
                : `${claimedSupply} / ${totalSupply} minted `}
              {add && (
                <span className="font-press-start text-xl lg:text-lg text-green-500 animate-pulse transition duration-300">
                  {" "}
                  +1
                </span>
              )}
            </p>
          </div>

          {/* mint button */}
          <div
            className={`p-2 transition duration-300 ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => {
              if (address && minting === undefined) {
                setMinting("minting");
              }
            }}
          >
            {minting && (
              <div className="toast toast-end z-10 pb-24">
                {minting === "minting" ? (
                  <div className="alert alert-info">
                    <div>
                      <span>mint starting</span>
                    </div>
                  </div>
                ) : (
                  <div className="alert alert-success">
                    <div>
                      <span>mint success</span>
                    </div>
                  </div>
                )}
              </div>
            )}
            <button
              disabled={disabled}
              className={`visible h-16 lg:h-12 lg:mb-4 w-full bg-rose-700 mt-10 lg:mt-6 rounded-full text-white font-bold border border-white shadow-md shadow-slate-600 duration-150 cursor-pointer animate-bounce disabled:cursor-not-allowed ${
                disabled && "opacity-50 animate-none"
              }`}
              onClick={() => {
                if (address && minting === undefined) {
                  setMinting("minting");
                }
              }}
            >
              mint nft (0.01 eth)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VaporRobos;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    *[_type == "collection" && slug.current == "vapor-robos"][0]{
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
