import logo from './logo.svg';
import './App.css';

const {ethers} = require('ethers');
const contract_ABI = require("./MyMessage.json");

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

async function withdraw() {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract('0x54210cA1471b1064df6C525B5980a68361E5129e', contract_ABI.abi, signer);

    try {
      const transaction = await contract.withdraw();
      await transaction.wait();
      console.log('Money withdrawn');
    } catch (err) {
      console.error('Error:', err);
    }
  }
}



function App() {
  return (
    <div>
    <button onClick={withdraw}>Withdraw</button>
  </div>

  );
}

export default App;
