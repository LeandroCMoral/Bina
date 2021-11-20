const axios = require("axios");
const querystring = require("querystring");

async function publicCall(path, data, method = 'GET'){
    try{
        const qs = data ? `?${querystring.stringify(data)}`: '';
        const result = await axios({
            method,
            url:`https://testnet.binance.vision/api${path}${qs}`,
            //url:`${process.env.API_URL}${path}`,
        })
    }
    catch(err){
        console.log(err);
    }

}

async function teste(){
    return publicCall('/v3/time');
}

module.exports = { teste }