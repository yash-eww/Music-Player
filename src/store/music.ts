import { Audio, PlaySong } from "@/types";
import { create } from "zustand";

export const useAudio = create<{
  albums: Audio[] | null;
  trending: Audio[] | null;
  song: Audio | null;
  playSong: PlaySong | undefined | null;
  setAlbums: (albums: Audio[] | null) => void;
  setTrending: (trending: Audio[] | null) => void;
  setSong: (song: Audio | null) => void;
  setPlaySong: (song: PlaySong | null) => void;
}>((set) => ({
  albums: [],
  trending: [],
  song: null,
  playSong: null,
  setAlbums: (albums) => set(() => ({ albums: albums })),
  setTrending: (trending) => set(() => ({ trending: trending })),
  setSong: (song: Audio | null) => set(() => ({ song: song })),
  setPlaySong: (playSong: PlaySong | null) =>
    set(() => ({ playSong: playSong })),
}));
