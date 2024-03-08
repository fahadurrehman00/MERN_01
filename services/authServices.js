module.exports = {
    factorial: (validate)=>{
        try{
            let factorialnum = 1;
            for(let i = 1; i<=validate.factorialnumber; i++){
                factorialnum *=i;
            }
            return factorialnum;

        }catch(error){
            return res.send({
                error: error.message,
            })
        }
    }
}