export const setJWTAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://genius-car-server-five.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // local storage is the easiest but not the best place to store JWT token
      localStorage.setItem("geniusToken", data.token);
    });
};
