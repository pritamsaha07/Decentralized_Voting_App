import './App.css';
import Home from './components/Home';
import Addcandidate from './components/addcandidate'; 
import AddVoter from './components/addvoter';
import AddVote from './components/vote';
import Result from './components/result';
import { useEffect,useState } from 'react';
import abi from './Vote.json'
import {ethers} from "ethers";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import {Outlet} from "react-router-dom";

function App() {

  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress="0x30a3103E82CA8C984C2777D0cc1c52b3fecA01dC";
      const contractAbi=abi.abi;
      try{
        const{ethereum}=window;
        if(ethereum){
          const accounts=await ethereum.request({method:"eth_requestAccounts",})

        }
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer =provider.getSigner();
        const contract= new ethers.Contract(contractAddress,contractAbi,signer);
        setState({provider,signer,contract});
      }
      catch(error){
        console.log(error);
      }
    };
    connectWallet();

  },[]); 
  console.log(state);
  return (
    <div className="App">

<Navbar bg="dark" variant="dark">
    <Container>
          <Navbar.Brand style={{fontFamily:"fantasy"}}>Decentralized Voting App</Navbar.Brand>
          <Nav className="me-auto">
          
          <Link to="/" style={{padding:"20px", border:"10px",
                      WebkitTextFillColor:"White"}}><h5 style={{fontFamily:"fantasy",}}>Home</h5></Link>
          <Link to="/addcandidate"style={{padding:"20px", border:"10px",
                      WebkitTextFillColor:"White"}}><h5 style={{fontFamily:"fantasy",}}>Candidate Registration</h5></Link>
          <Link to="/addvoter" style={{padding:"20px", border:"10px",
                      WebkitTextFillColor:"White"}}><h5 style={{fontFamily:"fantasy",}}>Voter Registration</h5></Link>
          <Link to="/addvote" style={{padding:"20px", border:"10px",
                      WebkitTextFillColor:"White"}}><h5 style={{fontFamily:"fantasy",}}>Vote</h5></Link>
          <Link to="/result"style={{padding:"20px", border:"10px",
                      WebkitTextFillColor:"White"}}><h5 style={{fontFamily:"fantasy",}}>Result</h5></Link>
          </Nav>
        </Container>
      </Navbar>
  <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="addcandidate" element={<Addcandidate state={state}></Addcandidate>}>
        </Route>
      </Routes>
      <Routes>
       <Route path="addvoter" element={<AddVoter state={state}></AddVoter>}>
        </Route>
      </Routes>
      <Routes>
      <Route path="addvote" element={<AddVote state={state}></AddVote>}>
        </Route>
      </Routes>
      <Routes>
      <Route path="result" element={<Result state={state}></Result>}>
        </Route>
      </Routes>
  
     
    </div>
  );
}

export default App;
