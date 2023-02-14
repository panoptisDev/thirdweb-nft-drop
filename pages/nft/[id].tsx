import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import Carousel from "./components/Carousel";

type MintingSteps = undefined | "minting" | "minted";

function NFTDropPage() {
  // auth
  //const connectWithMetaMask = useMetamask();
  //const disconnect = useDisconnect();
  const address = useAddress();

  const [minting, setMinting] = React.useState<MintingSteps>(undefined);
  const [minted, setMinted] = React.useState(0);
  const [add, setAdd] = React.useState(false);

  useEffect(() => {
    if (minted === 500) {
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
        setMinted(minted + 1);
        setAdd(true);

        setTimeout(() => {
          setAdd(false);
        }, 3000);
      }, 3000);
    }
  }, [minting, minted, add]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-800 lg:grid lg:grid-cols-10">
      {/* left */}
      <div className="bg-gradient-to-t from-slate-800 to-rose-500 lg:col-span-4 lg:bg-gradient-to-l">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <Carousel />
          <div className="text-center p-5 space-y-4">
            <h1 className="text-4xl text-white font-bold">the robos</h1>
            <h2 className="text-lg lg:text-xl text-gray-200">
              a collection of robo nfts who were built of the metaverse
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col p-12 py-2 md:p-10 md:py-0 lg:col-span-6">
        <hr className="my-4 border md:border-none" />
        {/* header */}
        <header className="flex flex-col text-center space-y-2 justify-between items-center md:flex-row md:space-y-0 md:text-left">
          <h1 className="w-52 text-xl font-extralight sm:w-80 text-white">
            premier{" "}
            <Link href="/">
              <span className="font-extrabold underline decoration-rose-500/60">
                ceremoney
              </span>
            </Link>{" "}
            marketplace
          </h1>
          <ConnectWallet btnTitle="connect web3" />
          {/* <button
            className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base"
            onClick={() => (address ? disconnect() : connectWithMetaMask())}
          >
            {address ? "sign out" : "sign in"}
          </button> */}
        </header>

        <hr className="my-4 border" />
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
              src="/grid_0.png"
              alt="collection image"
              className="w-80 rounded-lg shadow-2xl transition duration-500 object-contain"
              width={800}
              height={800}
              priority
            />
          </div>
          <h1 className="text-3xl font-bold lg:font-extrabold text-white">
            the vapor robos | nft drop
          </h1>
          <Link href="/creator/ryanimosity-eth">
            <div className="flex items-center space-x-10 border border-rose-500 p-4 rounded-xl bg-rose-500/20 hover:animate-pulse">
              <div className="flex flex-col items-center space-y-4 lg:space-y-2">
                <Image
                  src="/avatar.png"
                  alt=""
                  className="rounded-full border border-white w-20 lg:w-16"
                  width={800}
                  height={800}
                  priority
                />
                <p className="font-extralight text-xl lg:text-lg text-white">
                  creator:
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-white text-4xl font-extralight underline decoration-rose-500/60">
                ryanimosity.eth
              </div>
            </div>
          </Link>
          <p
            className={`text-xl lg:text-lg text-rose-400 font-extralight transition duration-300 p-2 pr-3 min-w-24 ${
              true && "border border-green-400 rounded-full animate-pulse"
            }`}
          >
            {minted} / 500 minted{" "}
            {true && (
              <span className="text-xl lg:text-lg text-green-500 animate-pulse transition duration-300">
                {" "}
                +1
              </span>
            )}
          </p>
        </div>

        {/* mint button */}
        <div
          className={`p-2 transition duration-300 ${
            address ? "cursor-pointer" : "cursor-not-allowed"
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
            disabled={address === undefined}
            className={`visible h-16 lg:h-12 lg:mb-4 w-full bg-rose-700 mt-10 lg:mt-6 rounded-full text-white font-bold border border-white shadow-md shadow-slate-600 duration-150 ${
              minting === undefined && address
                ? "cursor-pointer animate-bounce"
                : "cursor-not-allowed"
            } ${(!address || minting) && "opacity-50"}`}
            onClick={() => {
              console.log("minting", minting);
              console.log(address);
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
  );
}

export default NFTDropPage;
