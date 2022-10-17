
import { Box, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import logo from "../logo192.png";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/MainPage");
  };

  return (
    <Box sx={{ m: "0.4em auto 2em auto", display: "flex" }}>
      <Box sx={{ ml: "0.4em", display: "flex" }}>
        <img src={logo} />
      </Box>
      <Button
        sx={{ position: "absolute", right: "0", margin: "0 0.1em" }}
        onClick={() => {logout()}}
      >
        <AccountCircleIcon fontSize="large" sx={{ color: "#4a5a74" }} />
      </Button>
    </Box>
  );
}
export default Header;
