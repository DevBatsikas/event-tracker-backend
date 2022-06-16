import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

// SETUP
const app = express();
app.use(cors());
app.use(json());

// ROUTERS
import notesRouter from '#routes/notes.routes.mjs';

app.use('/api/notes', notesRouter);

app.listen(process.env.PORT || 3001);
