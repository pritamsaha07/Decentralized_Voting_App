import './App.css';

import Addcandidate from './components/addcandidate'; 
import AddVoter from './components/addvoter';
import AddVote from './components/vote';
import Result from './components/result';
import { useEffect,useState } from 'react';
import abi from './Vote.json'
import {ethers} from "ethers";
import { Routes, Route,Link } from "react-router-dom";


function App() {

  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(() => {
    const connectWallet = async () => {
        const contractAddress = "0xe047A81E5d0097467692d8077d7140a9a1EE6459";
        const contractAbi = abi.abi;
        try {
            const { ethereum } = window;
            if (ethereum) {
                await ethereum.request({ method: "eth_requestAccounts" });
            }
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);

         

            setState({ provider, signer, contract });
        } catch (error) {
            console.error(error);
        }
    };

    connectWallet();
}, []);

  console.log(state);
  return (
    <div className="App">

<div className="navbar">
        <div className="navbar-brand" >
          EtherElect
        </div>
        <div className="nav-links">
          <Link to="/addcandidate" className="nav-link">Candidate Registration</Link>
          <Link to="/addvoter" className="nav-link">Voter Registration</Link>
          <Link to="/addvote" className="nav-link">Vote</Link>
          <Link to="/result" className="nav-link">Result</Link>
        </div>
      </div>
  <Routes>
       
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
