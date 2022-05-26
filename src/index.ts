import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const cors = require('cors')
const app = express();
app.set('json spaces', 2);
app.use(cors())
const port = process.env.PORT || 80;

/* Initialize Swell */
const swell = require('swell-node')
const swellOptions = {
  cache: process.env.production == 'true'
}
swell.init(process.env.SWELL_STORE_ID, process.env.SWELL_SECRET_KEY, swellOptions);

app.get('/', (req, res) => {
  res.json({message: 'Swell Eats Core setup is successful'});
});

/* Initialize routes below */

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  
  res.status(statusCode).json({message: err.message});
  return;
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
