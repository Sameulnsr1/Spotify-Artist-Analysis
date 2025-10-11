import { createContext, useContext } from "react";

export const SpotifyContext = createContext(null);

export function useSpotifyContext() {
  const context = useContext(SpotifyContext);

  // 🤔 QUESTION 3: What should happen if context is null?
  // Hint: It means someone used the hook outside the Provider
  if (!context) {
    throw new Error("useSpotifyContext must be used within SpotifyProvider");
  }

  return context;
}
