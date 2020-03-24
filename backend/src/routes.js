const express = require('express');

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileContoller = require('./Controllers/ProfileController');
const SessionContoller = require('./Controllers/SessionController');


const routes = express.Router();

routes.post('/session', SessionContoller.create)

routes.get('/profile', ProfileContoller.index)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;