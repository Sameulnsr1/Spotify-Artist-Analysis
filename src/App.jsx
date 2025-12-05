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

function App() {
  return (
    <>
      <div>
        <header>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Artist Performance Analytics
          </h1>
          <p className="text-slate-600 text-lg">
            Comprehensive overview of catalog performance
          </p>
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
