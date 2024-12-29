import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

const contractAddress = '0xAe3489cb7eD3a921B04dcF227B953C46f50dd393';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_gigWorker",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_paymentAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OnlyOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferFailed",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "oldWorker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newWorker",
				"type": "address"
			}
		],
		"name": "GigWorkerUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newAmount",
				"type": "uint256"
			}
		],
		"name": "PaymentAmountUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "PaymentSent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gigWorker",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paymentAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendPayment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_newWorker",
				"type": "address"
			}
		],
		"name": "updateGigWorker",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newAmount",
				"type": "uint256"
			}
		],
		"name": "updatePaymentAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]; // Add your full ABI here

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('Not connected');
  const [contractBalance, setContractBalance] = useState('Loading...');
  const [newPaymentAmount, setNewPaymentAmount] = useState('');
  const [newWorkerAddress, setNewWorkerAddress] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initializeWeb3();
  }, []);

  const initializeWeb3 = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        
        const contractInstance = new web3Instance.eth.Contract(
          contractABI,
          contractAddress
        );
        setContract(contractInstance);

        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
          setAccount(accounts[0] || 'Not connected');
          updateContractBalance(web3Instance);
        });
      } catch (error) {
        console.error('Web3 initialization error:', error);
      }
    } else {
      alert('Please install MetaMask to use this dApp!');
    }
  };

  const connectWallet = async () => {
    try {
      setLoading(true);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
      await updateContractBalance(web3);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateContractBalance = async (web3Instance) => {
    try {
      const balance = await web3Instance.eth.getBalance(contractAddress);
      setContractBalance(web3Instance.utils.fromWei(balance, 'ether'));
    } catch (error) {
      console.error('Error updating balance:', error);
      setContractBalance('Error');
    }
  };

  const sendPayment = async () => {
    try {
      setLoading(true);
      await contract.methods.sendPayment().send({ from: account });
      await updateContractBalance(web3);
      alert('Payment sent successfully!');
    } catch (error) {
      console.error('Error sending payment:', error);
      alert('Failed to send payment.');
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentAmount = async () => {
    try {
      setLoading(true);
      const amountInWei = web3.utils.toWei(newPaymentAmount, 'ether');
      await contract.methods.updatePaymentAmount(amountInWei).send({ from: account });
      alert('Payment amount updated successfully!');
      setNewPaymentAmount('');
    } catch (error) {
      console.error('Error updating payment amount:', error);
      alert('Failed to update payment amount.');
    } finally {
      setLoading(false);
    }
  };

  const updateGigWorker = async () => {
    try {
      setLoading(true);
      await contract.methods.updateGigWorker(newWorkerAddress).send({ from: account });
      alert('Gig worker updated successfully!');
      setNewWorkerAddress('');
    } catch (error) {
      console.error('Error updating gig worker:', error);
      alert('Failed to update gig worker.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="contract-card">
        <h1 className="title">Gig Payment Contract</h1>
        
        <button className="button" onClick={connectWallet} disabled={loading}>
          {loading ? <div className="loading-spinner" /> : 'Connect Wallet'}
        </button>

        <p className="status-text">
          <strong>Connected Address:</strong> {account}
        </p>
        <p className="status-text">
          <strong>Contract Balance:</strong> {contractBalance} ETH
        </p>

        <button className="button" onClick={sendPayment} disabled={loading}>
          {loading ? <div className="loading-spinner" /> : 'Send Payment'}
        </button>

        <input
          type="number"
          className="input-field"
          placeholder="New Payment Amount (ETH)"
          value={newPaymentAmount}
          onChange={(e) => setNewPaymentAmount(e.target.value)}
        />
        <button className="button" onClick={updatePaymentAmount} disabled={loading}>
          {loading ? <div className="loading-spinner" /> : 'Update Payment Amount'}
        </button>

        <input
          type="text"
          className="input-field"
          placeholder="New Worker Address"
          value={newWorkerAddress}
          onChange={(e) => setNewWorkerAddress(e.target.value)}
        />
        <button className="button" onClick={updateGigWorker} disabled={loading}>
          {loading ? <div className="loading-spinner" /> : 'Update Gig Worker'}
        </button>
      </div>
    </div>
  );
}

export default App;