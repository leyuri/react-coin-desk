import produce from 'immer'
import {combineReducers, createStore} from "redux";
import NewsReducer from './news_reducer'

// const baseState = {
//     loading: false,
//     error: "",
//     stores : [
//         {
//             "Type": 100,
//             "Message": "News list successfully returned",
//             "Promoted": [],
//             "Data": [
//                 {
//                     "id": "27050400",
//                     "guid": "https://www.newsbtc.com/?p=469089",
//                     "published_on": 1628746551,
//                     "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
//                     "title": "Escrow Brings New Era of Decentralized Crowdfunding with High Yield Rewards",
//                     "url": "https://www.newsbtc.com/sponsored/escrow-brings-new-era-of-decentralized-crowdfunding-with-high-yield-rewards/",
//                     "source": "newsbtc",
//                     "body": "Crowdfunding has become a revolutionary way for small businesses and new startups to raise funds in order to scale operations and expand their reach. However, most of these businesses fail to attract target funding amounts due to a lack of reach. On the other hand, many fake projects have cropped up to scam people through ICO &#38; crowdfunding sites. This is where Escrow Protocol, a decentralized DAO crowdfunding platform, comes in to change the market and offers a dependable process for both investors as well as businesses raising funds. ICOs were also seen as quite revolutionary at the start, but more than 85% of the projects failed and research suggests it was primarily because all funding was released upfront and then mismanagement by the project or in some cases just vanished. Escrow has a perfect solution for that, instead of giving all the funds to the project at once, the platform releases funds based on milestone completion. This ensures the investors&#8217; money is going into projects that are committed to deliver on their promises and don&#8217;t go bust after raising significant amounts. Escrow protocol provides long-awaited security for new ICOs with an ingenious auto-staking that keeps the money rolling in for today’s intelligent investor The Escrow platform leverages financial security in managing DeFi funds, through providing Smart Contracts with to-be respected agreements for the investment process on multip...",
//                     "tags": "Sponsored",
//                     "categories": "ICO|Blockchain|Business|Market|Sponsored",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "NewsBTC",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
//                     }
//                 },
//                 {
//                     "id": "27050397",
//                     "guid": "https://cointelegraph.com/news/sushiswap-cto-reveals-why-the-project-isn-t-scaling-on-optimism-anytime-soon",
//                     "published_on": 1628745980,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png",
//                     "title": "SushiSwap CTO reveals why the project isn't scaling on Optimism anytime soon",
//                     "url": "https://cointelegraph.com/news/sushiswap-cto-reveals-why-the-project-isn-t-scaling-on-optimism-anytime-soon",
//                     "source": "cointelegraph",
//                     "body": "Joseph Delong feels that rival DEX Uniswap had preferential treatment from the L2 solutions provider. ",
//                     "tags": "SushiSwap|DEX|DeFi|layer two|Uniswap|Optimistic Ethereum|rollups",
//                     "categories": "Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinTelegraph",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cointelegraph.png"
//                     }
//                 },
//                 {
//                     "id": "27050378",
//                     "guid": "https://news.bitcoin.com/?p=479950",
//                     "published_on": 1628739033,
//                     "imageurl": "https://images.cryptocompare.com/news/default/bitcoincom.png",
//                     "title": "Poly Network Defi Hacker Returns a Large Fraction of Tokens, Chainalysis Evaluates Hacker’s Onchain Movements",
//                     "url": "https://news.bitcoin.com/poly-network-defi-hacker-returns-a-large-fraction-of-tokens-chainalysis-evaluates-hackers-onchain-movements/",
//                     "source": "bitcoin.com",
//                     "body": "On August 11, the blockchain intelligence firm Chainalysis published its findings on the recent Poly Network hack which saw the loss of approximately $611 million crypto tokens. The assessment from Chainalysis backed up the claims made by the security company called Slowmist that shows the hacker left a fingerprint on the relatively unknown exchange Hoo.com. [&#8230;]",
//                     "tags": "News|$260 Million|$4.7 Million|$600 Million|Chainalysis|Chainalysis findings|Defi Project|ETH|Hacker|Hacker Troll|Hoo.com|multisig|neo|Poly Network|Poly Network Hack|Poly Network hacker|Poly Network Team|Polygon|Slowmist|tether frozen|USDC|USDT|Wallet|White Hat Hacker",
//                     "categories": "ICO|ETH|USDT|Exchange|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Bitcoin.com",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/bitcoincom.png"
//                     }
//                 },
//                 {
//                     "id": "27050371",
//                     "guid": "https://www.cryptopolitan.com/?p=105952",
//                     "published_on": 1628737200,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptopolitan.png",
//                     "title": "Why Horizon Protocol chose BSC as the perfect NFT platform",
//                     "url": "https://www.cryptopolitan.com/why-horizon-protocol-chose-bsc-as-the-perfect-nft-platform/",
//                     "source": "cryptopolitan",
//                     "body": "Horizon Protocol was built on top of the Binance Smart Chain (BSC) as a way of benefiting from the blockchain’s scalability, cross-chain functionality and its ability to ease network congestion. As a result, the protocol would work effortlessly in deploying speedy and less costly transactions across synthetic cryptocurrency assets. Horizon Protocol supports the trading of [&#8230;]",
//                     "tags": "Industry News",
//                     "categories": "Blockchain|Exchange|Trading",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Cryptopolitan",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptopolitan.png"
//                     }
//                 },
//                 {
//                     "id": "27050022",
//                     "guid": "https://decrypt.co/?p=78329",
//                     "published_on": 1628721986,
//                     "imageurl": "https://images.cryptocompare.com/news/default/decrypt.png",
//                     "title": "‘Sorry for the Lie’: Ethereum NFT Fraud Fame Lady Squad Comes Clean",
//                     "url": "https://decrypt.co/78329/ethereum-nft-fraud-fame-lady-squad",
//                     "source": "decrypt",
//                     "body": "Developers behind the popular project lied about being women. Now they’ve given up control following an uproar amongst collectors.",
//                     "tags": "Technology|ETH",
//                     "categories": "ETH|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Decrypt",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/decrypt.png"
//                     }
//                 },
//                 {
//                     "id": "27049970",
//                     "guid": "https://coingape.com/?p=89186",
//                     "published_on": 1628720177,
//                     "imageurl": "https://images.cryptocompare.com/news/default/coingape.png",
//                     "title": "Is Ethereum’s Gas Fee Improved Now that the London Hardfork is Live?",
//                     "url": "https://coingape.com/89186-2/",
//                     "source": "coingape",
//                     "body": "The cryptocurrency ecosystem was agog when the Ethereum Improvement Protocol (EIP) 1559 went live last week. The EIP 1559 upgrade, also called the London Hardfork introduced a few improvements into the Ethereum blockchain which prior was notably plagued with congestion and high network fees. Prior to the launch of the hardfork, users engage in a The post Is Ethereum’s Gas Fee Improved Now that the London Hardfork is Live? appeared first on Coingape.",
//                     "tags": "Ethereum 2.0|Ethereum News|EIP 1559|ethereum blockchain|Gas Fee",
//                     "categories": "ETH|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinGape",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/coingape.png"
//                     }
//                 },
//                 {
//                     "id": "27049969",
//                     "guid": "https://cryptoslate.com/?p=196614",
//                     "published_on": 1628719255,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptoslate.png",
//                     "title": "Transferring assets between Ethereum (ETH) and Polygon? This will help",
//                     "url": "https://cryptoslate.com/transferring-assets-between-ethereum-eth-and-polygon-this-will-help/",
//                     "source": "cryptoslate",
//                     "body": "Biconomy, a multichain relayer network building infrastructure to simplify the Ethereum and Web 3 experience, announced today the launch of its Hyphen mainnet, as per a release shared with CryptoSlate. The post Transferring assets between Ethereum (ETH) and Polygon? This will help appeared first on CryptoSlate.",
//                     "tags": "DeFi|ETH 2.0|Technology|ETH|ETHUSD|matic|MATICUSD",
//                     "categories": "ETH|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoSlate",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptoslate.png"
//                     }
//                 },
//                 {
//                     "id": "27049773",
//                     "guid": "https://decrypt.co/?p=78313",
//                     "published_on": 1628711060,
//                     "imageurl": "https://images.cryptocompare.com/news/default/decrypt.png",
//                     "title": "Bitcoin Ransomware Hackers Hit Accenture, IT Consulting Firm Brushes It Off",
//                     "url": "https://decrypt.co/78313/bitcoin-ransomware-hackers-hit-accenture-it-consulting-firm-brushes-it-off",
//                     "source": "decrypt",
//                     "body": "Lockbit started publishing stolen files after Accenture said it had \"contained the matter.\"",
//                     "tags": "Technology|BTC",
//                     "categories": "BTC|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Decrypt",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/decrypt.png"
//                     }
//                 },
//                 {
//                     "id": "27049624",
//                     "guid": "https://bitcoinist.com/?p=156544",
//                     "published_on": 1628708446,
//                     "imageurl": "https://images.cryptocompare.com/news/default/bitcoinist.png",
//                     "title": "Running With The Big Dogs: Chainalysis To Cover Dogecoin In Its Reports",
//                     "url": "https://bitcoinist.com/running-with-the-big-dogs-chainalysis-to-cover-dogecoin-in-its-reports/?utm_source=rss&utm_medium=rss&utm_campaign=running-with-the-big-dogs-chainalysis-to-cover-dogecoin-in-its-reports",
//                     "source": "bitcoinist",
//                     "body": "Blockchain intelligence company Chainalysis has announced that going forward its reports will also include Dogecoin coverage. Chainalysis Now Covers The Dogecoin Network As per an announcement on Chainalysis&#8217; website, the leading blockchain intelligence company now includes Dogecoin (DOGE) in its reports. Lately, the coin has become very popular, and it now accounts for the fourth [&#8230;]",
//                     "tags": "Bitcoin|Chainalysis|Doge|dogecoin|dogeusd",
//                     "categories": "Blockchain|BTC",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Bitcoinist",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/bitcoinist.png"
//                     }
//                 },
//                 {
//                     "id": "27049628",
//                     "guid": "https://dailyhodl.com/?p=157758",
//                     "published_on": 1628707304,
//                     "imageurl": "https://images.cryptocompare.com/news/default/dailyhodl.png",
//                     "title": "Concordium and Swvl Announce Partnership for Blockchain-Based Mass Transit Systems",
//                     "url": "https://dailyhodl.com/2021/08/11/concordium-and-swvl-announce-partnership-for-blockchain-based-mass-transit-systems/",
//                     "source": "dailyhodl",
//                     "body": "August 11, 2021 – Zug, Switzerland Concordium, a leading blockchain technologies company, and Swvl, Inc. (“Swvl”), a Dubai-based provider of mass transit and shared mobility solutions, today announced a strategic partnership to – for the first time – use blockchain technologies to develop transformative next-generation mass transit systems. Swvl is a global tech start-up based in Dubai, with [&#8230;]The post Concordium and Swvl Announce Partnership for Blockchain-Based Mass Transit Systems appeared first on The Daily Hodl.",
//                     "tags": "Crypto Livewire",
//                     "categories": "Blockchain|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "The Daily Hodl",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/dailyhodl.png"
//                     }
//                 },
//                 {
//                     "id": "27049604",
//                     "guid": "https://blockworks.co/?p=6425",
//                     "published_on": 1628707000,
//                     "imageurl": "https://images.cryptocompare.com/news/default/blockworks.png",
//                     "title": "Ether Burns Hit $100 Million Post EIP-1559 Activation",
//                     "url": "https://blockworks.co/ether-burns-hit-100-million-post-eip-1559-activation/",
//                     "source": "blockworks",
//                     "body": "Ether briefly enters a deflationary cycle as more blocks were burned than issued during one cycle.The post Ether Burns Hit $100 Million Post EIP-1559 Activation appeared first on Blockworks.",
//                     "tags": "DeFi|Markets|blockchain|EIP-1559|ether|Ethereum|hard fork|London",
//                     "categories": "ETH|Market|Blockchain",
//                     "upvotes": "1",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Blockworks",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/blockworks.png"
//                     }
//                 },
//                 {
//                     "id": "27049605",
//                     "guid": "https://news.bitcoin.com/?p=479797",
//                     "published_on": 1628706652,
//                     "imageurl": "https://images.cryptocompare.com/news/default/bitcoincom.png",
//                     "title": "Will the Real Polygon Please Stand Up — Spammers Wrongly Post Coin Drops on Video Game-Related Feed",
//                     "url": "https://news.bitcoin.com/will-the-real-polygon-please-stand-up-spammers-wrongly-post-coin-drops-on-video-game-related-feed/",
//                     "source": "bitcoin.com",
//                     "body": "In a strange twist of fate, two companies named Polygon are the source of a storm of confusion on Twitter as a video game community gets a unique introduction to Polygon&#8217;s blockchain technology. Crypto Scammers Hit Game-Related Feed Polygon, the rebranded layer 2 blockchain solution (previously Matic Network), has been mixed up with another identically [&#8230;]",
//                     "tags": "News|Polygon|Scam|scambot|Spam Attack|Twitter storm|video game",
//                     "categories": "Blockchain|Technology",
//                     "upvotes": "1",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Bitcoin.com",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/bitcoincom.png"
//                     }
//                 },
//                 {
//                     "id": "27049585",
//                     "guid": "https://www.cryptopolitan.com/?p=106361",
//                     "published_on": 1628705280,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptopolitan.png",
//                     "title": "Thailand-Europe payment system to be enhanced by Stellar blockchain remittance corridor",
//                     "url": "https://www.cryptopolitan.com/stellar-blockchain-host-remittance-payment/",
//                     "source": "cryptopolitan",
//                     "body": "TL;DR Breakdown Stellar blockchain continues to headline mainstream media as it gets ready to enhance cross-border payment systems. The Thailand-Europe remittance corridor that will be hosted on the Stellar blockchain seeks to provide ease in the transfer of funds. Velo Labs has joined forces with two monetary firms to develop and host a remittance corridor [&#8230;]",
//                     "tags": "Altcoin News|Bitcoin Industry",
//                     "categories": "Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Cryptopolitan",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptopolitan.png"
//                     }
//                 },
//                 {
//                     "id": "27049579",
//                     "guid": "https://cointelegraph.com/news/broker-licensing-for-us-blockchain-developers-threatens-jobs-and-diversity",
//                     "published_on": 1628705220,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png",
//                     "title": "Broker licensing for US blockchain developers threatens jobs and diversity",
//                     "url": "https://cointelegraph.com/news/broker-licensing-for-us-blockchain-developers-threatens-jobs-and-diversity",
//                     "source": "cointelegraph",
//                     "body": "Lower socio-economic groups will be excluded from the blockchain industry if United States lawmakers approve the infrastructure bill.",
//                     "tags": "",
//                     "categories": "Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinTelegraph",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cointelegraph.png"
//                     }
//                 },
//                 {
//                     "id": "27049488",
//                     "guid": "https://www.newsbtc.com/?p=469053",
//                     "published_on": 1628704317,
//                     "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
//                     "title": "Q&A With Poly Hacker, Hero Or Villain Behind Biggest DeFi In History?",
//                     "url": "https://www.newsbtc.com/news/defi/poly-hacker-hero-or-villain-behind-defi/",
//                     "source": "newsbtc",
//                     "body": "The crypto industry was taken by storm when Poly Network, an interoperable cross-chain platform, revealed that they were attacked. The hacker pulled what turned out to be one of the biggest thefts in DeFi history, at least, that it has been called by the mainstream media. The attacker managed to transfer funds from several blockchains connected by a blockchain agnostic trading pool, O3 Swap. Created by Poly Network and O3 Labs, the platform allows users to interact with Ethereum, Binance Smart Chain (BSC), Polygon, and others. Using an exploit, the hacker took control of $273 million on Ethereum, $253 million on BSC, and $85 million on Polygon. In total, the attacker took over $600 million. However, the Poly Network team reached out to establish a communication channel. The message began with a “Dear Hacker” and appeals to the entity’s consciousness and the well-being of the community. The message worked, as the hacker started to return the stolen funds. pic.twitter.com/Yzw4oDenjC &#8212; Poly Network (@PolyNetwork2) August 10, 2021 Data provided by Poly Network claims that they have received around $4 million from the addresses used by the bad actor. In reply, the team told the hacker that things “are moving to the right direction”. So far, we have received a total value of $4,772,297.675 assets returned by the hacker. ETH address: $2,654,946.051BSC address: $1,107,870.815Polygon address: $1,009,480.809 pic.twitter.com/bPFAQk...",
//                     "tags": "DeFi|POLY",
//                     "categories": "ETH|Exchange|Blockchain|Trading",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "NewsBTC",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
//                     }
//                 },
//                 {
//                     "id": "27049484",
//                     "guid": "https://zycrypto.com/?p=54941",
//                     "published_on": 1628703914,
//                     "imageurl": "https://images.cryptocompare.com/news/default/zycrypto.png",
//                     "title": "Ripple Continues Its Asia-Pacific Expansion Via New Partnership With One Of South Korea’s Largest Remittance Firms",
//                     "url": "https://zycrypto.com/ripple-continues-its-asia-pacific-expansion-via-new-partnership-with-one-of-south-koreas-largest-remittance-firms/",
//                     "source": "zycrypto",
//                     "body": "Blockchain payments firm Ripple will further expand its operations in the Asia-Pacific region after entering into a strategic partnership with Global Money Express Co. Ltd (GME Remittance), one of South Korea’s leading money transfer giants. GME Remittance Joins RippleNet According to a blog post on August 10, GME Remittance is now a RippleNet customer, joining [&#8230;]",
//                     "tags": "Cryptocurrency|News|Cryptocurrency News|Ripple|XRP News|XRPUSD|XRPUSDT",
//                     "categories": "XRP|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "ZyCrypto",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/zycrypto.png"
//                     }
//                 },
//                 {
//                     "id": "27049461",
//                     "guid": "https://bitcoinist.com/?p=156573",
//                     "published_on": 1628702472,
//                     "imageurl": "https://images.cryptocompare.com/news/default/bitcoinist.png",
//                     "title": "Poly Network Hacker Returns Stolen Funds After Requesting A Multisig Wallet",
//                     "url": "https://bitcoinist.com/poly-network-hacker-returns-stolen-funds-after-requesting-a-multisig-wallet/?utm_source=rss&utm_medium=rss&utm_campaign=poly-network-hacker-returns-stolen-funds-after-requesting-a-multisig-wallet",
//                     "source": "bitcoinist",
//                     "body": "The Poly Network hacker pledges a payback after the huge fraudulent withdrawal of $600 million of a cross-chain project. Update: PolyNetwork hackers have returned $253 million on the BSC chain. pic.twitter.com/jO0SiWDtyP &#8212; Wu Blockchain (@WuBlockchain) August 11, 2021 The hacking of crypto funds occurs across three chains of the Ploy Network. Notably, this series of [&#8230;]",
//                     "tags": "DeFi|Cryptocurrency|Ethereum|hacking|Poly Network|renBTC|twitter|Wrapped Bitcoin",
//                     "categories": "ETH|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Bitcoinist",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/bitcoinist.png"
//                     }
//                 },
//                 {
//                     "id": "27049462",
//                     "guid": "https://bitcoinist.com/?p=156578",
//                     "published_on": 1628702256,
//                     "imageurl": "https://images.cryptocompare.com/news/default/bitcoinist.png",
//                     "title": "FUN Token Advances Its Vision of Decentralizing Gaming with New Token on Polygon",
//                     "url": "https://bitcoinist.com/fun-token-advances-its-vision-of-decentralizing-gaming-with-new-token-on-polygon/?utm_source=rss&utm_medium=rss&utm_campaign=fun-token-advances-its-vision-of-decentralizing-gaming-with-new-token-on-polygon",
//                     "source": "bitcoinist",
//                     "body": "FUNToken today announced that they have created a new token, XFUN, to further increase the speed and transparency in iGaming while significantly decreasing the cost of transactions. XFUN is a new layer two token on Polygon, benefitting from the significantly increased performance and lower latency on this blockchain system. XFUN is minted through a process [&#8230;]",
//                     "tags": "Industry",
//                     "categories": "ICO|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Bitcoinist",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/bitcoinist.png"
//                     }
//                 },
//                 {
//                     "id": "27049448",
//                     "guid": "https://www.newsbtc.com/?p=469061",
//                     "published_on": 1628701531,
//                     "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
//                     "title": "FUN Token Set to Launch XFUN Token on the Polygon Network",
//                     "url": "https://www.newsbtc.com/news/company/fun-token-set-to-launch-xfun-token-on-the-polygon-network/",
//                     "source": "newsbtc",
//                     "body": "FUNToken today announced that they have created a new token, XFUN, to further increase the speed and transparency in iGaming while significantly decreasing the cost of transactions. XFUN is a new layer two token on Polygon, benefitting from the significantly increased performance and lower latency on this blockchain system. XFUN is minted through a process whereby FUN tokens are escrowed from Ethereum Main-net on a 1:1 basis and removed from trading circulation. The process is reversible, with gas fees for movement back to main-net charged to the token-holder. XFUN will not be listed on exchanges and available only through the XFUN Wallet. FUNToken will release a non-custodial wallet for XFUN that will incorporate a number of key features: Ability to hold both FUN and XFUN tokens Integration with both Ethereum main-net and Polygon XFUN Bridge which lets wallets swap FUN for XFUN and vice versa Integrated FIAT to FUN/XFUN opportunities using 3rd party processors Gas-free transactions on XFUN where available Integrated KYC where required by operators “We are truly excited to announce the impending launch of XFUN,” Adriaan Brink, Funtoken CEO, said. “This new layer two token will change the dynamics of FUN and bring us to the next level in our journey.” “In our efforts to effectively unify a decentralised gaming and NFT economy, FUNTokens just fit,” said Shreyansh Singh, Head of Polygon Studios. “We&#8217;re excited about the pro...",
//                     "tags": "Company News",
//                     "categories": "ICO|ETH|Blockchain|Trading|Fiat",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "NewsBTC",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
//                     }
//                 },
//                 {
//                     "id": "27049427",
//                     "guid": "https://cryptoslate.com/?p=196582",
//                     "published_on": 1628701211,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptoslate.png",
//                     "title": "Ren is bringing decentralized stablecoins to Dogecoin (DOGE) and others",
//                     "url": "https://cryptoslate.com/ren-is-bringing-decentralized-stablecoins-to-dogecoin-doge-and-others/",
//                     "source": "cryptoslate",
//                     "body": "RenVM and ICHI today announced a partnership to make decentralized stablecoins available to the Bitcoin, Dogecoin, Zcash and other popular cryptocurrency communities, including Ren. These communities will now be able to mint and govern their own stablecoin for reliable transactions, the team shared in a release with CryptoSlate. The post Ren is bringing decentralized stablecoins to Dogecoin (DOGE) and others appeared first on CryptoSlate.",
//                     "tags": "Stablecoins|Technology|Dogecoin|DOGEUSD",
//                     "categories": "BTC|ZEC|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoSlate",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptoslate.png"
//                     }
//                 },
//                 {
//                     "id": "27049423",
//                     "guid": "https://www.newsbtc.com/?p=469028",
//                     "published_on": 1628701209,
//                     "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
//                     "title": "Cardano (ADA) Records 13% Price Gains In 24 Hours, Is $2.20 Possible Again?",
//                     "url": "https://www.newsbtc.com/analysis/ada/cardano-2-20-possible-again/",
//                     "source": "newsbtc",
//                     "body": "Cardano&#8217;s (ADA) price has made a splash on the charts this week. The asset’s success lately can be attributed to the growing interest in the upgrade that would see smart contracts be a reality on the blockchain. Cardano’s (ADA) price has also followed the run-up that the market has experienced lately. Sentiments across the crypto market continue to skew towards buy and Cardano (ADA) is not getting left out of the bull rally. The asset’s price had been struggling lately as momentum had slowed down. But the successful Alonzo White Hard Fork had brought some much-needed faith back into the asset. Prices have been unpredictable for a while. A small uptrend in the price put ADA in the $1.5 price range. The movement continued to remain low following this. Related Reading &#124; Why A Shocking Altcoin Season Could Be On The Horizon Furthermore, this was a welcome change from the $1.05 price point that the digital asset price had hit towards the end of July. This weekend showed small recoveries in the price of ADA. But the real movement has taken place in the past 24 hours. Putting ADA’s price at a point it has not seen in over two months. Cardano (ADA) Gets Listed In Japan Cardano (ADA) recently received approval to be listed in Japan early this month. The approval is considered to be one of the hardest listing approvals to get in the crypto market. Opening up the Cardano (ADA) market to over 100 million people who were previou...",
//                     "tags": "ADA|ADA price|adausd|ADAUSDT|Cardano",
//                     "categories": "ADA|Trading|Market|Asia|Blockchain",
//                     "upvotes": "1",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "NewsBTC",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
//                     }
//                 },
//                 {
//                     "id": "27049328",
//                     "guid": "https://cryptonews.com/news/prepare-for-the-freshest-development-in-the-crypto-world-wit-11404.htm",
//                     "published_on": 1628700189,
//                     "imageurl": "https://images.cryptocompare.com/news/cryptonews/9xyx458x910.jpeg",
//                     "title": "Prepare For The Freshest Development in The Crypto World With CYCE COIN",
//                     "url": "https://cryptonews.com/news/prepare-for-the-freshest-development-in-the-crypto-world-wit-11404.htm",
//                     "source": "cryptonews",
//                     "body": "Disclaimer: The text below is a press release that was not written by Cryptonews.com. Many projects have been carried out on blockchain platforms thanks to the Ethereum infrastructure. However, the vast majority of them are digital initiatives. The CYCE crypto asset is a new concept meant to revolutionize the crypto industry by acting as a model for physical world investments. The platform has",
//                     "tags": "Press Releases",
//                     "categories": "ETH|Blockchain|Sponsored",
//                     "upvotes": "0",
//                     "downvotes": "1",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "cryptonews",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptonews.png"
//                     }
//                 },
//                 {
//                     "id": "27049326",
//                     "guid": "https://www.theblockcrypto.com/post/114244",
//                     "published_on": 1628699884,
//                     "imageurl": "https://images.cryptocompare.com/news/default/theblock.png",
//                     "title": "The Blockchain Association’s Kristin Smith breaks down what’s next in Washington’s bitcoin policy fight",
//                     "url": "https://www.theblockcrypto.com/post/114244/the-blockchain-associations-kristin-smith-breaks-down-whats-next-in-washingtons-bitcoin-policy-fight?utm_source=cryptocompare&utm_medium=rss",
//                     "source": "theblock",
//                     "body": "Kristin Smith, executive director of the Blockchain Association, talks policymaking and crypto during this episode of The Scoop podcast.The post The Blockchain Association&#8217;s Kristin Smith breaks down what&#8217;s next in Washington&#8217;s bitcoin policy fight appeared first on The Block.",
//                     "tags": "Podcasts|$BTC|bipartisan infrastructure framework|bitcoin|Infrastructure|Washington",
//                     "categories": "BTC|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "TheBlock",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/theblock.png"
//                     }
//                 },
//                 {
//                     "id": "27049312",
//                     "guid": "https://seekingalpha.com/news/3728999-bitcoin-grinds-higher-to-464k-nearing-potential-resistance-at-50k-level?utm_source=cryptocompare.com&utm_medium=referral",
//                     "published_on": 1628698807,
//                     "imageurl": "https://images.cryptocompare.com/news/default/seekingalpha.png",
//                     "title": "Bitcoin grinds higher to $46.4K nearing potential resistance at $50K level",
//                     "url": "https://seekingalpha.com/news/3728999-bitcoin-grinds-higher-to-464k-nearing-potential-resistance-at-50k-level?utm_source=cryptocompare.com&utm_medium=referral",
//                     "source": "seekingalpha",
//                     "body": "Bitcoin (BTC-USD) drifts up to ~$46.4K, facing its next level of resistance at $50K-55K, which could stall the cryptocurrency's recovery due to short-term overbought signals, according to CoinDesk's Damanick Dantes. Still, the largest cryptocurrency by market cap is holding above its 40-week moving average, which reflects renewed upside momentum, he said. Bitcoin will need to make a solid break over $55K \"to fully resolve the selling pressure from May,\" he said. Checking in on bitcoin-related names, Grayscale Bitcoin Trust (OTC:GBTC +2.6%) is firmly in the green, unlike Osprey Bitcoin Trust (OTCPK:OBTC -0.8%). Miners Riot Blockchain (RIOT -0.8%), Bit Digital (BTBT -6.6%), and Marathon Digital (MARA -2.2%) fall, while Bitfarms (BITF +5.6%) rises. MicroStrategy (MSTR -0.9%), which holds bitcoin on its balance sheet, also drops. SA contributor Autonomous Capital Management sees bitcoin's uptrend continuing until $50-$52K, consolidation, then a test of highs at $64K, likely in Q3.",
//                     "tags": "",
//                     "categories": "BTC|Market|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Seeking Alpha",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/seekingalpha.png"
//                     }
//                 },
//                 {
//                     "id": "27049323",
//                     "guid": "https://www.cryptoglobe.com/latest/2021/08/with-more-than-8000-people-gathered-what-did-we-learn-from-2021-world-blockchain-conference/",
//                     "published_on": 1628698800,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptoglobe.png",
//                     "title": "With More Than 8,000 People Gathered, What Did We Learn from 2021 World Blockchain Conference?",
//                     "url": "https://www.cryptoglobe.com/latest/2021/08/with-more-than-8000-people-gathered-what-did-we-learn-from-2021-world-blockchain-conference/",
//                     "source": "cryptoglobe",
//                     "body": "On July 24-25, the 2021 World Blockchain Conference·Hangzhou, hosted by Hangzhou Shichuo Information Technology Co., Ltd. (8BTC) and supported by Hangzhou Future Science and Technology City Management Committee, was successfully held in Hangzhou Future Science and Technology City. This is the largest blockchain industry summit ever held in Hangzhou. The conference invited more than a […]",
//                     "tags": "Press Releases",
//                     "categories": "Blockchain|Technology|Sponsored",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoGlobe",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptoglobe.png"
//                     }
//                 },
//                 {
//                     "id": "27049300",
//                     "guid": "https://www.newsbtc.com/?p=468970",
//                     "published_on": 1628697614,
//                     "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
//                     "title": "Government Still Sees Blockchain As “Wild West” Says Blockchain Australia",
//                     "url": "https://www.newsbtc.com/news/government-still-sees-blockchain-as-wild-west/",
//                     "source": "newsbtc",
//                     "body": "Blockchain Australia is displeased with the way its government is treating the crypto industry locally. According to the association, the government is judging the industry through malicious scammers and actors who&#8217;re tarnishing its image through their activities. Blockchain Australia believes that the authorities should engage with the industry to develop regulations that’ll fit all purposes. Blockchain Australia Engages The State There has been a lot of discussions between the association and the State in recent times. The Australian government has been reviewing the importance of the blockchain &#38; Fintech industry to its national goals and also looking into crypto regulations. Related Reading &#124; Vitalik Buterin Urges Ethereum To Grow Beyond DApps Last week, the CEO of Blockchain Australia, Steve Vallas, appeared before the Senate Committee in charge of the &#8220;Australia as a Technology &#38; Financial Centre.&#8221; During the meeting, Vallas stated that the association doesn&#8217;t agree with the assertions that the crypto industry is &#8220;a wild west.&#8221; He also mentioned that they have been eager to sit down with regulators and create an all-purpose regulatory framework for the industry. Vallas went ahead to trace the ICO boom from 2017 to 2018 and accused the government of not showing interest in the industry. According to the CEO, there&#8217;s no appetite for Initial Coin Offerings in the countr...",
//                     "tags": "Cryptocurrency news|australia|blockchain|government|Steve Vallas|Technology & Financial Centre",
//                     "categories": "Blockchain|ETH|ICO|Regulation|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "NewsBTC",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
//                     }
//                 },
//                 {
//                     "id": "27049264",
//                     "guid": "https://coingape.com/?p=89169",
//                     "published_on": 1628693118,
//                     "imageurl": "https://images.cryptocompare.com/news/default/coingape.png",
//                     "title": "Bank of Ghana partners with German currency technology firm to launch Pilot CBDC",
//                     "url": "https://coingape.com/bank-of-ghana-partners-with-german-currency-technology-firm-to-launch-pilot-cbdc/",
//                     "source": "coingape",
//                     "body": "Bank of Ghana (BoG) has announced a partnership agreement with the German Currency technology platform, Giesecke+Devrient (G+D) to pilot a general-purpose Central Bank Digital Currency (retail CBDC) in Ghana, West Africa. BoG shared in the Press Release that G+D will play a major role in launching Ghana’s e-Cedi Pilot. G+D will pilot the issuance of digital The post Bank of Ghana partners with German currency technology firm to launch Pilot CBDC appeared first on Coingape.",
//                     "tags": "News|Stablecoin News|BoG|BTCBRL|BTCBUSD|BTCDAI|BTCEUR|BTCGBP|BTCJPY|BTCKRW|BTCMXN|BTCNGN|BTCPAX|BTCRUB|BTCTRY|BTCTUSD|BTCUSD|BTCUSDC|BTCUSDT|BTCXRP|BTCZAR|Digital Ghana Agenda|Giesecke+Devrient|USDDAI|USDEOSDT|USDGUSD|USDIDRT|USDPAX|USDTDAI|USDTEUR|USDTPAX|USDTTUSD|USDTUSD|USDTUSDC|USDUSDC",
//                     "categories": "Fiat|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinGape",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/coingape.png"
//                     }
//                 },
//                 {
//                     "id": "27049256",
//                     "guid": "https://coinquora.com/?p=68550",
//                     "published_on": 1628692260,
//                     "imageurl": "https://images.cryptocompare.com/news/default/coinquora.png",
//                     "title": "Stellar Blockchain Opens Remittance Corridor Worth $17B",
//                     "url": "https://coinquora.com/stellar-blockchain-opens-remittance-corridor-worth-17b/",
//                     "source": "coinquora",
//                     "body": "The Stellar blockchain is opening a remittance corridor. The corridor will connect millions between the EU and Thailand. To do",
//                     "tags": "Blockchain News|Latest Post|News|Blockchain|Stellar",
//                     "categories": "Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinQuora",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/coinquora.png"
//                     }
//                 },
//                 {
//                     "id": "27049251",
//                     "guid": "https://cryptonews.com/news/pokemon-go-captured-all-continents-pocmon-will-capture-block-11401.htm",
//                     "published_on": 1628690960,
//                     "imageurl": "https://images.cryptocompare.com/news/cryptonews/cqA2Va51K2w.jpeg",
//                     "title": "PokeMon Go Captured All Continents, PocMon Will Capture Blockchain",
//                     "url": "https://cryptonews.com/news/pokemon-go-captured-all-continents-pocmon-will-capture-block-11401.htm",
//                     "source": "cryptonews",
//                     "body": "Disclaimer: The text below is a press release that was not written by Cryptonews.com. PokeMon Go experienced a viral explosion upon its release in 2016. The game had over 147 million monthly active users by May 2018, over a billion global downloads by early 2019, and grossed more than 6 billion USD in revenue as of 2020. From an investment perspective Nintendo's market value increased by USD 9",
//                     "tags": "Press Releases",
//                     "categories": "Market|Blockchain|Business|Sponsored",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "cryptonews",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptonews.png"
//                     }
//                 },
//                 {
//                     "id": "27049233",
//                     "guid": "https://cryptoslate.com/?p=196550",
//                     "published_on": 1628690412,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptoslate.png",
//                     "title": "Will blockchain microlending fill a financing shortfall for small business owners?",
//                     "url": "https://cryptoslate.com/will-blockchain-microlending-fill-a-financing-shortfall-for-small-business-owners/",
//                     "source": "cryptoslate",
//                     "body": "In the analog world, we tend to define borrowed money by its purpose. The post Will blockchain microlending fill a financing shortfall for small business owners? appeared first on CryptoSlate.",
//                     "tags": "DeFi|Guest Post",
//                     "categories": "Blockchain|Business",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoSlate",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptoslate.png"
//                     }
//                 },
//                 {
//                     "id": "27049215",
//                     "guid": "https://www.newsbtc.com/?p=469031",
//                     "published_on": 1628688038,
//                     "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
//                     "title": "Visa CEO Underlines Company’s Interest In Facilitating Cryptocurrency Solutions For Global Unbanked",
//                     "url": "https://www.newsbtc.com/news/company/visa-ceo-underlines-companys-interest-in-facilitating-cryptocurrency-solutions-for-global-unbanked/",
//                     "source": "newsbtc",
//                     "body": "Payment Provider Powering Real-World Digital Asset Transactability There is no denying that cryptocurrencies are one of the most significant technological advancements in recent years that can disrupt the centralized finance ecosystem globally. With the underlying blockchain technology and a fully decentralized ecosystem, cryptocurrencies can change the global financial sector. Not only can cryptocurrencies eliminate intermediaries to lower transaction costs, but they can also solve the global unbanked crisis. However, the accompanying costs of fiat to crypto conversions through local exchanges, complicated regulatory policies, and the limited acceptance of cryptos in the real world prevent crypto from going mainstream. Visa, the global payments technology company, is collaborating with several crypto service providers to address these problems. The transcript from Visa&#8217;s fiscal third-quarter 2021 earnings conference call highlights the platform’s efforts in enabling the global population to benefit from cryptocurrencies. According to Visa CEO and Chairman Al Kelly, “In the crypto space, we recently signed three partnerships: one with Tala to partner on cryptocurrency solutions for the global unbanked; and two, with crypto exchanges, FTX and CoinZoom, to begin offering Visa cards. We now have more than 50 crypto wallets and platforms, up from 35 in Q1 and more than the next leading network. And collectively, they drove o...",
//                     "tags": "Company News",
//                     "categories": "Technology|ICO|Blockchain|Fiat",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "NewsBTC",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
//                     }
//                 },
//                 {
//                     "id": "27049212",
//                     "guid": "https://coingape.com/?p=89162",
//                     "published_on": 1628687529,
//                     "imageurl": "https://images.cryptocompare.com/news/default/coingape.png",
//                     "title": "Cardano Price Analysis: ADA Prepares To Test All-Time Highs As Speculation Intensifies Ahead Of Smart Contracts Launch",
//                     "url": "https://coingape.com/cardano-price-analysis-ada-prepares-to-test-all-time-highs-as-speculation-intensifies-ahead-of-smart-contracts-launch/",
//                     "source": "coingape",
//                     "body": "Cardano explodes over 20% to trade at $1.8, leading altcoins in mid-week recoveries. Development activity on the Cardano network surge ahead of the launch of smart contracts functionality. Cardano breakout has continued to make headlines this week. Data by CoinGecko shows ADA trading 20% in 24 hours, following an announcement that the blockchain network will The post Cardano Price Analysis: ADA Prepares To Test All-Time Highs As Speculation Intensifies Ahead Of Smart Contracts Launch appeared first on Coingape.",
//                     "tags": "Altcoin News|News|Price Analysis|ADABCH|ADABNB|ADABTC|ADABUSD|ADAETH|ADAHUSD|ADATUSD|ADAUSD|ADAUSDC|ADAUSDT|ADAUSDTPERP|Cardano (ADA)|Cardano Price Analysis",
//                     "categories": "ADA|Trading|Market|Blockchain|Altcoin",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinGape",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/coingape.png"
//                     }
//                 },
//                 {
//                     "id": "27049208",
//                     "guid": "https://cryptobriefing.com/?p=93556",
//                     "published_on": 1628687167,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptobriefing.png",
//                     "title": "Hop Protocol Cuts Polygon Withdrawal Times to Minutes",
//                     "url": "https://cryptobriefing.com/hop-protocol-cuts-polygon-withdrawal-times-minutes/",
//                     "source": "cryptobriefing",
//                     "body": "",
//                     "tags": "News|Hop Protocol|Matic|polygon",
//                     "categories": "Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Crypto Briefing",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptobriefing.png"
//                     }
//                 },
//                 {
//                     "id": "27049150",
//                     "guid": "https://blockworks.co/?p=6390",
//                     "published_on": 1628685000,
//                     "imageurl": "https://images.cryptocompare.com/news/default/blockworks.png",
//                     "title": "Q&A: How Off The Chain Capital Has Outperformed Bitcoin",
//                     "url": "https://blockworks.co/qa-how-off-the-chain-capital-has-outperformed-bitcoin/",
//                     "source": "blockworks",
//                     "body": "CEO calls the firm’s investment offering a value fund specializing in blockchain assets .The post Q&#038;A: How Off The Chain Capital Has Outperformed Bitcoin appeared first on Blockworks.",
//                     "tags": "Financial Services|Bitcoin|Brian Estes|family office|fund manager|Off the Chain",
//                     "categories": "BTC|ICO|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Blockworks",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/blockworks.png"
//                     }
//                 },
//                 {
//                     "id": "27049148",
//                     "guid": "https://coingape.com/?p=89149",
//                     "published_on": 1628684935,
//                     "imageurl": "https://images.cryptocompare.com/news/default/coingape.png",
//                     "title": "Bitcoin Mining: North American Miners see 58% Rise in BTC Mining",
//                     "url": "https://coingape.com/bitcoin-mining-north-american-miners-see-58-rise-in-btc-mining/",
//                     "source": "coingape",
//                     "body": "North America saw an exceptional rise in BTC mining over the span of one month, with a 58 percent hike. Five Bitcoin Mining giants in North America, Marathon Digital, Riot Blockchain, Bitfarm, Argo Blockchain, and Hut8 mined a total of 1802 Bitcoins in July as compared to June’s collection of 1135.6 Bitcoins. The rain of The post Bitcoin Mining: North American Miners see 58% Rise in BTC Mining appeared first on Coingape.",
//                     "tags": "Bitcoin News|News|Argo Blockchain|Bitfarm|BTCBRL|BTCBUSD|BTCDAI|BTCEUR|BTCGBP|BTCJPY|BTCKRW|BTCMXN|BTCNGN|BTCPAX|BTCRUB|BTCTRY|BTCTUSD|BTCUSD|BTCUSDC|BTCUSDT|BTCXRP|BTCZAR|ETHAUD|ETHBKRW|ETHBRL|ETHBTC|ETHBUSD|ETHDAI|ETHEOSDT|ETHEUR|ETHGBP|ETHHUSD|ETHJPY|ETHKRW|ETHMXN|ETHPAX|ETHRUB|ETHTRX|ETHTRY|ETHUSD|ETHUSDC|ETHUSDT|ETHUST|ETHZAR|Hut8|Marathon Digital|North America|Riot Blockchain",
//                     "categories": "BTC|Mining|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinGape",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/coingape.png"
//                     }
//                 },
//                 {
//                     "id": "27049153",
//                     "guid": "https://www.cryptonewsz.com/?p=90554",
//                     "published_on": 1628684715,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptonewsz.png",
//                     "title": "EarnBUSD Fair Launch and Airdrop on MoonRatX to Surprise Winners",
//                     "url": "https://www.cryptonewsz.com/earnbusd-fair-launch-and-airdrop-on-moonratx-to-surprise-winners/",
//                     "source": "cryptonewsz",
//                     "body": "Hailed as a top-tier liquidity protocol working on the Binance Smart Chain network, MoonRatX is all set to proclaim the glory of the highly-anticipated EarnBUSD Fair Launch event with its community by organizing attractive airdrops to reward winners. According to the report, the team has dedicated a whopping total of 200,000,000 $EBUSD as a reward &#8230;",
//                     "tags": "Finance|Finance News",
//                     "categories": "Mining|Exchange|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoNewsZ",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptonewsz.png"
//                     }
//                 },
//                 {
//                     "id": "27049080",
//                     "guid": "https://cointelegraph.com/news/stellar-blockchain-remittance-corridor-to-power-thailand-europe-payments",
//                     "published_on": 1628682692,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cointelegraph.png",
//                     "title": "Stellar blockchain remittance corridor to power Thailand-Europe payments",
//                     "url": "https://cointelegraph.com/news/stellar-blockchain-remittance-corridor-to-power-thailand-europe-payments",
//                     "source": "cointelegraph",
//                     "body": "The new cross-border remittance corridor will be hosted on the Stellar blockchain and serve around 600 million customers",
//                     "tags": "Thailand|Europe|Remittances",
//                     "categories": "Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CoinTelegraph",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cointelegraph.png"
//                     }
//                 },
//                 {
//                     "id": "27049020",
//                     "guid": "https://cryptoslate.com/?p=196595",
//                     "published_on": 1628679640,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptoslate.png",
//                     "title": "Seriously, Venture Capitalists bring legitimacy to crypto, DeFi, and NFTs",
//                     "url": "https://cryptoslate.com/seriously-venture-capitalists-bring-legitimacy-to-crypto-defi-and-nfts/",
//                     "source": "cryptoslate",
//                     "body": "In the summer of 2016, the value of all crypto in the world was not quite $10 billion. The post Seriously, Venture Capitalists bring legitimacy to crypto, DeFi, and NFTs appeared first on CryptoSlate.",
//                     "tags": "Analysis|Guest Post|Investments|NFTs|Technology",
//                     "categories": "Market|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoSlate",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptoslate.png"
//                     }
//                 },
//                 {
//                     "id": "27049004",
//                     "guid": "https://dailyhodl.com/?p=157696",
//                     "published_on": 1628677857,
//                     "imageurl": "https://images.cryptocompare.com/news/default/dailyhodl.png",
//                     "title": "Hacker Behind $611,000,000 Crypto Heist Left Trail of Digital Fingerprints, According to Blockchain Security Firm SlowMist",
//                     "url": "https://dailyhodl.com/2021/08/11/hacker-behind-611000000-crypto-heist-left-trail-of-digital-fingerprints-according-to-blockchain-security-firm-slowmist/",
//                     "source": "dailyhodl",
//                     "body": "Blockchain security firm SlowMist says the attacker behind a $611 million hack of Poly Network left a trail of digital fingerprints revealing the details of the massive crypto heist. Poly Network, a project that enables the swapping of tokens across different blockchains, tells its 16,400 Twitter followers that its system was breached on Tuesday. Through [&#8230;]The post Hacker Behind $611,000,000 Crypto Heist Left Trail of Digital Fingerprints, According to Blockchain Security Firm SlowMist appeared first on The Daily Hodl.",
//                     "tags": "Scams, Schemes and Hacks|hacks|News",
//                     "categories": "Blockchain|ICO",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "The Daily Hodl",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/dailyhodl.png"
//                     }
//                 },
//                 {
//                     "id": "27048986",
//                     "guid": "https://cryptonews.com/news/poly-network-exploiter-starts-returning-the-funds-gives-back-11394.htm",
//                     "published_on": 1628675152,
//                     "imageurl": "https://images.cryptocompare.com/news/cryptonews/bwwiwyEy040.jpeg",
//                     "title": "Poly Network Exploiter Starts Returning the Funds, Gives Back USD 1M",
//                     "url": "https://cryptonews.com/news/poly-network-exploiter-starts-returning-the-funds-gives-back-11394.htm",
//                     "source": "cryptonews",
//                     "body": "The hacker of the decentralized finance (DeFi) interoperability protocol Poly Network, that just lost over USD 600m, first asked the protocol for a multi-signature (multisig) wallet to return the funds - and has started returning it. So far, the hacker returned USD 1.007m, per Polygonscan data. That is a start, but still a long way to go. After seemingly having some fun",
//                     "tags": "Altcoin News",
//                     "categories": "Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "cryptonews",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptonews.png"
//                     }
//                 },
//                 {
//                     "id": "27048963",
//                     "guid": "https://www.theblockcrypto.com/post/114189",
//                     "published_on": 1628673612,
//                     "imageurl": "https://images.cryptocompare.com/news/default/theblock.png",
//                     "title": "Poly Network attacker starts returning the $611 million in stolen cryptocurrency",
//                     "url": "https://www.theblockcrypto.com/post/114189/poly-hack-attacker-return-funds-id-slowmist?utm_source=cryptocompare&utm_medium=rss",
//                     "source": "theblock",
//                     "body": "The Poly Network exploiter has started returning the stolen crypto assets less than a day after their ID was reportedly obtained.The post Poly Network attacker starts returning the $611 million in stolen cryptocurrency appeared first on The Block.",
//                     "tags": "Blockchain|Crime|Cryptocurrency|Ethereum|cryptocurrency|DeFi Hack|hack|money|poly network|theft",
//                     "categories": "ETH|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "TheBlock",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/theblock.png"
//                     }
//                 },
//                 {
//                     "id": "27048979",
//                     "guid": "https://dailyhodl.com/?p=157609",
//                     "published_on": 1628672443,
//                     "imageurl": "https://images.cryptocompare.com/news/default/dailyhodl.png",
//                     "title": "Four Low-Cap Crypto Assets Spike More Than 100% Within One Week",
//                     "url": "https://dailyhodl.com/2021/08/11/four-low-cap-crypto-assets-spike-more-than-100-within-one-week/",
//                     "source": "dailyhodl",
//                     "body": "Four altcoins, all of which individually boast a market capitalization of below $600 million, have recorded growth of over 100% in just seven days. At the top of the list is TrueFi (TRU), a decentralized finance (DeFi) protocol that supports uncollateralized lending. According to CoinGecko, TRU surged from a seven-day low of $0.14 to $0.75, [&#8230;]The post Four Low-Cap Crypto Assets Spike More Than 100% Within One Week appeared first on The Daily Hodl.",
//                     "tags": "Altcoins|Ethereum|market cap|News|proof of stake|proof of work",
//                     "categories": "Altcoin|ETH|Market|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "The Daily Hodl",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/dailyhodl.png"
//                     }
//                 },
//                 {
//                     "id": "27048944",
//                     "guid": "https://www.cryptocompare.com/email-updates/daily/2021/aug/11/",
//                     "published_on": 1628671654,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptocompare.png",
//                     "title": "Market Analysis Report (11 Aug 2021)",
//                     "url": "https://www.cryptocompare.com/email-updates/daily/2021/aug/11/",
//                     "source": "cryptocompare",
//                     "body": "DeFi Protocol Poly Network Hacked for Over $600 Million | Venmo to Let Credit Card Holders Convert Cashback to Crypto | Coinbase’s Profits Surge Past $2 Billion in Q2",
//                     "tags": "Bitcoin|Ethereum|Daily Crypto News|Cryptocurrency",
//                     "categories": "Market|BTC|ETH|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoCompare",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptocompare.png"
//                     }
//                 },
//                 {
//                     "id": "27048935",
//                     "guid": "https://ambcrypto.com/?p=176397",
//                     "published_on": 1628670614,
//                     "imageurl": "https://images.cryptocompare.com/news/default/ambcrypto.png",
//                     "title": "Artdeco NFT project to offer creators a decentralized NFT marketplace",
//                     "url": "https://ambcrypto.com/artdeco-nft-project-to-offer-creators-a-decentralized-nft-marketplace/",
//                     "source": "ambcrypto",
//                     "body": "Leveraging the power of the Binance Smart Chain, Artdeco NFT project is building ahas created a platform where digital artists and art creators can monetize their works without being at the mercy of unscrupulous middlemen. The tech wizard, billionaire Elon Musk, inspired this novel invention. Artdeco doubles as a distributed network for Non-Fungible Token (NTF) [&#8230;]",
//                     "tags": "HideCryptopanic|Sponsored",
//                     "categories": "Exchange|ICO|Technology|Sponsored",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "AMB Crypto",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/ambcrypto.png"
//                     }
//                 },
//                 {
//                     "id": "27048923",
//                     "guid": "https://www.cryptonewsz.com/?p=90508",
//                     "published_on": 1628669166,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptonewsz.png",
//                     "title": "YAY Games On Avalanche",
//                     "url": "https://www.cryptonewsz.com/yay-games-on-avalanche/",
//                     "source": "cryptonewsz",
//                     "body": "YAY Games has finally decided to use the cross-chain protocol of Avalanche to leverage the advanced technology and unique consensus model of the platform. By deploying on Avalanche, YAY Games shall be able to expand the GameFi space and increase its potential beyond extraordinary levels. This strategic collaboration with Avalanche will enhance the network and &#8230;",
//                     "tags": "Blockchain|Blockchain News",
//                     "categories": "Blockchain|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoNewsZ",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptonewsz.png"
//                     }
//                 },
//                 {
//                     "id": "27048899",
//                     "guid": "https://www.newsbtc.com/?p=469025",
//                     "published_on": 1628662258,
//                     "imageurl": "https://images.cryptocompare.com/news/default/newsbtc.png",
//                     "title": "Vanilla Network Staking Pools: Revolutionary High Rewarding Staking Pools Driven by Wins & Losses from a Decentralized Betting Platform",
//                     "url": "https://www.newsbtc.com/news/company/vanilla-network-staking-pools-revolutionary-high-rewarding-staking-pools-driven-by-wins-losses-from-a-decentralized-betting-platform/",
//                     "source": "newsbtc",
//                     "body": "The Vanilla Network is a deflationary token that aims to introduce innovative staking and betting decentralized applications (dApps) in the market for betting enthusiasts globally as well as users that are looking for rewards in return for long-term participation. All this, whilst offering a 0% rake to consumers to play on their betting dApps, a truly decentralized product offering ensures all rewards are delivered back to the consumer! Community fund: self-recycling reward system The core of the project is established with a new recyclable community fund providing the infrastructure of the product offering. The Vanilla Network envisions using Blockchain technology to produce a community-driven betting and staking platform where the house no longer wins! In fact, this is a state-of-the-art staking system unlike the influx of reflection tokens that have flooded the market. At the core of the Vanilla Network is a fund that will self cycle by being funded and replenished with the wins and losses on the network’s dApps, hence the funds will always belong to the community. Recently, the team behind Vanilla Network have launched two different products for the Vanilla ecosystem — High APY pools and a head-to-head betting DApp. High Yield Staking Pools: delivered by a healthy ecosystem The original Vanilla Staking pool was engineered to reward long-term stakeholders who participate in developing the ecosystem via dividends received fr...",
//                     "tags": "Company News",
//                     "categories": "Mining|ICO|Market|Blockchain|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "NewsBTC",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/newsbtc.png"
//                     }
//                 },
//                 {
//                     "id": "27048894",
//                     "guid": "https://news.bitcoin.com/?p=479494",
//                     "published_on": 1628659838,
//                     "imageurl": "https://images.cryptocompare.com/news/default/bitcoincom.png",
//                     "title": "Chainalysis Announces It Will Include Dogecoin Coverage in Its Reports",
//                     "url": "https://news.bitcoin.com/chainalysis-announces-it-will-include-dogecoin-coverage-in-its-reports/",
//                     "source": "bitcoin.com",
//                     "body": "Chainalysis, one of the leading blockchain intelligence companies in the world, has announced it will now cover the Dogecoin network in its reports. The company argues that dogecoin became one of the most known cryptocurrencies in the world after being promoted by Elon Musk, CEO of Tesla during this year. This, consequently, has attracted criminals [&#8230;]",
//                     "tags": "News|Chainalysis|Ciphertrace|Cryptocurrency|dogecoin|Intelligence|IRS|Monero",
//                     "categories": "XMR|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Bitcoin.com",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/bitcoincom.png"
//                     }
//                 },
//                 {
//                     "id": "27048890",
//                     "guid": "https://www.cryptonewsz.com/?p=90474",
//                     "published_on": 1628658965,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptonewsz.png",
//                     "title": "When AI Meets Blockchain – Get to Know AIWORK",
//                     "url": "https://www.cryptonewsz.com/when-ai-meets-blockchain-get-to-know-aiwork/",
//                     "source": "cryptonewsz",
//                     "body": "AIWORK Overview Recent breakthroughs in the artificial intelligence and blockchain sectors are driving the future of technology. AIWORK is one of the first projects to notice the potential of these technologies. It is taking the next step of combining them with human resources to deliver the AI (Artificial Intelligence) protocol of the future. AIWORK is &#8230;",
//                     "tags": "Blockchain|Blockchain News",
//                     "categories": "Blockchain|Technology",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoNewsZ",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptonewsz.png"
//                     }
//                 },
//                 {
//                     "id": "27048889",
//                     "guid": "https://news.bitcoin.com/?p=479655&preview=true&preview_id=479655",
//                     "published_on": 1628658021,
//                     "imageurl": "https://images.cryptocompare.com/news/default/bitcoincom.png",
//                     "title": "BENQI and Avalanche Launch $3M Liquidity Mining Initiative to Accelerate DeFi Growth",
//                     "url": "https://news.bitcoin.com/benqi-and-avalanche-launch-3m-liquidity-mining-initiative-to-accelerate-defi-growth/",
//                     "source": "bitcoin.com",
//                     "body": "PRESS RELEASE. BENQI, an algorithmic liquidity market protocol, and the Avalanche Foundation are collaborating on a joint liquidity mining program to celebrate the launch of the BENQI protocol on the 19th of August and the next phase of growth within Avalanche&#8217;s DeFi ecosystem. $3MM of AVAX will be allocated as liquidity incentives for BENQI users, [&#8230;]",
//                     "tags": "Press release|BENQI",
//                     "categories": "Mining|Blockchain|ETH|Market|Sponsored",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "Bitcoin.com",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/bitcoincom.png"
//                     }
//                 },
//                 {
//                     "id": "27048888",
//                     "guid": "https://cryptoslate.com/?p=196571",
//                     "published_on": 1628658003,
//                     "imageurl": "https://images.cryptocompare.com/news/default/cryptoslate.png",
//                     "title": "The biggest DeFi hit ever: Poly Network sees $600 million crypto heist",
//                     "url": "https://cryptoslate.com/the-biggest-defi-hit-ever-poly-network-sees-600-million-crypto-heist/",
//                     "source": "cryptoslate",
//                     "body": "A decentralized finance (DeFi) cross-chain bridging protocol Poly Network recently announced that it has suffered an attack in which the hacker stole over $600 million across three blockchains. The post The biggest DeFi hit ever: Poly Network sees $600 million crypto heist appeared first on CryptoSlate.",
//                     "tags": "DeFi|Hacks|USDT",
//                     "categories": "USDT|Blockchain",
//                     "upvotes": "0",
//                     "downvotes": "0",
//                     "lang": "EN",
//                     "source_info": {
//                         "name": "CryptoSlate",
//                         "lang": "EN",
//                         "img": "https://images.cryptocompare.com/news/default/cryptoslate.png"
//                     }
//                 }
//             ],
//             "RateLimit": {},
//             "HasWarning": false
//         }
//     ]
// };

const rootReducer = combineReducers({
    NewsReducer,
});


export default rootReducer;