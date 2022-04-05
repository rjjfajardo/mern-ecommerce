import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},{
        timestamps: true    
    
})


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

//This will run the function before creating the usr to the DB
//hash the password before putting to the database

userSchema.pre('save', async function (next){
 
    if(!this.isModified('password')) {// checks if the password was not modified
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User', userSchema);

export default User;