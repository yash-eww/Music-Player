import React from "react";
import "./playListCard.css";
import { MyPlayList } from "@/types";
import Link from "next/link";

const PlayListCard = ({ data }: { data: MyPlayList[] }) => {
  return (
    <div className="main">
      <div className="currentplaying">
        <p className="heading">Your PlayLists</p>
      </div>
      {data.map((x) => (
        <Link href={`/playList/${x?.id}`}>
          <div className="loader">
            <div className="song">
              <p className="name">{x.name}</p>
              <p className="artist">Jim Corce</p>
            </div>
            {x?.images[0]?.url ? (
              <img src={x?.images[0]?.url} alt="" className=" albumcover" />
            ) : (
              <div className="albumcover"></div>
            )}
            {/* <div className="loading">
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
        </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PlayListCard;
