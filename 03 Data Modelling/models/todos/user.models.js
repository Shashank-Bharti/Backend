import { Timestamp } from 'bson'
import mongoose, { mongo } from 'mongoose'

const userSchema = new mongoose.Schema(
//  {
//  username: String,
//  email: String,
//  isActive: Boolean,
// }
{
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required:[true,"Password Required"],
  }
},
{timestamps:true}
)
  

export const User = mongoose.model('User',userSchema)