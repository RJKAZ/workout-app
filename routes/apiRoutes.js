const router = require('express').Router();
const workout = require('../models/workout');

router.get('/api/workouts',(req, res) => {
  workout.find({})
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
});

router.put('/api/workouts/:id',(req, res) => {
  console.log(req.params.id);
  workout.findByIdAndUpdate(
  req.params.id, {
    $push: {exercise: req.body} 
  },
    {
      new: true,
      runValidators: true
    })
    .then(workout => {
      console.log(workout);
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  router.post('/api/workouts', (req, res) => {
    workout.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });
  

  router.get("/api/workouts/range", (req, res) => {
    workout.find({}).limit(10)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  })

  module.exports = router;
