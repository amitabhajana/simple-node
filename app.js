const express = require('express');
const port = 3070;
const books = require('./books');

const app = express();

app.use(express.json());
app.use('/api/v1/books', books);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
