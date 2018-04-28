import { Users } from "../../models/user.model";
import * as bcrypt from bcrypt; 



let saveUser = (async(req,res)=>{
try{
if(req.body.password && req.body.mobileNumber){
//   await bcrypt.hash(request.body.password,10,(err,hash)=>{
//    let user = new Users({
//         name           : req.body.users.name,
//         mobileNumber   : req.body.users.mobileNumber,
//         email          : req.body.users.email,
//         password       : hash,
        
//     });
//    })
function payload(statusCode, message, data) {
    var responseObject = {
        status: {
            code: statusCode,
            message: message
        },
        data: data
    }

    return responseObject;
}



    let user = await Users.findOne({
         $and : 
        [
            {
                mobileNumber : req.body.users.mobileNumber   
            },
            {
                name : req.body.users.name
            }
          
          ]  }).then((user)=>{

  bcrypt.compare(request.body.password,hash,function(err,data){
if(data){

    res.status( 200 ).send(payload(200, "Success", data));
}
else{
    res.status(400).send(payload(400,'notfound in the data base',null))
}

  })
})

}
else if (req.query.type == "signup"){
    if(req.body.password && req.body.mobileNumber){
 await bcrypt.hash(request.body.password,10,(err,hash)=>{
   let user = new Users({
    name           : req.body.users.name,
    mobileNumber   : req.body.users.mobileNumber,
    email          : req.body.users.email,
    password       : hash,
                
}).then((user)=>{

if(!user){
    res.status(200).send(payload(200,'something went wrong',null))
}
else {
    res.send((400).send(payload(200,'added successfully',user)))
}


})








})




}
}}catch(err){
    res.send(304,"error caught",err)
}})
