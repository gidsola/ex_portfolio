
import mongoose from 'mongoose';


export default mongoose.model('services',

  new mongoose.Schema({
    "offered": [{
      "title": String,
      "description": String,
      "technologies": [String],
      "icon": String
    }],
    "intro": String
  },
    { "collection": 'services' }
  )
);

