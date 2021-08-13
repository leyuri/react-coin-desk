import { green, amber, red, grey } from '@material-ui/core/colors';

// Blockchain
// ICO|Blockchain|Business|Market|Sponsored
// ICO|ETH|USDT|Exchange|Blockchain
// ETH|Exchange|Blockchain|Trading

function categories(data) {
    // console.log("data", data);
    switch (categories) {
        // case categories.indexOf("BTC"): return 1;
        // case categories.indexOf("ETH"): return 1;
        // case categories.indexOf("Blockchain"): return 1;
        // case categories.indexOf("BTC"): return 1;
        case "Blockchain": return 1;
        default: return 0
    }
}

const COLOR = ["#000", grey[500], red[600], amber[600], green[800], grey[900]];
const DESC = [
    "여러개",
    "Blockchain",
]

export default function StoreHelper(store) {
    // console.log("store", store.Data)
    const data = store.Data
    const idx = categories(data);

    return {
        color: COLOR[idx],
        desc: DESC[idx],
    }
}
