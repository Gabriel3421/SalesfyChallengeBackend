import express from 'express';

import TranslateController from './controllers/TranslateController'

const routes = express.Router();

routes.get('/', TranslateController.index);

export default routes;
