from web3 import Web3
from flask_cors import cross_origin
import flask, eth_account, json, requests
global polygon, token, config, pool, startNonce, txsSent
from web3.exceptions import ContractLogicError

configfile = "config.json"

polygon = Web3(Web3.HTTPProvider("https://rpc-mumbai.maticvigil.com/"))
txsSent = 0
startNonce = 0
txs = {}

_abi = """[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"epochCount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"newChallengeNumber","type":"bytes32"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_MAXIMUM_TARGET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_MINIMUM_TARGET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes32","name":"challenge_digest","type":"bytes32"},{"internalType":"address","name":"_miner","type":"address"},{"internalType":"uint256","name":"feeToPool","type":"uint256"},{"internalType":"address","name":"pool","type":"address"}],"name":"_mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blocktime","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calcMiningTarget","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_difficulty","type":"uint256"}],"name":"changeDifficulty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentChallenge","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"epochCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochLenght","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChallengeNumber","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMiningDifficulty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMiningReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMiningTarget","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minerOfLastBlock","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"miningTarget","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockdelay","type":"uint256"}],"name":"miningTargetForDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes32","name":"challenge_digest","type":"bytes32"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockdelay","type":"uint256"}],"name":"netTargetForDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeOfLastProof","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeOfLastReadjust","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]"""

pool = polygon.eth.contract(address="0x9488901151d3bc6050F7Fd46d5D85D0Ffb3383a9", abi=_abi)

try:
    context = tuple(config["ssl"])
except:
    context = ("./cert.pem", "./privkey.pem")

_configfile = open(configfile, "r")
config = json.load(_configfile)
_configfile.close()
config["address"] = eth_account.Account.privateKeyToAccount(config["privateKey"]).address
try:
    config["feeRecipient"] = Web3.toChecksumAddress(config["feeRecipient"])
except:
    config["feeRecipient"] = config["address"]
config["privateKey"] = bytes.fromhex(config["privateKey"])
print(f"Server address : {config['address']}")

def getTxCount():
    _txs = 0
    for key,value in txs:
        try:
            polygon.eth.getTransactionReceipt(key)
        except:
            pass
        else:
            _txs += 1
    return _txs

def getNonce():
    global startNonce, txsSent
    if (startNonce == 0 and txsSent == 0):
        startNonce = polygon.eth.get_transaction_count(config["address"])
    if (startNonce + txsSent) < polygon.eth.get_transaction_count(config["address"]):
        startNonce = polygon.eth.get_transaction_count(config["address"])
        txsSent = 0
    return startNonce + txsSent

def gasPrice():
    global config
    if (config["autoGasPrice"]):
        return int(min(requests.get("https://gasstation-mainnet.matic.network/").json()["safeLow"], config["maxGasPrice"])*config["gasMultiplier"])
    else:
        return int(config["gasPrice"]*config["gasMultiplier"])

def submitWork(nonce, result, miner, feeHolder):
    global polygon, token, config, pool, startNonce, txsSent
    try:
        _gas = gasPrice()
        print(f"miner : {miner}\nresult : {result}\nnonce : {nonce}\ngas price : {_gas/config['gasMultiplier']} gwei")
        if (config["feeRecipient"] != feeHolder):
            print(f"referrer : {feeHolder}")
        tx = pool.functions._mint(int(nonce), result, Web3.toChecksumAddress(miner), int(config["poolFee"]), feeHolder).buildTransaction({'nonce': getNonce(),'chainId': 137, 'gasPrice': _gas, 'from':config["address"]})
        tx = polygon.eth.account.sign_transaction(tx, config["privateKey"])
        txid = polygon.toHex(polygon.keccak(tx.rawTransaction))
        print("txid :",txid)
        polygon.eth.send_raw_transaction(tx.rawTransaction)
        receipt = polygon.eth.waitForTransactionReceipt(txid)
        print(receipt)
        txs[txid] = receipt
        txsSent += 1
        if receipt['status'] == 0:
            return False
        else:
            return True
    except Exception as e:
        if ('replacement transaction underpriced' in str(e)) or ('nonce too low' in str(e)):
            txsSent += 1
        print(e);
        return False

app = flask.Flask(__name__)

@app.route("/submit/<nonce>/<result>/<miner>")
@cross_origin()
def submit(nonce, result, miner):
    feedback = submitWork(nonce, result, miner, config["feeRecipient"])
    if feedback:
        return "Good"
    else:
        return "Bad"

@app.route("/submit/<nonce>/<result>/<miner>/<referrer>")
@cross_origin()
def submitWithRef(nonce, result, miner, referrer):
    feedback = submitWork(nonce, result, miner, referrer)
    if feedback:
        return "Good"
    else:
        return "Bad"
        
app.run(host="0.0.0.0", port=config["port"], ssl_context=context)
