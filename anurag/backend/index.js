const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const scoreRoutes = require('./routes/scoreRoutes');

const app = express();

mongoose.connect('###Please add yours###', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use(bodyParser.json());
app.use('/scores', scoreRoutes);

app.listen(3000, () => {
  console.log(`Server running on 3000`);
});
