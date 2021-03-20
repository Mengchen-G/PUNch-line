import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import appRountes from './routes/app.js';

const app = express();

app.use('/', appRountes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://mengchen:Secretcomma1212%2CMo@cluster0.jam26.mongodb.net/joke-database?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
