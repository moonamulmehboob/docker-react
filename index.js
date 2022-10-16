const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hi this is first demo app');
}):
app.listen(8080, () => {
    console.log('Listening on port 8080');
});