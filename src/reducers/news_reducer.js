  
import produce from "immer"
import { FETCH_NEWS } from '../actions';

const baseState = {
    loading: false,
    error: "",
    stores : [
        {
            "Type": 100,
            "Message": "News list successfully returned",
            "Promoted": [],
            "Data": [
                {
                    "id": "27050400",
                    "guid": "https://www.newsbtc.com/?p=469089",
                    "published_on": 1628746551,
                    "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
                    "title": "Escrow Brings New Era of Decentralized Crowdfunding with High Yield Rewards",
                    "url": "https://www.newsbtc.com/sponsored/escrow-brings-new-era-of-decentralized-crowdfunding-with-high-yield-rewards/",
                    "source": "newsbtc",
                    "body": "Crowdfunding has become a revolutionary way for small businesses and new startups to raise funds in order to scale operations and expand their reach. However, most of these businesses fail to attract target funding amounts due to a lack of reach. On the other hand, many fake projects have cropped up to scam people through ICO &#38; crowdfunding sites. This is where Escrow Protocol, a decentralized DAO crowdfunding platform, comes in to change the market and offers a dependable process for both investors as well as businesses raising funds. ICOs were also seen as quite revolutionary at the start, but more than 85% of the projects failed and research suggests it was primarily because all funding was released upfront and then mismanagement by the project or in some cases just vanished. Escrow has a perfect solution for that, instead of giving all the funds to the project at once, the platform releases funds based on milestone completion. This ensures the investors&#8217; money is going into projects that are committed to deliver on their promises and don&#8217;t go bust after raising significant amounts. Escrow protocol provides long-awaited security for new ICOs with an ingenious auto-staking that keeps the money rolling in for today’s intelligent investor The Escrow platform leverages financial security in managing DeFi funds, through providing Smart Contracts with to-be respected agreements for the investment process on multip...",
                    "tags": "Sponsored",
                    "categories": "ICO|Blockchain|Business|Market|Sponsored",
                    "upvotes": "0",
                    "downvotes": "0",
                    "lang": "EN",
                    "source_info": {
                        "name": "NewsBTC",
                        "lang": "EN",
                        "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
                    }
                },
            ],
            "RateLimit": {},
            "HasWarning": false
        }
    ]
};

const reducer = produce((state, action) => {
    switch(action.type) {
        case FETCH_NEWS :
            state.stores = action.payload;
            break;
        default:
            break;
    }
}, baseState);

export default reducer;