const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express app!')
});

app.listen(3000, () => {
    console.log('server started on http://localhost:3000');
});