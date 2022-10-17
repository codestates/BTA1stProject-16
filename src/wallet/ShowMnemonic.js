/*global chrome*/
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

import Header from "./Navbar";
const ethers = require('ethers');

const ShowMnemonic = () => {  
  const wallet = ethers.Wallet.createRandom(); //지갑생성
  const mnemonic = wallet.mnemonic.phrase;
  const publicKey = wallet.publicKey.toString();
  const privateKey = wallet.privateKey.toString();
  chrome.storage.local.set({ publicKey: publicKey });
  chrome.storage.local.set({ privateKey: privateKey });
  chrome.storage.local.set({ mnemonic: mnemonic });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/MainPage");
  };

  return (
    <Box>
      <Header />
      <Typography variant="body1" sx={{ mt: "1em" }}>
        니모닉 구문 확인
      </Typography>
      {mnemonic}
      <Typography variant="body1" sx={{ mt: "1em" }}>
        꼭 저장해 두세요!
      </Typography>
      <Button variant="outlined" onClick={handleClick} sx={{ m: "1em 0" }}>
        시작하기
      </Button>
    </Box>
  );
};

export default ShowMnemonic;
