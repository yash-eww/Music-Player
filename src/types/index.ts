export interface Audio {
  id: string;
  name: string;
  year: string;
  type: string;
  playCount: string;
  language: string;
  explicitContent: string;
  songCount: string;
  url: string;
  primaryArtists: any[];
  featuredArtists: any[];
  artists: Artist[];
  image: Image[];
  songs: any[];
}

export interface Artist {
  id: string;
  name: string;
  url: string;
  image: boolean;
  type: string;
  role: string;
}

export interface Image {
  quality: string;
  link: string;
}
export interface Album {
  id: string;
  name: string;
  url: string;
}

export interface DownloadUrl {
  quality: string;
  link: string;
}

export interface PlaySong {
  id: string;
  name: string;
  type: string;
  album: Album;
  year: string;
  releaseDate: string;
  duration: number;
  label: string;
  primaryArtists: string;
  primaryArtistsId: string;
  featuredArtists: string;
  featuredArtistsId: string;
  explicitContent: number;
  playCount: number;
  language: string;
  hasLyrics: string;
  url: string;
  copyright: string;
  image: Image[];
  downloadUrl: DownloadUrl[];
}
