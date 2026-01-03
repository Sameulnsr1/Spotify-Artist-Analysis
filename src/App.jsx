import {
  TotalTracks,
  TotalAlbums,
  AvgTrackCount,
  LongAlbum,
  ShortAlbum,
} from "./components/metrics";
import { ResponsiveBar } from "@nivo/bar";
import { TrackGraph } from "./components/charts";
import { AlbumGraph } from "./components/charts";
import { useSpotifyContext } from "./hooks/useSpotifyContext";
import { UpdateArtist } from "./components/artist";

function App() {
  const { artistID, setArtistID } = useSpotifyContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanID = event.target.artist.value.trim();
    if (cleanID === "") {
      alert("Please do not submit an empty string");
      return;
    }
    if (cleanID.length !== 22) {
      alert("Please pass a correct Spotify Artist ID");
      return;
    } else {
      setArtistID(cleanID);
    }
  };

  return (
    <>
      <div>
        <header>
          <div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Artist Performance Analytics
              </h1>
              <p className="text-slate-600 text-lg">
                Comprehensive overview of catalog performance
              </p>
            </div>
            <div>
              <UpdateArtist spotArt={artistID} onSubmit={handleSubmit} />
            </div>
          </div>
        </header>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="mb-8">
          <main>
            <section>
              <div>
                <div className=" lg:flex justify-center gap-32 pt-16 pb-12">
                  <TotalTracks />
                  <TotalAlbums />
                  <AvgTrackCount />
                </div>
                <div className="lg:flex space content-between">
                  <article className="h-[500px] w-full lg:max-w-5xl lg:m-auto">
                    <AlbumGraph />
                  </article>
                  <LongAlbum />
                  <ShortAlbum />
                </div>
                <div>
                  <article className="h-[500px] w-full lg:max-w-7xl lg:m-auto">
                    <TrackGraph />
                  </article>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <footer>Sam Nasir</footer>
    </>
  );
}

export default App;
