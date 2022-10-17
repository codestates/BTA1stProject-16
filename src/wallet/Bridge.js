import { Button, Box, Typography,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Navbar";

const Bridge = () => {
  const navigate = useNavigate();

  const sendTx = () => {
    
  }
  const showState = () => {
      navigate("/MainPage");
  }
      
  return (
    <Box>
      <Header />
      <Typography variant="body1" sx={{ mt: "1em" }}>
        L2레이어로 사용할 이더를 전송합니다.
      </Typography>      
      <Box>
        전송 금액 :
        <input
          name="txAmount"
          onChange={(e) => {}}
          placeholder="받을 주소"
        ></input>
      </Box>
      <Button variant="outlined" onClick={sendTx} sx={{ m: "1em 0" }}>
        전송하기
      </Button>
      <Button variant="outlined" onClick={showState} sx={{ m: "1em 0" }}>
        상태보기
      </Button>
    </Box>
  );
};

export default Bridge;
