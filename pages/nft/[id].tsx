import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import React from "react";

function NFTDropPage() {
  // auth
  //const connectWithMetaMask = useMetamask();
  //const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div className="flex flex-col min-h-screen lg:grid lg:grid-cols-10">
      {/* left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl p-2">
            <img
              src="https://links.papareact.com/8sg"
              alt="nft drop image"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>
          <div className="text-center p-5 space-y-4">
            <h1 className="text-4xl text-white font-bold">ryanimal</h1>
            <h2 className="text-xl text-gray-200">
              a collection of nfts who live and breathe in the metaverse
            </h2>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex justify-between items-center">
          <h1 className="w-52 text-xl font-extralight sm:w-80">
            premier{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              ryanimal
            </span>{" "}
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
        <div className="flex flex-col flex-1 items-center mt-10 space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            alt="collection image"
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            the ryanimal's coder monkeys | nft drop
          </h1>
          <p className="pt-2 text-xl text-green-400 font-extralight">
            13/50 minted
          </p>
        </div>

        {/* mint button */}
        <button
          disabled={!!address}
          className={`h-16 w-full bg-green-600 mt-10 rounded-full text-white font-bold ${
            address ? "cursor-pointer" : "cursor-not-allowed"
          } ${!address && "opacity-50"}`}
        >
          mint nft (0.01 eth)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
