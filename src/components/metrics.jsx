import { useSpotifyContext } from "../hooks/useSpotifyContext";

export const TotalTracks = () => {
  const { trackCount } = useSpotifyContext();
  return (
    <article className="sm:w-full lg:w-1/4 lg:py-25  rounded-lg shadow-lg bg-gray-50">
      <p className="font-light sm:text-xl lg:text-2xl text-center">
        Total Tracks: {trackCount}
      </p>
    </article>
  );
};

export const TotalAlbums = () => {
  const { albumCnt } = useSpotifyContext();
  return (
    <article className="sm:w-full lg:w-1/4 lg:py-25 text-center rounded-lg shadow-lg bg-gray-50">
      <p className="font-light sm:text-xl lg:text-2xl">
        Total Albums {albumCnt}
      </p>
    </article>
  );
};

export const AvgTrackCount = () => {
  const { albumCnt, trackCount } = useSpotifyContext();
  const avgTrack = trackCount / albumCnt;
  return (
    <article className="sm:w-full lg:w-1/4 lg:py-25 text-center rounded-lg shadow-lg bg-gray-50">
      <p className="font-light sm:text-xl lg:text-2xl">
        Avg. Track Count {Math.round(avgTrack)}
      </p>
    </article>
  );
};
export const LongAlbum = () => {
  const { tracksPerAlbum } = useSpotifyContext();
  const longestTrack = tracksPerAlbum.reduce((max, current) => {
    return current.total_tracks > max ? current.total_tracks : max;
  }, 0);

  const longestAlbum = tracksPerAlbum.find(
    (item) => item.total_tracks === longestTrack
  );
  console.log(longestAlbum);
  return (
    <article>
      <p>Longest Album:{longestAlbum?.name}</p>
      <p>Total Tracks:{longestAlbum?.total_tracks} </p>
    </article>
  );
};

export const ShortAlbum = () => {
  const { tracksPerAlbum } = useSpotifyContext();
  const shortTrack = tracksPerAlbum.reduce((min, current) => {
    return current.total_tracks >= min ? min : current.total_tracks;
  }, 1);

  const shortAlbum = tracksPerAlbum.find(
    (item) => item.total_tracks === shortTrack
  );
  console.log(shortAlbum);
  return (
    <article>
      <p>Shortest Album: {shortAlbum?.name}</p>
      <p>Total Tracks: {shortAlbum?.total_tracks}</p>
    </article>
  );
};
