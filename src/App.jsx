import { useState, useEffect } from "react";
import "./App.css";
import getToken from "./services/getToken";
import getTrackInfo from "./services/trackInfo";
import Metrics from "./components/metrics";
import {
  albumCount,
  albums,
  trackCnt,
  tracksPerAlb,
} from "./utils/albumsCalculations";

function App() {
  const [trackData, setTrackData] = useState(null);
  const albumsObject = trackData ? trackData.items : [];

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

  // const albums =
  //   albumsObject.length > 0
  //     ? albumsObject.map((item, index) => {
  //         return {
  //           id: index,
  //           name: item.name,
  //           year: item.release_date,
  //           image: item.images[1].url,
  //         };
  //       })
  //     : [];

  // const totalAlbums =
  //   albumsObject.length > 0
  //     ? albumsObject.map((item) => {
  //         return [item.name];
  //       })
  //     : [];

  // const albumTracks =
  //   albumsObject.length > 0
  //     ? albumsObject.map((item) => {
  //         return item.total_tracks;
  //       })
  //     : [];

  const tracksPerAlbum = tracksPerAlb(albumsObject);
  const albumRelease = albums(albumsObject);
  const albumCnt = albumCount(albumsObject);
  const trackCount = trackCnt(albumsObject);

  console.log("album Name, Release Date, URL:", albumRelease);
  console.log("albums array", albumCnt);
  console.log("total tracks", trackCount);
  console.log("albumsPerTrack", tracksPerAlbum);
  console.log(trackData);

  return (
    <>
      <Metrics trackData={trackData} />
    </>
  );
}

export default App;
