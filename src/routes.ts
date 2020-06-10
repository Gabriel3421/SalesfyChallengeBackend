import express from 'express';

import TranslateController from './controllers/TranslateController'

const routes = express.Router(); 


routes.get('/', TranslateController.index);
// routes.get('/', (req, res) => {
//   return res.json({msg: 'test'})
// });


export default routes;


