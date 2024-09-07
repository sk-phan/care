import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        required: true,
        type: String
    },
    passwordHash: {
        type: String,
        required: true,
    },
    authSource: {
        type: String,
        enum: ["self", "google"],
        default: "self"
    } 
})

userSchema.set('toJSON', {
    transform: (_document: mongoose.Document, returnedObject: { [key: string]: any }) => {
        returnedObject.id = returnedObject._id.toString();

        delete returnedObject._id;
        delete returnedObject.__v;

        // the passwordHash should not be revealed
        delete returnedObject.passwordHash;
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;