const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/reviews', (req, res) => {
  res.send('Danh sách đánh giá');
});

app.listen(3002, () => { console.log('Review service running on port 3002'); });
