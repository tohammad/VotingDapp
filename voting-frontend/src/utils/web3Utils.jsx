import { ethers } from "ethers";
import abi from "../constant/abi.json";
export const getWeb3State = async () => {
  try {
    //metamask installation check
    if (!window.ethereum) {
      throw new Error("Metamask is not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = accounts[0];

    const chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    const chainId = parseInt(chainIdHex, 16);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractAddress = "0x4cd5f4bb7352c74b4b4200ea2f25dbb731e13ca2";
    //const contractAddress = "0x83A8cB9f282DD6763bca9c4bcf7977a4f5C77aB5";

    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    return { contractInstance, selectedAccount, chainId };
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};

export const handleAccountChange = (async (setWeb3State) => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const selectedAccount = accounts[0];
  console.log("Account changed to:", selectedAccount);
  setWeb3State((prevState) => ({
    ...prevState,
    selectedAccount,
  }));
});

export const handleChainChange =(async (setWeb3State) => {
  const chainIdHex = await window.ethereum.request({
    method: "eth_chainId",
  });
  const chainId = parseInt(chainIdHex, 16);
  console.log("chainId changed to:", chainId);
  setWeb3State((prevState) => ({
    ...prevState,
    chainId,
  }));
});
