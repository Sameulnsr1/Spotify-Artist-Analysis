import { useSpotifyContext } from "../hooks/useSpotifyContext";

export const TotalTracks = () => {
  const { trackCount } = useSpotifyContext();
  return (
    <article>
      <p>Total Tracks: {trackCount}</p>
    </article>
  );
};

export const TotalAlbums = () => {
  const { albumCnt } = useSpotifyContext();
  return (
    <article>
      <p>Total Albums {albumCnt}</p>
    </article>
  );
};
