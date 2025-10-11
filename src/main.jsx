import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SpotifyProvider } from "./contexts/spotifyContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SpotifyProvider>
      <App />
    </SpotifyProvider>
  </StrictMode>
);
