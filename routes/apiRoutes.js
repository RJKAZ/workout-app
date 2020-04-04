const express = require('express');
const router = express.Router();
const Workout = require('../models/workout')

router.get('/api/workouts',(req, res) => {
  Workout.find({})
  .then(Workout => {
    res.json(Workout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.put('/api/workouts/:id',(req, res) => {
  Workout.findByIdAndUpdate(
  req.params.id, {
    $push: {exercise: req.body} 
  },
    {
      new: true,
      runValidators: true
    })
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.json(err);
    });
  });
  

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(10)
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.json(err);
      });
  })

  module.exports = router;
