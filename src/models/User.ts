import mongoose from "mongoose";
import bycrpt from "bcrypt";

const UserSchema = new mongoose.Schema({
    name: {
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
});

UserSchema.pre('save' , async function(next){
      if (!this.isModified('password')) return next();
      const salt = await bycrpt.genSalt(10);
      this.password = await bycrpt.hash(this.password,salt);
      next();
      });

export const User = mongoose.model('User',UserSchema);