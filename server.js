var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

// MODELS
var db = require("./models");

var PORT =  process.env.PORT || 3000;

var app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Connect to the Mongo DB
var MONGODBURI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//mongoose.connect(MONGODBURI);
mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('\x1b[31m\x1b[1m MongoDB Not Connected');
  });


// ROUTES

// SCRAPING TEST : ------ > START X1
app.get("/scrape-1", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.cnbc.com/stocks/").then(function(response) {
    var $ = cheerio.load(response.data);
    $(".Card-titleContainer").each(function(i, element) {
      var result = {};
      result.title = $(this).children("a").text();
      result.link = $(this).find("a").attr("href");
      result.from = "stocks";
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); 
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      result.date = today;
      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
    res.render('index');
  });
});
app.get('/', function(req, res) {
    res.render('index');
});
app.get("/articles", function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});
// SCRAPING TEST : ------ > END X1


// SCRAPING REAL-1 : ------ > START X2
app.get("/scrape-2", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://old.reddit.com/r/news/").then(function(response) {

    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    $(".title").each(function(i, element) {
      var result = {};
      result.title = $(this).children("a").text();
      result.link =  $(this).children("a").attr("href");
      result.from = "News";
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      result.date = today;
      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
    res.render('index');
  });
});
app.get('/', function(req, res) {
    res.render('index');
});
app.get("/articles", function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});
// SCRAPING REAL 2 : ------ > END X2

// SCRAPING REAL 3 : ------ > START X3
app.get("/scrape-4", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://twitter.com/i/moments").then(function(response) {

    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    $(".MomentCapsuleSummary-details").each(function(i, element) {
      var result = {};
      result.title = $(this).children("a").attr("title");
      result.link =  $(this).children("a").attr("href");
      result.from = "twitter";
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      result.date = today;
      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
    res.render('index');
  });
});
app.get('/', function(req, res) {
    res.render('index');
});
app.get("/articles", function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});
// SCRAPING REAL 3 : ------ > END - X3


// SCRAPING REAL 3 : ------ > START X3
app.get("/scrape-3", function(req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://old.reddit.com/r/all/").then(function(response) {

    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    $(".title").each(function(i, element) {
      var result = {};
      result.title = $(this).children("a").text();
      linker = "https://www.reddit.com"
      result.link = linker + $(this).children("a").attr("href");
      result.from = "reddit";
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      result.date = today;

      db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
    res.render('index');
  });
});
app.get('/', function(req, res) {
    res.render('index');
});
app.get("/articles", function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});
// SCRAPING REAL 3 : ------ > END - X3

// SCRAPING REAL 3 : ------ > START X3
app.get("/delete-scrapes", function(req, res) {
  // Remove every note from the notes collection
  db.Article.remove({}, function(error, response) {
    // Log any errors to the console
    if (error) {
      console.log(error);
      res.send(error);
    }
    else {
      // Otherwise, send the mongojs response to the browser
      // This will fire off the success function of the ajax request
      console.log(response);
      res.render("index");
    }
  });
});



// SCRAPING DELETE 3 : ------ > END - X3


app.get("/notes", function(req, res) {
  db.Note.find({})
    .then(function(dbNotes) {
      res.json(dbNotes);
    })
    .catch(function(err) {
      res.json(err);
    });
});





app.get("/articles/:id", function(req, res) {
  db.Article.findOne({ _id: req.params.id })
    .populate("note")
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// CREATE A POST
app.post("/articles/:id", function(req, res) {
  db.Note.create(req.body)
    .then(function(dbNote) {
      return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});


// START THE SERVER
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
