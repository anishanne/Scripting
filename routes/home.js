module.exports = (app) => {
  app.get("/", async (req, res) => {
    res.render("home")
  });
}