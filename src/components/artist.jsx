import { useSpotifyContext } from "../hooks/useSpotifyContext";

export const UpdateArtist = (props) => {
  const { albumArtist } = useSpotifyContext();
  const currentArtist =
    albumArtist && albumArtist.length > 0
      ? albumArtist[1].artist_name1
      : "Loading...";

  return (
    <div>
      <p>Current Artist: {currentArtist}</p>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="artist">Select Artist: </label>
        <input id="artist" type="text" name="artist" />
        <button>Submit</button>
      </form>
    </div>
  );
};
