const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

// export default async function getDuneData() {
//   try {
//     const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");
//     if (!res.ok) {
//       throw new Error("There is something wrong with the API");
//     }
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

export default async function getToken() {
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
    });
    if (!response.ok) {
      throw new Error("token was not found");
    }
    return await response.json();
  } catch (err) {
    console.error(err.message);
  }
}
