const server = require("./api/server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.get("/", (req, res) => {
  res.json({ message: "The API is now up!" });
});
