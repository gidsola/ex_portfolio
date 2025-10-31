/**
 * week 6 content code
 */


import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
});

userSchema.pre('save', async function (next){
    if(this.isModified('password') || this.isNew){
        this.password = await bcrypt.hash(this.password, 10)  // Hashing
    }
    next();
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}


export default mongoose.model('User', userSchema);