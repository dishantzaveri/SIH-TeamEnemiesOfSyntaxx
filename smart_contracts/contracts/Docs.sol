// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Docs {
    uint256 docsCounter;

    event DocsUpload(
        address  uploader,
        string title,
        string ipfsHash,
        uint256 timestamp,
        string filetype,
        uint256 filesize
    );

    struct DocsStruct {
        address  uploader;
        string title;
        string ipfsHash;
        uint256 timestamp;
        string filetype;
        uint256 filesize;
    }

    DocsStruct[] docs;

    function addDocToBlockchain(string memory title, string memory ipfsHash,string memory filetype,uint256 filesize) public {
        docsCounter +=1;
        docs.push(DocsStruct(msg.sender,title,ipfsHash, block.timestamp,filetype,filesize ));
        emit DocsUpload(msg.sender,title,ipfsHash, block.timestamp,filetype,filesize);

    }

    function getAllDocs() public view returns(DocsStruct[] memory){
        return docs;
    }

    function getDocsCount() public view returns(uint256){
        return docsCounter;
    }

}   