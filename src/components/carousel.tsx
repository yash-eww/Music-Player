import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Props } from "next/script";
import Image from "next/image";

const sliderImages = [
  {
    img: "./images/slide1.jpg",
    title: "Record Label & Music streaming",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
    button1: "BUT NOW",
    button2: "LEARN MORE",
  },
  {
    img: "./images/slide2.jpg",
    title:
      "Metallica and Slipknot feature in trailer for ‘Long Live Rock’ documentary",
    desc: "It also features Rage Against The Machine, Guns N' Roses and a number of others",
    button1: "LEARN MORE",
    button2: "Watch video",
  },
  {
    img: "./images/slide3.jpg",
    title: "New Artist of Our Label",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
    button1: "",
    button2: "LEARN MORE",
  },

  //   "./images/slide4.jpg",
  //   "./images/slide5.jpg",
];

const Carousel = (prop: Props) => {
  return (
    <div>
      {" "}
      <Swiper
        autoplay={true}
        loop={true}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
        modules={[Pagination, Navigation]}
        // scrollbar={{
        //   hide: true,
        // }}
        className="mySwiper rounded-2xl relative "
      >
        {sliderImages.map((image: any, i: number) => (
          <SwiperSlide className="relative" key={Math.random()}>
            <div className="max-h-[460px]  ">
              <Image
                src={image.img}
                alt="image"
                className="-translate-y-[300px]"
              />
            </div>
            <div className="absolute inset-0 top-20 mx-10 z-30 text-white flex flex-col gap-6">
              <h1 className="text-[44px] max-w-[800px]">{image.title}</h1>
              <p className="max-w-[700px]">{image.desc}</p>
              <div className="flex gap-10 mt-10">
                {image.button1 && (
                  <button className="bg-[#25A56A] px-10 py-3 rounded-2xl">
                    {image.button1}
                  </button>
                )}
                <button className="bg-[#222227] px-10 py-3 rounded-2xl">
                  {image.button2}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute z-10 bottom-5 right-10 flex">
          <button className="custom-button-prev">
            <KeyboardArrowLeftIcon
              htmlColor="white"
              sx={{
                width: "30px",
                height: "30px",
                ":hover": { color: "green" },
              }}
            />
          </button>
          <button className="custom-button-next">
            <KeyboardArrowRightIcon
              htmlColor="white"
              sx={{
                width: "30px",
                height: "30px",
                ":hover": { color: "green" },
              }}
            />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
