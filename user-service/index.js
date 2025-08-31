const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/users', (req, res) => {
  res.send('Danh sách người dùng');
});

app.listen(3001, () => { console.log('User service running on port 3001'); });
