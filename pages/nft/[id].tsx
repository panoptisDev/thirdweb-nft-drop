import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function NFTDropPage() {
  // auth
  //const connectWithMetaMask = useMetamask();
  //const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="flex flex-col min-h-screen bg-slate-800 lg:grid lg:grid-cols-10">
      {/* left */}
      <div className="bg-gradient-to-l from-slate-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="mt-6 bg-[#FED9B9] rounded-xl p-2  shadow-2xl transition duration-500 hover:scale-105">
            <Image
              src="/robotic.png"
              alt="nft drop image"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              height={1000}
              width={1000}
              priority
            />
          </div>
          <div className="text-center p-5 space-y-4">
            <h1 className="text-4xl text-white font-bold">robo #19</h1>
            <h2 className="text-lg lg:text-xl text-gray-200">
              a collection of nfts who were built of the metaverse
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
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
          <ConnectWallet />
          {/* <button
            className="rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base"
            onClick={() => (address ? disconnect() : connectWithMetaMask())}
          >
            {address ? "sign out" : "sign in"}
          </button> */}
        </header>

        <hr className="my-2 border" />
        {/* {address && (
          <p className="text-gray-400 font-extralight">
            You're logged in with wallet {address.substring(0, 5)}
            ...
            {address.substring(address.length - 5)}
          </p>
        )} */}

        {/* content */}
        <div className="flex flex-col flex-1 items-center justify-center mt-10 space-y-6 text-center">
          <div className="bg-gradient-to-tr from-rose-800 to-purple-800 p-2 rounded-xl shadow-2xl hover:scale-105 duration-500">
            <Image
              src="/grid_0.png"
              alt="collection image"
              className="w-80 rounded-lg shadow-2xl lg:w-96  transition duration-500 object-contain"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold text-white">
            the vapor robos | nft drop
          </h1>
          <p className="pt-2 text-xl text-rose-400 font-extralight">
            -/50 minted
          </p>
        </div>

        {/* mint button */}
        <div
          className={`p-2 ${address ? "cursor-pointer" : "cursor-not-allowed"}`}
        >
          <button
            disabled={!!address}
            className={`h-16 w-full bg-rose-600 mt-10 rounded-full text-white font-bold duration-150 ${
              address ? "cursor-pointer animate-bounce" : "cursor-not-allowed"
            } ${!address && "opacity-50"}`}
          >
            mint nft (0.01 eth)
          </button>
        </div>
      </div>
    </div>
  );
}

export default NFTDropPage;
