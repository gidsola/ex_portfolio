
import mongoose from 'mongoose';

export default mongoose.model('about',

  new mongoose.Schema({
    "skills": [String]
  },
    { "collection": 'about' }
  )
);
