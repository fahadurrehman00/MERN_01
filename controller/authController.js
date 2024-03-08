// const joi = require("joi")
const {factorial}= require("../services/authServices")
// const factorialSchema  = joi.object().keys({
//     factorialnumber : joi.number().required.min(1)
// });

module.exports = {
    factorial: async (req, res)=>{
        try{
            // const validatefactorial = await factorialSchema.validateAsync(req.body)
            const factorialResponse = factorial(req.body)
            if (factorialResponse.error){
                return res.send({
                    error: factorialResponse.error,
                });
            }
            return res.send({
                factorial:factorialResponse,
            })

        }catch(error){
            return res.send({
                error :error.message,
            });
        }
    }
}