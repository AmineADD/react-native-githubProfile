
export const fetchUser = async (username) => {
    const { API_URL="http://localhost:4242" } = process.env;
    console.log("api",API_URL)
    const response = await fetch(`${API_URL}/api/users/${username}`, {
      headers: {
        Authorization: "token ghp_16C7e42F292c6912E7710c838347Ae178B4a"
      }
    });
    return await response.json();
}