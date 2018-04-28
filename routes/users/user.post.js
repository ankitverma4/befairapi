import { Users } from "../../models/user.model";
module.exports = {
    saveUser: async function(req, res){
        let newUser = await Users.create(req.body);
        res.send(newUser);
    } 
}