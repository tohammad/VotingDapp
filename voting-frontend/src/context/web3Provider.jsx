import { Web3Context } from "./web3Context";
import { getWeb3State } from "../utils/web3Utils";
const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({
    contractInstance: null,
    selectedAccount: null, 
    chainId: null,
  });
  const handleWallet = async () => {
    const [contractInstance, selectedAccount, chainId ] = await getWeb3State();
    setWeb3State({ 
      contractInstance,
      selectedAccount,
      chainId,
    });
  }
  return (
    <>
      <Web3Context.Provider value={web3State}>{children}</Web3Context.Provider>
      <button onClick={handleWallet}>Connect Wallet</button>
    </>
  ); 
};

export default Web3Provider;
