const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');

app.listen(8181);
app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.route('/name').get(mainCtrl.getName);
app.route('/location').get(mainCtrl.getLocation);
app.route('/occupations').get(mainCtrl.getOccupations);
app.route('/occupations/latest').get(mainCtrl.getLatestOccupation);
app.route('/hobbies').get(mainCtrl.getHobbies);
app.route('/hobbies/:type').get(mainCtrl.getHobbiesType);
app.route('/family').get(mainCtrl.getFamily);
app.route('/family/:gender').get(mainCtrl.getFamilyGender);
app.route('/restaurants').get(mainCtrl.getRestaurants);
app.route('/restaurants/:name').get(mainCtrl.getRestaurantsName);
