const express = require('express');
const router = express.Router();

const Users = require('../../models/createUserDetails');

// Check for existing User
router.get('/getUserProfile/:id', (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      user? 
      res.json(user) :
      res.json({'error': {
        'code': 404,
        'message': 'User does not exist'
      }})
    })
});

// Create new User
router.post('/postUserProfile', (req, res) => {
    const newUser = new Item({
      _id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,

    })

    newUser
      .save()
      .then(Users => res.json(user));
});

// Update existing User

module.exports = router;