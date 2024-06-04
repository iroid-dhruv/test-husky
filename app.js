// eslint-disable-next-line no-undef
const app = require("express")();

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

const arr = [1, 2, 3];

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
