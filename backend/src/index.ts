import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { StreamChat } from 'stream-chat';
import { apiKey, serverClient } from './serverClient.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors({origin:'*'}));

app.get('/', (req, res) => {
  res.json({
    message: 'AI Assistant Server is running',
    apiKey: apiKey
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});