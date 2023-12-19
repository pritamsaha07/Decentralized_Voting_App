import { useState } from "react";
import './AddCandidate.css';  
const AddCandidate = ({ state }) => {
  const [result, setResult] = useState([]);
  const { contract } = state;

  const addCandidate = async () => {
    const name = document.querySelector('#name').value;
    const party = document.querySelector('#party').value;
    const qualification = document.querySelector('#qualification').value;
    const age = document.querySelector('#age').value;
    const id = document.querySelector('#id').value;
    console.log(name, party, qualification, age, id);
    const transaction = await contract.addCandidate(name, party, qualification, age, id);
    await transaction.wait();
    console.log("Transaction is done");

    try {
      const result = await contract.showCandidateNames();
      setResult(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <h1 style={{ fontFamily: "fantasy", textAlign:"center" , marginTop:"15px"}}>Candidate Registration</h1>
      </div>
      <div>
        <form>
          <div className="mb-3">
            <input id="id" type="text" placeholder="Enter Candidate's ID" style={{ width: "100%", marginTop:"5px" }} />
          </div>
          <div className="mb-3">
            <input id="name" type="text" placeholder="Enter Candidate's name" style={{ width: "100%" }} />
          </div>
          <div className="mb-3">
            <input id="party" type="text" placeholder="Enter Candidate's party name" style={{ width: "100%" }} />
          </div>
          <div className="mb-3">
            <input id="age" type="text" placeholder="Enter Candidate's Age" style={{ width: "100%" }} />
          </div>
          <div className="mb-3">
            <input id="qualification" type="text" placeholder="Enter Candidate's qualification" style={{ width: "100%" }} />
          </div>
        </form>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <button className="dark-button" onClick={addCandidate}>
        ADD CANDIDATE DETAILS
      </button>
    </div>
      </div>
    

      <div>
        <div className="result-container">
          {result.map(candidate => (
            <div key={candidate} className="result-item">
              {candidate}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddCandidate;
