module.exports = (app) => {
  app.get("/donate", async (req, res) => {
    res.render("donate")
  });
}