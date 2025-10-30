
import mongoose from 'mongoose';

export default mongoose.model('header',

  new mongoose.Schema({
    "navlinks": [
      [String]
    ]
  },
    { "collection": 'header' }
  )

);