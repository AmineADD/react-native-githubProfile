export const fetchUser = async (username) => {
  const { API_URL = "http://localhost:4242" } = process.env;
  const response = await fetch(`${API_URL}/api/users/${username}`, {
    headers: {
      Authorization: "token ghp_16C7e42F292c6912E7710c838347Ae178B4a",
    },
  });
  const data = await response.json();
  const { username: usernameFromDatabase } = data.data;
  if (usernameFromDatabase) {
    //transformation
    return { data: data.data.result };
  }
  return data;
};
