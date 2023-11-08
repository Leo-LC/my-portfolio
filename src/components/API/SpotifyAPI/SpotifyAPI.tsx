/* import axios from "axios";

const SpotifyAPI = () => {
  const SPOTIFY_CLIENT_ID = "c55f3e38e8dd4c909d24410b4426a9b3";
  const SPOTIFY_CLIENT_SECRET = "f02fbeac25ef4d90b81b16c95904f35a";


  const getAccessToken = async () => {
    const url = "https://accounts.spotify.com/api/token";
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`,
        ).toString("base64")}`,
      },
      data: params,
    };

    try {
      const response = await axios(url, requestOptions);
      return response.data.access_token as string;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserProfile = async (accessToken: string) => {
    const url = "https://api.spotify.com/v1/users/your_spotify_user_id";
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios(url, requestOptions);
      console.log(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const logProfile = async () => {
    const accessToken = await getAccessToken();
    const profileData = await getUserProfile(accessToken);
    console.log(profileData);
  };

  logProfile();

  return <h1 className="text-white">SpotifyAPI</h1>;
};

export default SpotifyAPI; */
