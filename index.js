const api = require('./api');

setInterval(async()=>{
    console.log(await api.teste());
}, process.env.CRAWLER_INTERVAL)