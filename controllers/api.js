const data=require("../resources/petData");
exports.api = async(req,res)=>{
    res.send(data);
}