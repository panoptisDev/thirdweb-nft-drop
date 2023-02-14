import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
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
    </>
  );
}

export default Header;
