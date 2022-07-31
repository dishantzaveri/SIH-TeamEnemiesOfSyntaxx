import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");
export const UploadDocs = () => {
  const { ethereum } = window;
  const [currentAccount, setCurrentAccount] = useState("");
  const [file, setFile] = useState([]);
  const [size, setSize] = useState(null);
  useEffect(() => {
    checkIfWalletIsConnected();
    getAllDocs();
    // addDocs();
  }, []);

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    setSize(data.size);
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", reader.result);
      setFile(reader.result);
    };

    e.preventDefault();
  };
  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const docsContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    return docsContract;
  };

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllDocs = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const docsContract = getEthereumContract();
      const docs = await docsContract.getAllDocs();
      console.log(docs);
    } catch (e) {
      console.log(e);
    }
  };

  const addDocs = async (hh) => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const docsContract = getEthereumContract();
      const hash = await docsContract.addDocToBlockchain(
        "My File",
        hh,
        "pdf",
        size
      );
      console.log(hash);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadFile = async () => {
    try {
      const created = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      console.log(created.path);
      console.log(size);
      addDocs(created.path);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {currentAccount ? null : (
        <button onClick={() => connectWallet()}>Connect Wallet</button>
      )}
      <h1>Upload Docs</h1>
      <input type="file" onChange={retrieveFile} />
      <div>
        <button
          onClick={() => {
            uploadFile();
          }}
        >
          Upload
        </button>
      </div>
    </>
  );
};
