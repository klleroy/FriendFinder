const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'app/public/assets')));

// require('./app/routing/apiRoutes.js')(app);
app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT  + " visit http://localhost:" + PORT);
});