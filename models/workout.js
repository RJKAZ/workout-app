const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration"
        },
        weight: {
          type: Number,
          required: "Enter a weight"
        },
        reps: {
          type: Number,
          required: "Enter the amount of reps"
        },
        sets: {
          type: Number,
          required: "Enter the amount of sets"
        },
        distance: {
          type: Number,
          required: "Enter a distance"
        }
      }]
  });

  const Workout = mongoose.model("Workout", workoutSchema);

  module.exports = Workout;