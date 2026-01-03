import { useState, useEffect, useMemo } from "react";
import getTrackInfo from "../services/trackInfo";
import getToken from "../services/getToken";
import {
  albumCount,
  albums,
  trackCnt,
  tracksPerAlb,
  albumsPerYear,
  artistName,
} from "../utils/albumsCalculations";

const useSpotifyAlbum = () => {
  const [trackData, setTrackData] = useState(null);
  const [artistID, setArtistID] = useState("3TVXtAsR1Inumwj472S9r4");
  const albumsObject = useMemo(
    () => (trackData ? trackData.items : []),
    [trackData]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenData = await getToken();
        const trackInfo = await getTrackInfo(tokenData.access_token, artistID);
        setTrackData(trackInfo);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [artistID]);

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
  const albumArtist = useMemo(() => artistName(albumsObject), [albumsObject]);

  return {
    tracksPerAlbum,
    albumRelease,
    albumCnt,
    trackCount,
    trackData,
    yearlyAlbums,
    artistID,
    setArtistID,
    albumsObject,
    albumArtist,
  };
};

export default useSpotifyAlbum;
