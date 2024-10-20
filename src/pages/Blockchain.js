import React, { useState } from "react";
import CryptoJS from "crypto-js";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

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

      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" type="text"
          name="brand"
          placeholder="brand"
          value={newBlock.brand}
          onChange={handleInputChange}/>
        
        <Form.Control aria-label="Last name" 
        type="text"
        name="model"
        placeholder="model"
        value={newBlock.model}
        onChange={handleInputChange}/>

        <Form.Control aria-label="Last name"
        type="text"
        name="year"
        placeholder="year"
        value={newBlock.year}
        onChange={handleInputChange} />

        <Form.Control aria-label="Last name" 
        type="text"
        name="color"
        placeholder="color"
        value={newBlock.color}
        onChange={handleInputChange}/>

        <button onClick={addBlock}>Add Block</button>
      </InputGroup>

      

      

      
      <ol>
        {block.map((blockItem, index) => (
          
          <li key={index}>
            <ListGroup>
              <ListGroup.Item>Brand: {blockItem.brand}</ListGroup.Item>
              <ListGroup.Item>Model: {blockItem.model}</ListGroup.Item>
              <ListGroup.Item>Year: {blockItem.year}</ListGroup.Item>
              <ListGroup.Item>Color: {blockItem.color}</ListGroup.Item>
              <ListGroup.Item>Predchádzajúci Hash: {blockItem.previousHash}</ListGroup.Item>
              <ListGroup.Item>Hash: {blockItem.hash}</ListGroup.Item>
              <ListGroup.Item>Time: {blockItem.time}</ListGroup.Item>
            </ListGroup>
            </li>
        ))}
      </ol>

        

    </div>
  );
}

export default Blockchain;
