const express = require('express');
const app = express();
const port = 3000;
const homeController = require('../controllers/home.js')

app.use(express.static('public'))
app.get('/', homeController)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
