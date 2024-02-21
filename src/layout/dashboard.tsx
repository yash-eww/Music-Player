import { Inter } from "next/font/google";
import "../app/globals.css";
import Sidebar from "@/components/sidebar";
import { useEffect } from "react";
import { useAudio } from "@/store/music";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashBoard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setAlbums, setIsLoading } = useAudio();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
        // console.log(accessToken);
        const res = await fetch(
          "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums?market=in",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await res.json();
        // console.log(res.json(), "resres");
        if (typeof localStorage !== "undefined") {
          // const { items } = await res.json();
          const getAlbum = localStorage.getItem("album");
          if (getAlbum) {
            setAlbums(JSON.parse(getAlbum));
          } else {
            setAlbums(data.items);
          }
        }
        // setTrending(data.trending.albums);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <Sidebar>{children}</Sidebar>
      {/* {children} */}
    </div>
  );
}
