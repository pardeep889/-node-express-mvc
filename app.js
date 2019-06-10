const express = require('express');
const app = express();
const router = require('./appliication/routes/routes');

router.routes(app);


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App is started on port: ${port}`);
});