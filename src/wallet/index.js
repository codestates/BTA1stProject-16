
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import Box from "@mui/material/Box";

import Bridge from "./Bridge";
import FirstPage from "./StartWallet";
import FirstQuestion from "./CreateWallet";
import InputPassword from "./InputPassword";
import ShowMnemonic from "./ShowMnemonic";

import MainPage from "./LockWallet";
import MyWallet from "./MyWallet";
import InitPage from "./InitPage";
import RecoveryPassword from "./RecoveryPassword";

const history = createMemoryHistory();

const Wallet = () => {
  return (
    <Box sx={{ width: "30em", height: "34em" }}>
      <MemoryRouter history={history}>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="/FirstQuestion" element={<FirstQuestion />} />
          <Route path="/InputPassword" element={<InputPassword />} />
          <Route path="/ShowMnemonic" element={<ShowMnemonic />} />
          <Route path="/InputPassword" element={<InputPassword />} />
          <Route path="/Bridge" element={<Bridge />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/MyWallet" element={<MyWallet />} />
          <Route path="/InitPage" element={<InitPage />} />
          <Route path="/RecoveryPassword" element={<RecoveryPassword />} />
        </Routes>
      </MemoryRouter>
    </Box>
  );
};

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Wallet />);
export default Wallet;
