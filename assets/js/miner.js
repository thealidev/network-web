_web3 = new window.Web3(new window.Web3.providers.HttpProvider("https://speedy-nodes-nyc.moralis.io/558fbd4e9df2a360d9003e2b/polygon/mumbai"));
_token = new _web3.eth.Contract([{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "tokenOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "rewardAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "epochCount", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "newChallengeNumber", "type": "bytes32" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_MAXIMUM_TARGET", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_MINIMUM_TARGET", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "bytes32", "name": "challenge_digest", "type": "bytes32" }, { "internalType": "address", "name": "_miner", "type": "address" }], "name": "_mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "_totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "acceptOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "tokens", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "guy", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "blocktime", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "calcMiningTarget", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_difficulty", "type": "uint256" }], "name": "changeDifficulty", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "currentChallenge", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "epochCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "epochLenght", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getChallengeNumber", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMiningDifficulty", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMiningReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMiningTarget", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "minerOfLastBlock", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "miningTarget", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "blockdelay", "type": "uint256" }], "name": "miningTargetForDelay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "bytes32", "name": "challenge_digest", "type": "bytes32" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "blockdelay", "type": "uint256" }], "name": "netTargetForDelay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "timeOfLastProof", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "timeOfLastReadjust", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }], "0x9eb1F7bc4875A09DfF51B1fb2f80f6B8E0b4EB81");

currentAddress = "";
minerActive = false;
threads = []
shares = 0;
hashrate = 0;

class Wallet {
	constructor(web3Instance) {
		this.web3Instance = web3Instance;
		this.miningAccount = web3Instance.eth.accounts.privateKeyToAccount(web3Instance.utils.soliditySha3((Math.random()*10**17).toFixed()));
	}
	
	convertFromHex(hex) {
		var hex = hex.toString();//force conversion
		var str = '';
		for (var i = 0; i < hex.length; i += 2)
			str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
		return str;
	}

	convertToHex(str) {
		var hex = '';
		for(var i=0;i<str.length;i++) {
			hex += ''+str.charCodeAt(i).toString(16);
		}
		return hex;
	}
	
	async getAccountInfo(account) {
		return (await (await fetch(`https://68.183.178.18:5001/accounts/accountInfo/${account}`)).json()).result;
	}

	async getHeadTx(account) {
		let accountInfo = (await getAccountInfo(account));
		return accountInfo.transactions[accountInfo.transactions.length-1];
	}

	async buildTransaction(to, tokens) {
		const account = (await this.web3Instance.eth.getAccounts())[0];
		const parent = (await getHeadTx(account));
		let data = {"from":account, "to":this.web3Instance.utils.toChecksumAddress(to), "tokens":tokens, "parent": parent, "type": 0};
		let strdata = JSON.stringify(data);
		const hash = this.web3Instance.utils.soliditySha3(strdata);
		const signature = await this.web3Instance.eth.personal.sign(strdata, account);
		const tx = {"data": data, "sig": signature, "hash": hash, "nodeSigs": {}};
		return this.convertToHex(JSON.stringify(tx));
	}
	
	async buildMiningTransaction(submittedBlock) {
		const account = (await this.web3Instance.eth.getAccounts())[0];
		const parent = (await getHeadTx(this.miningAccount.address));
		let data = {"from":this.miningAccount.address, "to":this.miningAccount.address, "tokens":0, "blockData": submittedBlock, "parent": parent, "type": 1};
		let strdata = JSON.stringify(data);
		const hash = this.web3Instance.utils.soliditySha3(strdata);
		const signature = await this.miningAccount.sign(strdata).signature;
		const tx = {"data": data, "sig": signature, "hash": hash, "nodeSigs": {}};
		return this.convertToHex(JSON.stringify(tx));
	}

	async sendTransaction(signedTx) {
		console.log(signedTx);
		return (await (await fetch(`https://68.183.178.18:5001/send/rawtransaction/?tx=${signedTx}`)).json()).result;
	}
	
	getVrs(sig) {
		return (('0x' + sig.substring(2).substring(128, 130)), ('0x' + sig.substring(2).substring(0, 64)), ('0x' + sig.substring(2).substring(64, 128)))
	}
}

wallet = new Wallet(_web3);
lastBalanceRefresh = 0;


function threadsStatus(threadNumber, data) {
	threads[threadNumber].shares = Number(data.split(",")[0]);
	threads[threadNumber].hashrate = Number(data.split(",")[1]);
	i = 0;
	hashrate = 0;
	shares = 0;
	while (i < threads.length) {
		hashrate += threads[i].hashrate;
		shares += threads[i].shares;
		i += 1;
	}
	setMinerStatus(`running - ${shares} shares accepted - ${Math.round(hashrate*100)/100} h/s <br/>Number of threads : ${threads.length}`);
	if (Number(data.split(",")[2]) == 1) {
		refreshBalance();
	}
}

function setMinerStatus(status) {
	document.getElementById("miningstatus").innerHTML = status;
}

async function refreshBalance() {
	document.getElementById("currentbalance").innerHTML = Math.round((await wallet.getAccountInfo(currentAddress)).balance) + " SiriCoin";
}

async function formatAddress(_address_) {
	splitted = _address_.split(".")
	if (splitted[splitted.length-1] === "eth") {
		return (await (new Web3("https://cloudflare-eth.com/")).eth.ens.getAddress(_address_));
	}
	else {
		return Web3.utils.toChecksumAddress(_address_);
	}
}

async function startMining(_address, _threads) {
	try {
		currentAddress = (await formatAddress(_address));
		refreshBalance();
		if (!minerActive) {
			if (typeof Worker !== "undefined") {
				minerActive = true;
				i = 0;
				while (i < (_threads || navigator.hardwareConcurrency)) {
					threads[i] = new Worker("assets/js/miningWorker.js");
					threads[i].threadNumber = i;
					threads[i].onmessage = function(event) {
						threadsStatus(event.target.threadNumber, event.data);
					};
					// ref = getReferralStuff();
					// if (ref) {
						// threads[i].postMessage(_address + "," + ref);
					// }
					// else {
						// threads[i].postMessage(_address);
					// }
					threads[i].postMessage(currentAddress);
					i += 1;
				}
			}
			else {
				setMinerStatus("Error: WebWorker isn't supported on this browser");
			}
		}
	}
	catch (e) {
		setMinerStatus(e)
	}
}

function stopMining() {
	i = 0;
	while (i < threads.length) {
		threads[i].terminate();
		threads[i].hashrate = 0;
		threads[i].shares = 0;
		i += 1;
	}
	threads = []
	minerActive = false;
	setMinerStatus("Stopped");
}
