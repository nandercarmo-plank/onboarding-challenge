import cors from "cors";

const corsWhiteList = [ 'https://www.google.com' ];

const corsOption: cors.CorsOptions = {
	origin: (origin, callback) => {
		if (origin == undefined || corsWhiteList.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	optionsSuccessStatus: 200
};

const corsConfig = cors(corsOption);

export {
	corsConfig
};