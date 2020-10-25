
const axios = require('axios');
const url = "https://hybel.no/bolig/239622/rom-i-leilighet-husebygrenda-26-oslo/";



async function fetchData(url){
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}



module.exports = fetchData