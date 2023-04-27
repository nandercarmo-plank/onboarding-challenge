import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';
import express from 'express';

dotenvConfig();

import { dataSource } from './database/config/dataSourceConfig';
import { CorsConfig } from './middleware/config/CorsConfig';
import { ErrorHandler, LogHandler } from './middleware/log/Logger';
import { CrewRouter } from './middleware/router/CrewRouter';
import { CrewmanRouter } from './middleware/router/CrewmanRouter';
import { LaunchRouter } from './middleware/router/LaunchRouter';
import { RocketRouter } from './middleware/router/RocketRouter';

dataSource.initialize().then(() => {

	console.log(`Database connection done...`);

	const api = express();

	api.use(LogHandler);
	api.use(CorsConfig);
	api.use(bodyParser.json());

	api.use('/rocket', RocketRouter);
	api.use('/launch', LaunchRouter);
	api.use('/crewman', CrewmanRouter);
	api.use('/crew', CrewRouter);
	api.use('/', LaunchRouter);

	api.use(ErrorHandler);

	api.listen(process.env.PORT);

	console.log(`Server running on port ${process.env.PORT}...`);

}).catch((err) => console.error(err));