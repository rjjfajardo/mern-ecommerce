import e from "express";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import  generateToken from '../utils/generateToken.js'

// @desc    Auth user & get 
// @route   POST/api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    const user = await User.findOne({ email })
    
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
});


// @desc    Register new user
// @route   POST/api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
    const { email, password, name } = req.body
    
    const userExist = await User.findOne({ email })
    
    if(userExist){
        res.status(400)
        throw new Error('Email has already been taken')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })

    }else{
        res.status(400)
        throw new Error('Invalid User Data')
    }
});

// @desc    update user profile 
// @route  PUT /api/users/profile
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id);
    console.log(user)
   if(user) {
       res.json({
           _id: user._id,
           name: user.name,
           email: user.email,
           isAdmin: user.isAdmin,
       })
   }else{
       res.status(404)
       throw new Error('User not found');
   }
});


 


const updateUser = asyncHandler(async (req, res) => {
    const { email, password, name } = req.body
    
    const user = await User.findById(req.user._id)
    
    if(user){
       user.name =  req.body.name || user.name,
       user.email = req.body.email || user.email

       if(req.body.password){
           user.password = req.body.password
       }
        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updateUser._id)
        })
        
    }else{
        res.status(404)
        throw new Error('Update Profile Failed')
    }   
});


 /* ADMIN FUNCTIONALITIES */




// @desc    Get all users  
// @route  GET /api/users
// @access  Private/Admin


const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users)
 });

 // @desc    delete user  
// @route  DELETE /api/users/:id
// @access  Private/Admin


 const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
   
    if(user){
        await user.remove()
        res.json({ message: 'user removed'})
    }else{
       
        throw new Error('User not found')
    }
 });

// @desc    Get user by id  
// @route  GET /api/users
// @access  Private/Admin


const getUserByID = asyncHandler(async (req, res) => {
    const users = await User.findById(req.params.id).select('-password');
    
    if(user){
        res.json(user)
    }else{
        res.status(404)
        throw new Error('User not Found');
    }
 });


// @desc    Get user by id  
// @route  GET /api/users
// @access  Private/Admin

 const updateUsersProfile = asyncHandler(async (req, res) => {

    
    const user = await User.findById(req.params.id)
    
    if(user){
       user.name =  req.body.name || user.name,
       user.email = req.body.email || user.email

      user.isAdmin = req.body.isAdmin 
       
        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            
        })
        
    }else{
        res.status(404)
        throw new Error('Update Profile Failed')
    }   
});


export {
    authUser,
    getUserProfile,
    registerUser,
    updateUser,
    getUsers,
    deleteUser,
    getUserByID,
    updateUsersProfile
}

