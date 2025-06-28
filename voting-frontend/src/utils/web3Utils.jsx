import ethers from 'ethers';
export const getWeb3State = async () => {
  if (typeof window.ethereum === 'undefined') {
    throw new Error('MetaMask is not installed');
  }

  const web3 = new window.Web3(window.ethereum);
  await window.ethereum.request({ method: 'eth_requestAccounts' });

  const accounts = await web3.eth.getAccounts();
  const selectedAccount = accounts[0];
  const chainId = await web3.eth.getChainId();

  // Assuming contract ABI and address are defined elsewhere
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  return [contractInstance, selectedAccount, chainId];
}