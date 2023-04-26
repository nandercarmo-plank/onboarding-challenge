import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';
import express from 'express';

dotenvConfig();

import { dataSource } from './database/config/dataSourceConfig';
import { corsConfig } from './middleware/config/corsConfig';
import { errorHandler, logHandler } from './middleware/log/logger';
import { CrewRouter } from './middleware/router/CrewRouter';
import { CrewmanRouter } from './middleware/router/CrewmanRouter';
import { LaunchRouter } from './middleware/router/LaunchRouter';
import { RocketRouter } from './middleware/router/RocketRouter';

dataSource.initialize().then(() => {
	console.log("DB connection done!");
}).catch((err) => console.error(err));

const api = express();

api.use(logHandler);
api.use(corsConfig);
api.use(bodyParser.json());

api.use('/rocket', RocketRouter);
api.use('/launch', LaunchRouter);
api.use('/crewman', CrewmanRouter);
api.use('/crew', CrewRouter);

api.use(errorHandler);

api.listen(process.env.PORT);