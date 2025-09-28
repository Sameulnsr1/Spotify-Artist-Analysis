export default async function getTrackInfo(access_token) {
  const response = await fetch(
    "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/albums",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + access_token },
    }
  );
  return await response.json();
}
