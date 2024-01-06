import express from "express";
const app = express();
// app.use(express.json());
app.get("/", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "Yash Bombale",
    },
    {
      id: 2,
      name: "Roy",
    },
    {
      id: 3,
      name: "Tej",
    },
  ]);
});

app.listen(8000, (req, res) => {
  console.log(`server is running on PORT:8000`);
});
