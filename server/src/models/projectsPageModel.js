
import mongoose from 'mongoose';

const repoSchema = new mongoose.Schema({
    url: String
});

export default mongoose.model('projects',

    new mongoose.Schema({
        "repos": [
            { "url": String }
        ]
    }, { "collection": 'projects' }
    )
);

