const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = require('express')();

dotenv.config();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

require('./routes')(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
