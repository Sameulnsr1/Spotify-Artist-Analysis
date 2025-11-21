import { SpotifyContext } from "../hooks/useSpotifyContext";
import useSpotifyAlbum from "../hooks/useSpotifyAlbum";

export function SpotifyProvider({ children }) {
  // 🤔 THINK: What logic currently lives in App.jsx?
  // 🤔 THINK: What does your useSpotifyAlbum hook return?
  // 🤔 THINK: What should you pass to the Provider's value prop?
  const spotifyData = useSpotifyAlbum();
  console.log("this is your data", spotifyData);
  console.log("Test", spotifyData.yearlyAlbums);

  return (
    <SpotifyContext.Provider value={spotifyData}>
      {children}
    </SpotifyContext.Provider>
  );
}
