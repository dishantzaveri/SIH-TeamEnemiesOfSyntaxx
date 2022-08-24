import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";
import { Web3Storage } from "web3.storage";
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");
export const UploadDocs = () => {
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [fileType, setFileType] = useState("");
  const uploadFile2 = async () => {
    try {
      const web3 = new Web3Storage({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVlOThGNzY1YjgzRGU0NTRhM2JDMzZjMDA1MTFFNjgzZTIxNkQwQTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA5NDA2MTQyODQsIm5hbWUiOiJNZW50b3JEb3RzIn0.FkP0BvIf_J6_ToxB9ER-QW01uukz5W5Me-mcoT1OYJI",
      });

      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = 10;
      for (var i = 0; i < 10; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      console.log(file);
      const ext = file.name.split(".").pop();
      setFileType(ext);
      const fileName = `${result}.${ext}`;
      const newFile = new File([file], fileName, { type: file.type });
      const cid = await web3.put([newFile], {
        name: fileName,
      });
      console.log(cid);
      addDocs(cid, result, ext);
    } catch (e) {
      console.log(e);
    }
  };
  const { ethereum } = window;
  const [currentAccount, setCurrentAccount] = useState("");
  const [size, setSize] = useState(null);
  useEffect(() => {
    checkIfWalletIsConnected();
    getAllDocs();
  }, []);

  const retrieveFile = (e) => {
    e.preventDefault();
    const files = e.target.files;
    console.log(files);
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setSize(size);
    setData(null);
    // Limit to either image/jpeg, image/jpg or image/png file
    if (!fileTypes.includes(type)) {
      return false;
    }
    // Check file size to ensure it is less than 2MB.
    if (size / 1024 / 1024 > 2) {
      return false;
    }

    reader.readAsDataURL(files[0]);
    setFile(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target?.result);
    };
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

  const addDocs = async (hh, fileName, type) => {
    // https://ipfs.io/ipfs/bafybeibnvzxlkgu3ysghnmcmkdrzhtxq3isru7f5lb4bp7pimfkzijcaje/hihihosdele.PNG
    try {
      if (!ethereum) return alert("Please install metamask");
      const docsContract = getEthereumContract();
      const hash = await docsContract.addDocToBlockchain(
        fileName,
        hh,
        type,
        size
      );
      console.log(hash);
    } catch (e) {
      console.log(e);
    }
  };

  // Deprecated Function

  // const uploadFile = async () => {
  //   try {
  //     const created = await client.add(file);
  //     const url = `https://ipfs.infura.io/ipfs/${created.path}`;
  //     console.log(created.path);
  //     console.log(size);
  //     addDocs(created.path);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      {currentAccount ? null : (
        <button onClick={() => connectWallet()}>Connect Wallet</button>
      )}
      <h1>Upload Docs</h1>
      <input type="file" onChange={(e) => retrieveFile(e)} />
      <div>
        <button
          onClick={() => {
            uploadFile2();
          }}
        >
          Upload
        </button>
      </div>
    </>
  );
};
