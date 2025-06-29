import { Web3Context } from "./web3Context";
import {
  getWeb3State,
  handleAccountChange,
  handleChainChange,
} from "../utils/web3Utils";
import { useEffect, useState } from "react";
const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({
    contractInstance: null,
    selectedAccount: null,
    chainId: null,
  });
  const handleWallet = async () => {
    const { contractInstance, selectedAccount, chainId } = await getWeb3State();
    setWeb3State({
      contractInstance,
      selectedAccount,
      chainId,
    });
  };

  useEffect(() => {
    window.ethereum.on("accountsChanged", () =>
      handleAccountChange(setWeb3State)
    );
    window.ethereum.on("chainChanged", () => handleChainChange(setWeb3State));
  }, []);

  return (
    <>
      <Web3Context.Provider value={{ web3State, handleWallet }}>
        {children}
      </Web3Context.Provider>
    </>
  );
};

export default Web3Provider;
