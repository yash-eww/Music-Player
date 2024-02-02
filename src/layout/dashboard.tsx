import { Inter } from "next/font/google";
import "../app/globals.css";
import Sidebar from "@/components/sidebar";
import { useEffect } from "react";
import { useAudio } from "@/store/music";

export default function DashBoard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setAlbums, setTrending } = useAudio();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://saavn.me/modules?language=hindi");
        const { data } = await res.json();
        setAlbums(data.albums);
        setTrending(data.trending.albums);
        // setLoading(false);
      } catch (error) {
        console.error(error);
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Sidebar children={children} />
      {/* {children} */}
    </div>
  );
}
