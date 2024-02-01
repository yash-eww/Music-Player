"use client";
import React from "react";
import DashBoard from "@/layout/dashboard";
import Carousel from "@/components/carousel";
import EastIcon from "@mui/icons-material/East";
import NewReleaseCard from "@/components/newReleaseCard";
import UpComingEventCard from "@/components/upComingEventCard";
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

function Page({}: Props) {
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
            {NewRelease.map((x) => (
              <NewReleaseCard img={x.img} title={x.title} desc={x.desc} />
            ))}
          </div>
        </div>
        <div className="mt-20">
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
          <div className="mt-10 flex gap-5">
            <UpComingEventCard />
            <UpComingEventCard />
            <UpComingEventCard />
          </div>
        </div>
      </div>
    </DashBoard>
  );
}

export default Page;
