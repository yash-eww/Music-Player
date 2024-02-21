"use client";
import CreatePlayList from "@/components/CreatPlayList";
import PlayListCard from "@/components/playList/PlayListCard";
import UseToast from "@/hook/useToast";
import DashBoard from "@/layout/dashboard";
import { useAudio, usePlayList } from "@/store/music";
import { MyPlayList } from "@/types";
import QueueIcon from "@mui/icons-material/Queue";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

function Page({}: Props) {
  const { setIsLoading, setSong, song, setPlaySong } = useAudio();
  const { setDisplayPlayList, displayPlayList } = usePlayList();
  const [open, setOpen] = React.useState(false);
  const [PlayList, setPlayList] = useState();
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function createPlaylist(
    name: string,
    description: string,
    isPublic: boolean
  ) {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api.spotify.com/v1/users/31jcuzwzm3h6wcsbfkqbaajhcv5m/playlists`,
        {
          name: name,
          description: description,
          public: isPublic,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      UseToast("PlayList Created");
      handleClose();
      fetchData();
      setIsLoading(false);

      // return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw new Error("Failed to create playlist");
    }
  }
  const fetchData = async () => {
    try {
      setIsLoading(true);

      const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      // console.log(accessToken);
      const res = await fetch(
        `https://api.spotify.com/v1/users/31jcuzwzm3h6wcsbfkqbaajhcv5m/playlists`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await res.json();
      setDisplayPlayList(data.items);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DashBoard>
        <div className="h-screen bg-[#16151A]">
          <div className="p-10 ">
            <button
              onClick={handleClickOpen}
              className="text-white ml-4 text-lg bg-[#25A56A] px-3 py-3 rounded-xl"
            >
              <QueueIcon /> Create PlayList
            </button>

            <PlayListCard data={displayPlayList ?? []} />
          </div>
        </div>
      </DashBoard>
      <CreatePlayList
        handleClose={handleClose}
        open={open}
        createPlayList={(value) => {
          createPlaylist(value.name, value.desc, value.public);
        }}
      />
    </>
  );
}

export default Page;
