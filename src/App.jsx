import { TotalTracks, TotalAlbums } from "./components/metrics";

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
                <h2>Artist Total Albums and Tracks</h2>
                <TotalTracks />
                <TotalAlbums />
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
