
import axios from 'axios';
const API_URL = process.env.REACT_APP_POLYGON_ZK_EVM_API_URL;

//hermez 테스트넷 API-Docs   https://public.zkevm-test.net:8443/api-docs
//----------------------------------------------------------------------------------------------------------------
//Account 관련 APIs------------------------------------------------------------------------------------------------
//주소의 잔액 조회
export const eth_get_balance = async (addressHash) => {
  return await axios.get(`${API_URL}?module=account&action=eth_get_balance&address=${addressHash}`);
};
//주소로 거래정보 가져오기. 최대 10,000건의 거래.
export const txlist = async (addressHash) => {
  return await axios.get(`${API_URL}?module=account&action=txlist&address=${addressHash}`);
};
//balancemulti 여러 주소 동시에 잔액 조회 
export const balancemulti = async (addressHash) => {
  return await axios.get(`${API_URL}?module=account&action=balancemulti&address=${addressHash}`);
};
//pendingtxlist 주소별로 보류 중인 거래 조회 
export const pendingtxlist = async (addressHash) => {
  return await axios.get(`${API_URL}?module=account&action=pendingtxlist&address=${addressHash}`);
};
//트랜잭션 또는 주소로 내부 트랜잭션 조회 
export const txlistinternal = async (transactionHash) => {
  return await axios.get(`${API_URL}?module=account&action=txlistinternal&txhash=${transactionHash}`);
};
//tokenbalance 컨트랙트에 대한 토큰 잔액 조회 
export const tokenbalance = async (contractAddressHash, addressHash) => {
  return await axios.get(`${API_URL}?module=account&action=tokenbalance&contractaddress=${contractAddressHash}&address=${addressHash}`);
};
//tokenlist 주소가 보유한 토큰 목록 조회 
export const tokenlist = async (addressHash) => {
  return await axios.get(`${API_URL}?module=account&action=tokenlist&address=${addressHash}`);
};
//getminedblocks 주소가 채굴한 블록 목록 조회 
export const getminedblocks = async (addressHash) => {
  return await axios.get(`${API_URL}?module=account&action=getminedblocks&address=${addressHash}`);
};
//listaccounts 계정 및 잔액 목록 조회 //?module=account&action=listaccounts
export const listaccounts = async () => {
  return await axios.get(`${API_URL}?module=account&action=listaccounts`);
};


//----------------------------------------------------------------------------------------------------------------
//Transaction ------------------------------------------------------------------------------------------------------------
//gettxinfo 트랜잭션 해시로 트랜잭션 정보 조회 ?module=transaction&action=gettxinfo&txhash={transactionHash}
export const gettxinfo = async (transactionHash) => {
  return await axios.get(`${API_URL}?module=transaction&action=gettxinfo&txhash=${transactionHash}`);
};
//gettxreceiptstatus 트랜잭션 해시로 트랜잭션 수신 상태 조회 ?module=transaction&action=gettxreceiptstatus&txhash={transactionHash}
export const gettxreceiptstatus = async (transactionHash) => {
  return await axios.get(`${API_URL}?module=transaction&action=gettxreceiptstatus&txhash=${transactionHash}`);
};
//getstatus 트랜잭션 상태 조회 ?module=transaction&action=getstatus&txhash={transactionHash}
export const getstatus = async (transactionHash) => {
  return await axios.get(`${API_URL}?module=transaction&action=getstatus&txhash=${transactionHash}`);
};
//txSend L2 to L2
export const sendTransaction = async (sender, rev, amount) => {
  
};

//Contract ----------------------------------------------------------------------------------------------------------------
//listcontracts 컨트랙트 목록 조회 ?module=contract&action=listcontracts
export const listcontracts = async () => {
  return await axios.get(`${API_URL}?module=contract&action=listcontracts`);
};

//----------------------------------------------------------------------------------------------------------------
//Block -------------------------------------------------------------------------------------------------------------------
export const getBlocks = async () => {
  return await axios.get(`${API_URL}?module=block&action=eth_block_number`);
};


//----------------------------------------------------------------------------------------------------------------
//Stats ----------------------------------------------------------------------------------------------------------
//tokensupply //ethsupplyexchange //ethsupply //coinprice //totalfees

//----------------------------------------------------------------------------------------------------------------
//logs 로그 조회 ---------------------------------------------------------------------------------------------------
//getLogs 주소 및/또는 주제에 대한 이벤트 로그를 가져옵니다. 최대 1,000개의 이벤트 로그. 

//----------------------------------------------------------------------------------------------------------------
//Token 컨트랙트 토큰 조회-------------------------------------------------------------------------------------------------------------------
//getToken Get ERC-20 or ERC-721 token by contract address. ?module=token&action=getToken&contractaddress={contractAddressHash}
export const getToken = async (contractAddressHash) => {
  return await axios.get(`${API_URL}?module=token&action=getToken&contractaddress=${contractAddressHash}`);
};
//getTokenHolders 컨트랙트의 토큰 홀더 조회


const crypto = require('crypto');
export const hashed = (data) => {
  return crypto.createHmac('sha256', process.env.REACT_APP_HMAC_HASH_SALT ).update(data).digest('hex');
};
