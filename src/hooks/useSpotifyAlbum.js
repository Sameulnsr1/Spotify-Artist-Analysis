import { useState, useEffect, useMemo } from "react";
import getTrackInfo from "../services/trackInfo";
import getToken from "../services/getToken";
import {
  albumCount,
  albums,
  trackCnt,
  tracksPerAlb,
  albumsPerYear,
} from "../utils/albumsCalculations";

const useSpotifyAlbum = () => {
  const [trackData, setTrackData] = useState(null);
  const albumsObject = useMemo(
    () => (trackData ? trackData.items : []),
    [trackData]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenData = await getToken();
        const trackInfo = await getTrackInfo(tokenData.access_token);
        setTrackData(trackInfo);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const tracksPerAlbum = useMemo(
    () => tracksPerAlb(albumsObject),
    [albumsObject]
  );
  const albumRelease = useMemo(() => albums(albumsObject), [albumsObject]);
  const albumCnt = useMemo(() => albumCount(albumsObject), [albumsObject]);
  const trackCount = useMemo(() => trackCnt(albumsObject), [albumsObject]);
  const yearlyAlbums = useMemo(
    () => albumsPerYear(albumsObject),
    [albumsObject]
  );

  return {
    tracksPerAlbum,
    albumRelease,
    albumCnt,
    trackCount,
    trackData,
    yearlyAlbums,
  };
};

export default useSpotifyAlbum;
