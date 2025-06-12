import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Un tour doit avoir un nom'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'Un tour doit avoir une durée'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Un tour doit avoir une taille de groupe maximale'],
  },
  difficulty: {
    type: String,
    required: [true, 'Un tour doit avoir un niveau de difficulté'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Un tour doit avoir un prix'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'Un tour doit avoir un résumé'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'Un tour doit avoir une image de couverture'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

export { Tour };
