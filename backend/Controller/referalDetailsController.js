import prisma from '../DB/db.config.js'

export const createReferalDetails = async (req, resp) =>{
    const {referFrom, referTo, code} = req.body;
    const newReferalDetails = await prisma.referalDetails.create({
        data:{
            referFrom: referFrom,
            referTo: referTo,
            code: code
        }
    })
    return resp.json({status:200, data:newReferalDetails, msg:"Referal detail created"})
}

export const getAllReferalDetails = async (req, resp)=>{
    const referalDetails = await prisma.referalDetails.findMany()
    return resp.json({status:200, data:referalDetails, msg:"Success"})
}