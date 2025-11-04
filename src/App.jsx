import { TotalTracks, TotalAlbums } from "./components/metrics";
import { ResponsiveBar } from "@nivo/bar";
import { TrackGraph } from "./components/charts";
import { AlbumGraph } from "./components/charts";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="mb-8">
          <header>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Artist Performance Analytics
            </h1>
          </header>
          <p className="text-slate-600 text-lg">
            Comprehensive overview of catalog performance
          </p>
          <main>
            <section>
              <div>
                <TotalTracks />
                <TotalAlbums />
                <article className="h-[700px]">
                  <TrackGraph />
                </article>
                <article className="h-[700px]">
                  <AlbumGraph />
                </article>
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
