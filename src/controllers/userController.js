const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.status(201).send({ msg: savedData });
}
catch(err){
  console.log("this is the error for create user:",err.message)
  res.status(500).send({msg:"add ur data",err:message})
}
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.status(200).setHeader("x-auth-token", token);
  res.status(201).send({ status: true, data: token });
}
catch(err){
  console.log("this is server error")
  res.status(500).send({msg:"missing anything for login",err:message})
}
};

const getUserData = async function (req, res) {
  try{

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if(!userDetails)
    return res.status(403).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch(err){
    console.log("dint try to acess other's account")
   res.status(500).send({ msg:"check ur token",err:messages})
  }
};

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
try{
let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(403).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.status(200).send({ status: updatedUser, data: updatedUser })
}
catch(err){
  console.log("try to input currectly")
  res.status(500).send({msg:"anything is missing in ue upadetedata",err:messages})
}
};
const deleteUser = async function (req,res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(403).send("No such user exists");
  }

let userData = req.body;
let deletedUser = await userModel.findOneAndUpdate({_id: userId}, userData,{new:true});
res.status(200).send({status:deletedUser, data: deletedUser});
}
catch(err){
  console.log("u can't able to delete")
  res.status(500).send({msg:"u dont try to delete",err:message})
}
};
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
