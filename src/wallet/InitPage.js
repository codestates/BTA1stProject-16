/*global chrome*/
import { useNavigate } from "react-router-dom";
import {  Box } from "@mui/material";

const InitPage = () => {
  const navigate = useNavigate();
  chrome.storage.local.set({ password: 0 });
  chrome.storage.local.set({ publicKey: 0 });
  chrome.storage.local.set({ privateKey: 0 }, () => {
    navigate("/");
  });

  return <Box></Box>;
};

export default InitPage;
