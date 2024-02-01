import React from "react";

type Props = {
  img: string;
  title: string;
  desc: string;
};

const NewReleaseCard = ({ img, title, desc }: Props) => {
  return (
    <div className="cursor-pointer">
      <div className="relative rounded-2xl max-w-[230px] overflow-hidden">
        <img
          src={img}
          alt={img}
          className="rounded-2xl md:w-full duration-1000 hover:transform hover:scale-150 transform-origin-center"
        />
        {/* <div className="absolute flex justify-center items-center top-0 rounded-2xl h-full bg-black opacity-0 duration-300 hover:opacity-55 max-w-[230px] md:w-full">
          <div className="bg-black w-10 h-10">
            <svg
              fill="white"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 224.075 224.075"
              xmlSpace="preserve"
              className="hover:fill-[#25A56A] duration-300 opacity-100"
            >
              <g>
                <g>
                  <path
                    d="M216.2,99.23L20.5,1.63c-2.1-1.1-4.8-1.6-6.9-1.6v0C5.7,0.53,0,6.33,0,14.23v195.7c0,10.5,11,17.3,20.5,12.6l195.7-98.1
			C226.7,119.23,226.7,104.53,216.2,99.23z M27.8,187.33V36.73l150.6,75L27.8,187.33z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div> */}
      </div>
      <h1 className="mt-1">{title}</h1>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
};

export default NewReleaseCard;
