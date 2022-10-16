import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./popup.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Transaction from "./pages/Transaction";
import MyWallet from "./pages/MyWallet";

const App: React.FC<{}> = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				{/* <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/mywallet" element={<MyWallet />} /> */}
				{/* <Route path="/*" element={<NotFound />} /> */}
				{/* </Routes>
        </div> */}
				<Home />
			</BrowserRouter>
		</div>
	);
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(
		<App />
);
