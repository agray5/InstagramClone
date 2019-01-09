const express = require('express');
const router = express.Router();

const Item = require('../../models/createUserDetails');

router.get('/getUserProfile/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(items => res.json(items))
});

router.post('/postUserProfile', (req, res) => {
    const newUser = new Item({
      _id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
    })

    newUser
      .save()
      .then(item => res.json(item));
});

module.exports = router;