import React, { useState } from "react";
import CryptoJS from "crypto-js";

function Blockchain() {
  /*const [block, setBlock] = useState([
    {
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red",
      previousHash:"",
      time:new Date().toLocaleString(),
      hash:generateHash({ 
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
        time: new Date().toLocaleString(),
        previousHash: "" 
      })
    }
  ]);*/
  const [block, setBlock] = useState([]);

  const [newBlock, setNewBlock] = useState({
    brand: "",
    model: "",
    year: "",
    color: ""
  });

  function generateHash({ brand, model, year, color, time, previousHash }) {
    const data = `${brand}${model}${year}${color}${time}${previousHash}`;
    const hash = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex); 
    return hash.substring(0, 32);
  }

  function addBlock(){

    const currentTimestamp = new Date().toLocaleString();
    let localPreviousHash;
    if (block.length > 0) {
      localPreviousHash = block[block.length - 1].hash; 
    } else {
      localPreviousHash = ""; 
    }


    const blockWithMarks = {
      ...newBlock,
      previousHash: localPreviousHash,
      time: currentTimestamp,
      hash: generateHash({ 
        ...newBlock,
        time: currentTimestamp,
        previousHash: localPreviousHash
      })
    };

    setBlock([...block, blockWithMarks]);
    setNewBlock({ brand: "", model: "", year: "", color: "" });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlock((prevBlock) => ({
      ...prevBlock,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Blockchain</h1>

      

      
      <ol>
        {block.map((blockItem, index) => (
          <li key={index}>
            <span className="block">Brand: {blockItem.brand}</span> <br />
            <span>Model: {blockItem.model}</span> <br />
            <span>Year: {blockItem.year}</span> <br />
            <span>Color: {blockItem.color}</span><br />
            <span>Predchádzajúci Hash: {blockItem.previousHash}</span><br />
            <span>Hash: {blockItem.hash}</span><br />
            <span>Time: {blockItem.time}</span>
          </li>
        ))}
      </ol>

        <input
          type="text"
          name="brand"
          placeholder="newblock.brand"
          value={newBlock.brand}
          onChange={handleInputChange}>
        </input>
        <input
          type="text"
          name="model"
          placeholder="newblock.model"
          value={newBlock.model}
          onChange={handleInputChange}>
        </input>
        <input
          type="text"
          name="year"
          placeholder="newblock.year"
          value={newBlock.year}
          onChange={handleInputChange}>
        </input>
        <input
          type="text"
          name="color"
          placeholder="newblock.color"
          value={newBlock.color}
          onChange={handleInputChange}>
        </input>

        <button onClick={addBlock}>Add Block</button>

    </div>
  );
}

export default Blockchain;
