

import mongoose from 'mongoose';


export default mongoose.model('contacts',

  new mongoose.Schema(
    {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      message: { type: String, required: true }
    },
    { timestamps: { createdAt: 'created', updatedAt: 'updated' } },
    { "collection": 'contacts' }
  )
);
