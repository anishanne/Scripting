module.exports = (app) => {
  app.get("/about", async (req, res) => {
    res.render("about")
  });
}