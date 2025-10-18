import "./index.css";
import { TotalTracks, TotalAlbums } from "./components/metrics";

function App() {
  // const { tracksPerAlbum, albumRelease, albumCnt, trackCount, trackData } =
  //   useSpotifyAlbum();

  // console.log("album Name, Release Date, URL:", albumRelease);
  // console.log("albums array", albumCnt);
  // console.log("total tracks", trackCount);
  // console.log("albumsPerTrack", tracksPerAlbum);

  return (
    <>
      <header>
        <h2>Spotify Artist Album Analysis</h2>
      </header>
      <main>
        <section>
          <div>
            <h2>Artist Total Albums and Tracks</h2>
            <TotalTracks />
            <TotalAlbums />
          </div>
        </section>
      </main>
      <footer>Sam Nasir</footer>
    </>
  );
}

export default App;
