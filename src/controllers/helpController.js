const helpDetails = (req,res)=>{
    return res.status(200).send({
        message : "Successfully Hitting the help api ",
        success: true,
        data : {
            contact : "+1xxxxxxxxxxx"
        } 
    })
}
module.exports = {
    helpDetails
}