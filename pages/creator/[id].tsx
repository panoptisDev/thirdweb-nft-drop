import React from "react";
import Image from "next/image";
import Link from "next/link";

function Creator() {
  const [rating, setRating] = React.useState(3);
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <div className="flex flex-col items-center mt-16">
        <div className="text-4xl text-white underline decoration-teal-300/50 font-extrabold">
          ryanimosity.eth
        </div>
        <div className="shadow-sm shadow-teal-500 flex flex-col items-center mt-16 p-1 bg-orange-500/80 rounded-full animate-wiggle">
          <Image
            src="/avatar.webp"
            alt="creator avatar"
            className=" w-48 lg:w-60 rounded-full"
            width={800}
            height={800}
            priority
          />
        </div>

        <div className="rating mt-12 space-x-2">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-teal-400 animate-bigWiggleLeft"
            checked={rating === 1}
            onChange={() => setRating(1)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-teal-400 animate-bigWiggleRight"
            checked={rating === 2}
            onChange={() => setRating(2)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-teal-400 animate-bigWiggleLeft"
            checked={rating === 3}
            onChange={() => setRating(3)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-teal-400 animate-bigWiggleRight"
            checked={rating === 4}
            onChange={() => setRating(4)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-teal-400 animate-bigWiggleLeft"
            checked={rating === 5}
            onChange={() => setRating(5)}
          />
        </div>

        <div className="text-2xl text-white font-extralight mt-12">
          collections
        </div>
        <div className="overflow-x-auto w-3/4 mt-12">
          <table className="table w-full">
            <thead>
              <tr>
                <th>name</th>
                <th>editions</th>
                <th>mint price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    <Link
                      href="/nft/vapor-robos"
                      className="flex flex-col space-y-1 items-start sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
                    >
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="/grid_0.webp" alt="collection image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">vapor robos</div>
                      </div>
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="relative flex flex-col sm:flex-row sm:items-center">
                    8{" "}
                    <div className="absolute h-7 badge badge-ghost badge-sm -bottom-8 sm:ml-2 sm:relative sm:bottom-0">
                      Midjourney AI
                    </div>
                  </div>
                </td>
                <td>
                  <div className="relative flex flex-col sm:flex-row">
                    0.1{" "}
                    <div className="absolute -bottom-6 sm:relative sm:bottom-0 sm:ml-2">
                      {" "}
                      eth
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Creator;
