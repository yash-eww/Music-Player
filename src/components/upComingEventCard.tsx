import Image from "next/image";
import React from "react";

type Props = {
  img: string;
  button?: string;
  date: string;
  time: string;
  title: string;
  desc: string;
};

const UpComingEventCard = ({ img, button, date, time, title, desc }: Props) => {
  return (
    <div className="h-full w-full">
      <div className="relative rounded-2xl hover:opacity-80 duration-1000">
        <Image
          src={img}
          alt={img}
          className="max-w-[551px] min-h-[300px] md:w-full h-full rounded-2xl"
        />

        <div className="absolute top-0 mx-10 pt-5">
          {button && (
            <button className="bg-[#222227] px-4 py-2 rounded-lg text-[15px] flex gap-2 items-center hover:bg-[#25A56A] duration-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // fill="green"
                viewBox="0 0 24 24"
                width="25"
                className="fill-[#25A56A] hover:fill-white"
              >
                <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
              </svg>
              {button}
            </button>
          )}
          <div className="mt-16">
            <h1 className="text-[24px]">{date}</h1>
            <p>{time}</p>
            <h1 className="text-[24px] mt-7 hover:text-[#25A56A] duration-700 cursor-pointer w-fit">
              {title}
            </h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEventCard;
