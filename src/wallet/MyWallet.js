/*global chrome*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography,Card } from "@mui/material";
// import { List, ListItem, Divider, ListItemText, } from "@mui/material";
import * as API from "../utils";

import Header from "./Navbar";

const MyWallet = () => {
  const navigate = useNavigate();
  const [publicKeyString, setPublicKeyString] = useState();
  const [privateKeyString, setprivateKeyString] = useState();
  const [recipientPublicKey, setRecipientPublicKey] = useState();
  const [recipientAmount, setRecipientAmount] = useState();
  const [balance, setBalance] = useState(0);


  chrome.storage.local.get("publicKey", (data) => {
    setPublicKeyString(data.publicKey);
  });
  chrome.storage.local.get("privateKey", (data) => {
    setprivateKeyString(data.privateKey);
  });

  const sendTransaction = () => {
    // API.sendTransaction(connection, recipientPublicKey, recipientAmount)
    //   .then((data) => {
    //     updateBalance();
    //   });
  };

  const bridge = () => {
    navigate("/Bridge");
  };

  const updateBalance = () => {
    API.eth_get_balance(publicKeyString).then((data) => {
      setBalance(data);
    });
  };

  return (
    <Box>
      
    <Card>
    <Header />
      <div >
        <Typography type="body1">Polygon zkEVM testnet</Typography>
        <ul>
          <li >
            <Typography type="body2">
              RPC URL: {process.env.REACT_APP_POLYGON_ZK_EVM_RPC_URL} 
            </Typography>
          </li>
          <li >
            <Typography type="body2">{}</Typography>
          </li>
          <li >
            <Typography type="body2">
              Currency symbol: L2 ETH 
            </Typography>
          </li>
          <li >
            <Typography type="body2">
              Block explorer URL:{" "}
              <a
                href="https://public.zkevm-test.net:8443"
                target="_blank"
                rel="noreferrer"
              >
                 {process.env.REACT_APP_POLYGON_ZK_EVM_EXPLORER_URL} 
              </a>
            </Typography>
          </li>
          <li >
            <Typography type="body2">
              L1 Goerli Smart Contract:{" "}
              <a
                href={`https://goerli.etherscan.io/address/${process.env.REACT_APP_ETHEREUM_PROOF_OF_EFFICIENCY_CONTRACT_ADDRESS}`}
                rel="noreferrer"
                target="_blank"
              >
                {process.env.REACT_APP_ETHEREUM_PROOF_OF_EFFICIENCY_CONTRACT_ADDRESS}
              </a>
            </Typography>
          </li>
        </ul>
        {/* <button
          className={classes.metaMaskButton}
          disabled={
            isAddNetworkButtonDisabled || connectedProvider?.chainId === polygonZkEVMChain.chainId
          }
          onClick={onAddNetwork}
        >
        </button> */}
      </div>
    </Card>
      
      <Typography variant="h3" sx={{ mt: "1em" }}>
        ????????????
      </Typography>
      <Box>{publicKeyString}</Box>
      <Box>?????? : {balance / 1000000000} </Box>
      <Box>
        ?????? ?????? :
        <input
          name="recipientPublicKey"
          onChange={(e) => {
            setRecipientPublicKey(e.target.value);
          }}
          placeholder="?????? ??????"
        ></input>
      </Box>
      <Box>
        ????????? ?????? :
        <input
          name="recipientAmount"
          onChange={(e) => {
            setRecipientAmount(e.target.value * 1000000000);
          }}
          placeholder="????????? ??????"
        ></input>
      </Box>
      <Box>
        <Button
          variant="outlined"
          onClick={sendTransaction}
          sx={{ m: "1em 0" }}
        >
          ??????
        </Button>
      </Box>
      <Box>
        <Button variant="outlined" onClick={bridge} sx={{ m: "1em 0" }}>
          ????????? ??????
        </Button>
      </Box>
    </Box>
  );
};

export default MyWallet;
