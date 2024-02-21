"use client";
import DashBoard from "@/layout/dashboard";
import { useAudio } from "@/store/music";
import { Avatar } from "@mui/material";
import React, { useEffect } from "react";

type Props = {};

export default function Page(props: Props) {
  const { user, setUser } = useAudio();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
        const res = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <DashBoard>
      <div className="p-10 flex items-end bg-[#16151A]">
        <Avatar
          alt={user?.display_name}
          src="/static/images/avatar/1.jpg"
          sx={{ width: 240, height: 240, fontSize: 150 }}
        />
        <div>
          <h1 className="text-[20px] pl-3 font-medium text-white">Profile</h1>
          <h1 className="text-8xl font-semibold text-white">
            {user?.display_name}
          </h1>
        </div>
      </div>
    </DashBoard>
  );
}

// export default Profile;
