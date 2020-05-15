module.exports = (app) => {
  app.get("/faq", async (req, res) => {
    res.render("faq")
  });
}