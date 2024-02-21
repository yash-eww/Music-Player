import React, { useEffect, useRef, useState } from "react";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import ProgressBar from "./progressBar";
import { useAudio } from "@/store/music";

type Props = {};

const Player = (props: Props) => {
  const { song, playSong } = useAudio();
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioElement = useRef(null);

  useEffect(() => {
    if (audioElement.current) {
      audioElement.current.play();
      setCount(0);
    }
  }, [playSong && playSong.preview_url]);

  useEffect(() => {
    let timer: any;

    if (isPlaying) {
      timer = setInterval(() => {
        if (playSong) {
          if (count < playSong?.duration_ms) {
            setCount((count) => count + 1);
          } else {
            setCount(0);
          }
        }
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [count, playSong?.duration_ms, isPlaying]);

  const togglePlayPause = () => {
    if (audioElement.current) {
      if (isPlaying) {
        audioElement.current.pause();
      } else {
        audioElement.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  function convertMsToMinutes(duration_ms: number) {
    const totalSeconds = duration_ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div>
      {" "}
      <div className="w-full">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-2xl flex mx-auto mt-10"
        >
          <rect width="100" height="100" fill="#ffffff" />
          <path
            d="M64.475 35.3617C64.3115 35.2214 64.1197 35.1179 63.9126 35.0584C63.7055 34.9989 63.4881 34.9846 63.275 35.0167L43.775 38.0167C43.4199 38.0706 43.0959 38.2501 42.8619 38.5226C42.628 38.7951 42.4995 39.1425 42.5 39.5017V55.0267C41.7992 54.6844 41.03 54.5049 40.25 54.5017C39.2117 54.5017 38.1966 54.8096 37.3333 55.3865C36.4699 55.9634 35.797 56.7833 35.3996 57.7426C35.0023 58.7019 34.8983 59.7575 35.1009 60.7759C35.3035 61.7943 35.8035 62.7298 36.5377 63.464C37.2719 64.1982 38.2074 64.6982 39.2258 64.9008C40.2442 65.1034 41.2998 64.9994 42.2591 64.6021C43.2184 64.2047 44.0383 63.5318 44.6152 62.6684C45.1921 61.8051 45.5 60.79 45.5 59.7517V48.2917L62 45.7567V52.0267C61.2992 51.6844 60.53 51.5049 59.75 51.5017C58.7117 51.5017 57.6966 51.8096 56.8333 52.3865C55.9699 52.9634 55.297 53.7833 54.8996 54.7426C54.5023 55.7019 54.3983 56.7575 54.6009 57.7759C54.8035 58.7943 55.3035 59.7298 56.0377 60.464C56.7719 61.1982 57.7074 61.6982 58.7258 61.9008C59.7442 62.1034 60.7998 61.9994 61.7591 61.6021C62.7184 61.2047 63.5383 60.5318 64.1152 59.6684C64.6921 58.8051 65 57.79 65 56.7517V36.5017C65 36.285 64.9531 36.0709 64.8625 35.8741C64.7718 35.6773 64.6397 35.5025 64.475 35.3617V35.3617ZM40.25 62.0017C39.805 62.0017 39.37 61.8697 39 61.6225C38.63 61.3753 38.3416 61.0239 38.1713 60.6127C38.001 60.2016 37.9564 59.7492 38.0432 59.3127C38.1301 58.8763 38.3443 58.4754 38.659 58.1607C38.9737 57.846 39.3746 57.6317 39.811 57.5449C40.2475 57.4581 40.6999 57.5027 41.111 57.673C41.5222 57.8433 41.8736 58.1316 42.1208 58.5017C42.368 58.8717 42.5 59.3067 42.5 59.7517C42.5 60.3484 42.263 60.9207 41.841 61.3427C41.419 61.7646 40.8467 62.0017 40.25 62.0017ZM59.75 59.0017C59.305 59.0017 58.87 58.8697 58.5 58.6225C58.13 58.3753 57.8416 58.0239 57.6713 57.6127C57.501 57.2016 57.4564 56.7492 57.5432 56.3127C57.6301 55.8763 57.8443 55.4754 58.159 55.1607C58.4737 54.846 58.8746 54.6317 59.3111 54.5449C59.7475 54.4581 60.1999 54.5027 60.611 54.673C61.0222 54.8433 61.3736 55.1316 61.6208 55.5017C61.868 55.8717 62 56.3067 62 56.7517C62 57.3484 61.763 57.9207 61.341 58.3427C60.919 58.7646 60.3467 59.0017 59.75 59.0017ZM62 42.7117L45.5 45.2467V40.7467L62 38.2567V42.7117Z"
            fill="#16151a"
          />
        </svg>
        <h1 className="text-white text-center mt-2">{playSong?.name}</h1>
        <div className="mt-2 flex justify-center">
          <button>
            <SkipPreviousRoundedIcon
              htmlColor="white"
              sx={{
                width: "40px",
                height: "40px",
                ":hover": { color: "green" },
              }}
            />
          </button>
          <audio
            ref={audioElement}
            src={playSong && playSong.preview_url}
          ></audio>
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <PauseIcon
                htmlColor="white"
                sx={{
                  width: "40px",
                  height: "40px",
                  ":hover": { color: "green" },
                }}
              />
            ) : (
              <PlayArrowRoundedIcon
                htmlColor="white"
                sx={{
                  width: "40px",
                  height: "40px",
                  ":hover": { color: "green" },
                }}
              />
            )}
          </button>
          <button>
            <SkipNextRoundedIcon
              htmlColor="white"
              sx={{
                width: "40px",
                height: "40px",
                ":hover": { color: "green" },
              }}
            />
          </button>
        </div>
        <div className="flex items-center mx-5 gap-2">
          <ProgressBar value={count} />
          {playSong && (
            <p className="text-white text-[14px]">
              {" "}
              {convertMsToMinutes(count)}/
              {convertMsToMinutes(playSong?.duration_ms)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
