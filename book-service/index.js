const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/books', (req, res) => {
  res.send('Danh sách sách');
});

app.listen(3000, () => { console.log('Book service running on port 3000'); });
