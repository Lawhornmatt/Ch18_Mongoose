const path = require('path');
const express = require('express');
const routes = require('./routes');

const cwd = process.cwd();

const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 30547;

const activity = cwd.includes('Challenge18')
  ? cwd.split('/Challenge18/')[1]
  : cwd;

app.set('json spaces', 2);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });