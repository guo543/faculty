import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/search.js'

const app = express();

app.use( express.static('public') );
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 8000;

app.use('/search', routes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})