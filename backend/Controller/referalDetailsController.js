import prisma from '../DB/db.config.js'

export const createReferalDetails = async (req, resp) =>{
    const {referFrom, referTo, referralCode} = req.body;
    const newReferalDetails = await prisma.ReferalDetails.create({
        data:{
            referFrom: referFrom,
            referTo: referTo,
            code: referralCode
        }
    })
    return resp.json({status:200, data:newReferalDetails, msg:"Referal detail created"})
}

export const getAllReferalDetails = async (req, resp)=>{
    const referalDetails = await prisma.ReferalDetails.findMany()
    return resp.json({status:200, data:referalDetails, msg:"Success"})
}
