import express from "express";
import cors from "cors";
import publicRoute from './routes/publicRoute.js';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', publicRoute);
app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server up and running on port ${PORT}`));