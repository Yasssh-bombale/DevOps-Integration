import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  return res.status(200).json("Hey from node-server-container in docker");
});

app.listen(8000, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
