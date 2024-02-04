const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use("/", require("./routes/index"));
// app.use("/", require("./routes/about-us"));
// app.use("/", require("./routes/blog-grid"));
// app.use("/", require("./routes/checkout"));
// app.use("/", require("./routes/contact-us"));
// app.use("/", require("./routes/product-default"));
// app.use("/", require("./routes/shop-default"));
// app.use("/", require("./routes/shopping-cart"));
// app.use("/", require("./routes/whishlist"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
