import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express server");
});
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Health is OK !",
  });
});

app.listen(8000, () => {
  console.log("Server running on PORT", 8000);
});
