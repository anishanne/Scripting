var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

require("./routes/home")(app);
require("./routes/about")(app);
require("./routes/donate")(app);
require("./routes/faq")(app);
require("./routes/redirects")(app);

const webhook = require("webhook-discord")
const errorlogs = new webhook.Webhook("https://discord.com/api/webhooks/710913886433443890/_W1LJtJrnZjjwRS20E44s7QReU-Gggn4qbajbu3E0liTtwHDu0uKshGciTQ7RJhswuT8")

app.get("*", function(req, res) {
  res.render("404")
});

const hastebin = require("hastebin-gen")
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('500', {
      message: err.message,
      error: err
    });
    console.log("O")
    hastebin(`${err.message} | ${err}`, { extension: "txt" }).then(haste => {
      console.log("haste")
      errorlogs.err("500 Error", haste)  
    }).catch(error => {
      console.error(error);
  });
});


var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
