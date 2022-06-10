import express from 'express';
import bodyParser from 'body-parser';

import salesRoutes from './routes/sales.routes';
import signupRoutes from './routes/signup.routes';

const app = express();

app.use(bodyParser.json());

app.use('/sales', salesRoutes);

app.use('/signup', signupRoutes);

app.listen(3333, () => console.log("Running on port 3333"));
