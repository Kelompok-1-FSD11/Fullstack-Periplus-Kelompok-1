import express from 'express';
import dotenv from 'dotenv';
import publicRoute from './routes/publicRoute.js';
import importModels from './models/index.js';

dotenv.config();

const startServer = async () => {
	try {
		const db = await importModels();

		const app = express();

		app.use(express.json());

		app.use('/api', publicRoute);

		const PORT = process.env.PORT || 5000;

		db.sequelize.sync().then(() => {
			app.listen(PORT, () => {
				console.log(`Server is running on port ${PORT}`);
			});
		});
	} catch (error) {
		console.error('Unable to start the server:', error);
	}
};

startServer();
