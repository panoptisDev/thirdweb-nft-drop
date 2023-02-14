import React from "react";

function Carousel() {
  return (
    <div className="carousel w-1/2 md:w-3/4 rounded-xl mt-4">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="/robos/grid_3.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 -bottom-4">
          <a
            href="#slide4"
            className="btn btn-circle w-5 md:w-12 bg- bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="/robos/grid_2.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 -bottom-4">
          <a
            href="#slide1"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="/robos/grid_1.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 -bottom-4">
          <a
            href="#slide2"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="/robos/grid_4.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 -bottom-4">
          <a
            href="#slide3"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src="/robos/grid_5.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 -bottom-4">
          <a
            href="#slide4"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src="/robos/grid_6.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 -bottom-4">
          <a
            href="#slide5"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle w-5 md:w-12 bg-rose-500 text-white border-white hover:border-white hover:bg-slate-800"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
