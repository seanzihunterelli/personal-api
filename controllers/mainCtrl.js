const user = require('../user.js');

module.exports = {
  getName: (req, res) => {
    res.status(200).json({ name: user.name });
  },
  getLocation: (req, res) => {
    res.status(200).json({ location: user.location });
  },
  getOccupations: (req, res) => {
    res.status(200).json({ occupations: user.occupations });
  },
  getLatestOccupation: (req, res) => {
    res.status(200).json({ latestOccupation: user.occupations.slice(user.occupations.length-1, user.occupations.length) });
  },
  getHobbies: (req, res) => {
    res.status(200).json({ hobbies: user.hobbies });
  },
  getHobbiesType: (req, res) => {
   var filteredHobbies = user.hobbies.filter(function(value){
      if (value.type === req.params.type){
        return value;
      }
    });

    res.status(200).json({ filteredHobbies: filteredHobbies });
  },
  getFamily: (req, res) => {
    res.status(200).json({ family: user.family });
  },
  getFamilyGender: (req, res) => {
    var filteredFamily = user.family.filter(function(value){
       if (value.gender === req.params.gender){
         return value;
       }
     });

     res.status(200).json({ filteredFamily: filteredFamily });
   },
  getRestaurants: (req, res) => {
    res.status(200).json({ restaurants: user.restaurants });
  },
  getRestaurantsName: (req, res) => {
    var filteredRestaurants = user.restaurants.filter(function(value){
       if (value.name === req.params.name){
         return value;
       }
     });

     res.status(200).json({ filteredRestaurants: filteredRestaurants });
   }
};
