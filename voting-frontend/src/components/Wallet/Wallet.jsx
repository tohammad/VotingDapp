import { useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const { handleWallet, web3State } = useWeb3Context();
  const { selectedAccount } = web3State || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedAccount) {
      navigate("/register-candidate");
    }
  }, [selectedAccount, navigate]);

  return <button onClick={handleWallet}>Connect Wallet</button>;
};

export default Wallet;
