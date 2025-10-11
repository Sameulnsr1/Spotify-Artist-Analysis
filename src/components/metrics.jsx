import { useSpotifyContext } from "../hooks/useSpotifyContext";

const Metrics = () => {
  const { trackCount } = useSpotifyContext();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{trackCount}</h1>
    </div>
  );
};

export default Metrics;
