/*global chrome*/
import React, { useState, useEffect } from "react";
import { Button, Box, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Navbar";

const StartWallet = () => {
  const navigate = useNavigate();
  const [isPublicKeyExist, setIsPublicKeyExist] = useState(false);
  const handleClick = () => {
    navigate("/FirstQuestion");
  };
  chrome.storage.local.get("publicKey", (data) => {
    if (data.publicKey !== undefined && data.publicKey !== 0) {
      setIsPublicKeyExist(true);
    } else {
      setIsPublicKeyExist(false);
    }
  });

  useEffect(() => {
    if (isPublicKeyExist) {
      navigate("/MainPage");
    }
  }, [isPublicKeyExist]);
  return (
    <Box>
      <Header />
      <Typography variant="body1" sx={{ mt: "1em" }}>
        지갑을 관리합니다.
      </Typography>
      <Button variant="outlined" onClick={handleClick} sx={{ m: "1em 0" }}>
        시작하기
      </Button>
    </Box>
  );
};

export default StartWallet;
