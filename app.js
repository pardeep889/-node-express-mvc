const express = require('express');
const app = express();
const router = require('./application/routes/routes');

router.routes(app); // initialize all routes from application/routes/routes.js


const port = process.env.PORT || 8000; // define the port where the app start running.

app.listen(port, () => {
    console.log(`App is started on port: ${port}`);
});