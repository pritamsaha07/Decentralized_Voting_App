import {ethers} from "ethers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const AddVote=({state})=>{
    const addvote=async()=>{
        
        const {contract}=state;
        const Candidateid=document.querySelector('#id2').value;
        const voterid=document.querySelector('#id3').value;
        console.log(Candidateid,voterid);
        const transaction=await contract.addVote(voterid,Candidateid);
        await transaction.wait();
        console.log("Transaction is done");
    }
   return<>
    <div>
        <h1 style={{fontFamily:"fantasy",}}>Vote</h1>
    </div>
   <div>
   <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control id="id2" type="id" placeholder="Enter Candidate's ID" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control  id="id3" type="id" placeholder="Enter Voter's ID" />
      </Form.Group>
      </Form>
   </div>
   <Button variant="dark" type="submit" onClick={addvote}>Pay 0.0002 ETH TO VOTE</Button>{' '}
    </>
}

export default AddVote