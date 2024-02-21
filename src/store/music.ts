import { Audio, MyPlayList, PlaySong, myProfile } from "@/types";
import { create } from "zustand";

export const useAudio = create<{
  albums: Audio[] | null;
  user: myProfile | null;
  trending: Audio[] | null;
  song: any;
  playSong: any | undefined | null;
  isLoading: boolean;
  setAlbums: (albums: Audio[] | null) => void;
  setUser: (user: myProfile | null) => void;
  setTrending: (trending: Audio[] | null) => void;
  setSong: (song: Audio | null) => void;
  setPlaySong: (song: PlaySong | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}>((set) => ({
  albums: [],
  user: null,
  trending: [],
  song: null,
  playSong: null,
  isLoading: false,
  setAlbums: (albums) => set(() => ({ albums: albums })),
  setUser: (user) => set(() => ({ user: user })),
  setTrending: (trending) => set(() => ({ trending: trending })),
  setSong: (song: any) => set(() => ({ song: song })),
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading: isLoading })),
  setPlaySong: (playSong: PlaySong | null) =>
    set(() => ({ playSong: playSong })),
}));

export const usePlayList = create<{
  displayPlayList: MyPlayList[] | null;
  setDisplayPlayList: (displayPlayList: MyPlayList[] | null) => void;
}>((set) => ({
  displayPlayList: [],
  setDisplayPlayList: (displayPlayList) =>
    set(() => ({ displayPlayList: displayPlayList })),
}));
