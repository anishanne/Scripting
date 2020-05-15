module.exports = (app) => {
  app.get("/code", function(request, response) {
    response.redirect("https://developers.scriptingtosavelives.com");
  });

  app.get("/instagram", function(request, response) {
    response.redirect("https://bit.ly/2KT3Fh6");
  });
}