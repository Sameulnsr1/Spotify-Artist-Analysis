import { useSpotifyContext } from "../hooks/useSpotifyContext";

export const TotalTracks = () => {
  const { trackCount } = useSpotifyContext();
  return (
    <div>
      <h1 className="text-8xl">Total Tracks: {trackCount}</h1>
    </div>
  );
};

export const TotalAlbums = () => {
  const { albumCnt } = useSpotifyContext();
  return (
    <div>
      <h1>Total Albums {albumCnt}</h1>
    </div>
  );
};
