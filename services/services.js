const getPost = async () => {
  return await fetch("http://localhost:5000/api/myposts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  });
};
