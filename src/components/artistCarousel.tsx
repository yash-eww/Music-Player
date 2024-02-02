import React, { useRef, useState } from "react";

type Props = {};

const Artist = [
  { img: "./images/artist1.jpg", name: "Megan Thee" },
  { img: "./images/artist2.jpg", name: "Stefflon Don" },
  { img: "./images/artist3.jpg", name: "Juice WRLD" },
  { img: "./images/artist4.jpg", name: "LOCASH" },
  { img: "./images/artist5.jpg", name: "NLE Choppa" },
  { img: "./images/artist6.jpg", name: "BENEE Featuring" },
  //   { img: "./images/artist7.jpg", name: "Jason Aldean" },
  //   { img: "./images/artist8.jpg", name: "John Doe" },
];

const ArtistCarousel = (props: Props) => {
  return (
    <div className="flex justify-between w-full flex-wrap items-center">
      {Artist.map((x) => (
        <div className="max-w-[235px] rounded-2xl cursor-pointer hover:opacity-80 duration-700">
          <div className="rounded-2xl">
            <img src={x.img} alt={x.img} className="rounded-2xl" />
          </div>
          <h1 className="text-center mt-3 hover:text-[#25A56A] duration-700">
            {x.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ArtistCarousel;
