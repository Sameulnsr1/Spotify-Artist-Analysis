export default async function getTrackInfo(access_token, artistID) {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistID}/albums`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + access_token },
    }
  );
  return await response.json();
}
