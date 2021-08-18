import axios from 'axios';

export function FETCH_NEWS() {

    const newsUrl = `https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&lang=EN&api_key=bc198737140fac593ca1b2e95f1136c55da39b3fcf83ba16aaa4d1d18a32d926`
    const request = axios.get(newsUrl);

    console.log("newss", request);

    return {
        type: "FEATCH_NEWS",
        payload: request
    }
}