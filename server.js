var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set('views', `${__dirname}/public/`)

require("./routes/home")(app);
require("./routes/about")(app);
require("./routes/donate")(app);
require("./routes/faq")(app);
require("./routes/redirects")(app);

app.get("*", function(req, res) {
  res.render("404")
});



var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
