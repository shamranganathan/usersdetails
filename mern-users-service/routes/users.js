const router = require('express').Router();
let User = require('../models/user.model');

// Get all users
router.route('/').get((req, res) => {
    User.find()
        .populate('friends', 'name')
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new user
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const newUser = new User({ name });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get a user by ID
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .populate('friends', 'name')
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a user by ID
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a user by ID
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.friends = req.body.friends;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
