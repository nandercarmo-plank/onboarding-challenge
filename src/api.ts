import express from 'express';
import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

import { RocketRouter } from './middleware/router/RocketRouter';
import { LaunchRouter } from './middleware/router/LaunchRouter';
import { CrewmanRouter } from './middleware/router/CrewmanRouter';
import { CrewRouter } from './middleware/router/CrewRouter';
import { errorHandler, logHandler } from './middleware/log/Logger';
import { corsConfig } from './middleware/config/CorsConfig';

const api = express();

api.use(logHandler);
api.use(corsConfig);
api.use(bodyParser.json());

api.use('/rocket', RocketRouter);
api.use('/launch', LaunchRouter);
api.use('/crewman', CrewmanRouter);
api.use('/crew', CrewRouter);

api.use(errorHandler);

api.listen(3333);