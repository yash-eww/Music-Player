"use client";
import React from "react";
import DashBoard from "@/layout/dashboard";
import Carousel from "@/components/carousel";
import EastIcon from "@mui/icons-material/East";
import NewReleaseCard from "@/components/newReleaseCard";
import UpComingEventCard from "@/components/upComingEventCard";
import ArtistCarousel from "@/components/artistCarousel";
import { useAudio } from "@/store/music";
import Link from "next/link";
type Props = {};

const NewRelease = [
  {
    img: "./images/cover1.jpg",
    title: "Space Melody",
    desc: "VIZE & Alan Walker & Leony",
  },
  {
    img: "./images/cover2.jpg",
    title: "Said Sum",
    desc: "Moneybagg",
  },
  {
    img: "./images/cover3.jpg",
    title: "I Love My Country",
    desc: "Florida Georgia",
  },
  {
    img: "./images/cover4.jpg",
    title: "Toosie Slide",
    desc: "Drake",
  },
  {
    img: "./images/cover5.jpg",
    title: "Got What I Got",
    desc: "Jason Aldean",
  },
  {
    img: "./images/cover6.jpg",
    title: "Supalonely",
    desc: "BENEE Featuring",
  },
  {
    img: "./images/cover7.jpg",
    title: "Girls In The Hood",
    desc: "Megan Thee",
  },
  {
    img: "./images/cover8.jpg",
    title: "Got It On Me",
    desc: "Summer Walker",
  },
  {
    img: "./images/cover9.jpg",
    title: "Righteous",
    desc: "Juice WRLD",
  },
  {
    img: "./images/cover10.jpg",
    title: "Walk Em Down",
    desc: "NLE Choppa",
  },
  {
    img: "./images/cover11.jpg",
    title: "Like That",
    desc: "Stefflon Don",
  },
  {
    img: "./images/cover12.jpg",
    title: "One Big Country",
    desc: "LOCASH",
  },
];
const Events = [
  {
    img: "./images/event1.jpg",
    button: "Buy ticket",
    date: "March 14, 2024",
    time: "8:00 pm",
    title: "Sorry Babushka",
    desc: "1 East Plumb Branch St.Saint Petersburg, FL 33702",
  },
  {
    img: "./images/event2.jpg",
    button: "Buy ticket",
    date: "March 14, 2024",
    time: "8:00 pm",
    title: "Big Daddy",
    desc: "71 Pilgrim Avenue Chevy Chase, MD 20815",
  },
  {
    img: "./images/event3.jpg",
    button: "Buy ticket",
    date: "March 14, 2024",
    time: "8:00 pm",
    title: "Rocky Pub",
    desc: "514 S. Magnolia St. Orlando, FL 32806",
  },
];

function Page({}: Props) {
  const { albums, isLoading } = useAudio();

  // console.log(albums, "albums");
  console.log(isLoading);
  return (
    <DashBoard>
      <div className="p-10 bg-[#16151A] text-white">
        <div>
          <Carousel />
        </div>
        <div className="mt-20">
          <div className="flex justify-between ">
            <h1 className="text-4xl">New Releases</h1>
            <button className="text-gray-300 hover:text-white duration-300 flex items-center gap-1">
              See all{" "}
              <EastIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  ":hover": { color: "green" },
                }}
              />{" "}
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            {albums?.map((x, i) => (
              <Link href={`/dashboard/${x?.id}`} key={Math.random()}>
                <NewReleaseCard
                  index={i + 1}
                  title={x?.name}
                  img={x?.images[0]?.url}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-20 ">
          <div className="flex justify-between ">
            <h1 className="text-4xl">Upcoming Events</h1>
            <button className="text-gray-300 hover:text-white duration-300 flex items-center gap-1">
              See all{" "}
              <EastIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  ":hover": { color: "green" },
                }}
              />
            </button>
          </div>
          <div className="mt-10 flex sm:flex-col gap-5 xl:flex-row  xl:gap-5">
            {Events.map((x) => (
              <UpComingEventCard
                key={Math.random()}
                img={x.img}
                button={x.button}
                date={x.date}
                time={x.time}
                title={x.title}
                desc={x.desc}
              />
            ))}
          </div>
        </div>
        <div className="mt-20">
          <div className="flex justify-between ">
            <h1 className="text-4xl">Artists</h1>
            <button className="text-gray-300 hover:text-white duration-300 flex items-center gap-1">
              See all{" "}
              <EastIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  ":hover": { color: "green" },
                }}
              />
            </button>
          </div>
          <div className="mt-10">
            <ArtistCarousel />
          </div>
        </div>
      </div>
    </DashBoard>
  );
}

export default Page;
