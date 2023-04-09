import {ethers} from "ethers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Addcandidate=({state})=>{
    const [result, setresult] = useState([]);
    const {contract}=state;
    const addcandidate=async()=>{
        const name=document.querySelector('#name').value;
        const party=document.querySelector('#party').value;
        const qualification=document.querySelector('#qualification').value;
        const age=document.querySelector('#age').value;
        const id=document.querySelector('#id').value;
        console.log(name,party,qualification,age,id);
        const transaction=await contract.addCandidate(name,party,qualification,age,id);
        await transaction.wait();
        console.log("Transaction is done");

        try {
            const result = await contract.showCandidateNames();
            setresult(result);
            console.log(result)
          } catch (error) {
            console.error(error);
          }
    }
   return<>
    <div>
        <h1 style={{fontFamily:"fantasy",}}>Candidate Registration</h1>
    </div>
   <div>
   <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control id="id" type="id" placeholder="Enter Candidate's ID" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control  id="name" type="message" placeholder="Enter Candidate's name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control  id="party" type="message" placeholder="Enter Candidate's party name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control  id="age" type="message" placeholder="Enter Candidate's Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control  id="qualification" type="message" placeholder="Enter Candidate's qualification" />
      </Form.Group>
    </Form>
   </div>
   <Button variant="dark" type="submit" onClick={addcandidate}>PAY 0.0002 ETH TO ADD CANDIDATE DETAILS</Button>{' '}

   <div>
      
      
      <div style={{ display:"flex" , justifyContent:"center"}}>
            {result.map(Candidate => <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "200px",
                      border: "5px solid",

                     }}> user={Candidate}</td>)}
        </div>
     
      </div>
    </>
}

export default Addcandidate