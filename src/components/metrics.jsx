import { useSpotifyContext } from "../hooks/useSpotifyContext";

export const TotalTracks = () => {
  const { trackCount } = useSpotifyContext();
  return (
    <article>
      <p className="font-light text-3xl size-100 text-center py-45 rounded-lg shadow-lg">
        Total Tracks: {trackCount}
      </p>
    </article>
  );
};

export const TotalAlbums = () => {
  const { albumCnt } = useSpotifyContext();
  return (
    <article>
      <p className="font-light text-3xl size-100 text-center py-45 rounded-lg shadow-lg">
        Total Albums {albumCnt}
      </p>
    </article>
  );
};
