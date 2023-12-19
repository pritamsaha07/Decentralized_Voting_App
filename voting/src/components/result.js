
import React, { useState } from 'react';
import './Result.css';

const Result = ({ state }) => {
  const [res, setRes] = useState([]);
  const { contract } = state;

  const loadResult = async () => {
    const id = document.querySelector('#id5').value;
    console.log(id);
    const transaction = await contract.addtoarray(id);
    await transaction.wait();
    console.log('Transaction is done');

    try {
      const result = await contract.showResult();
      setRes(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 style={{ fontFamily: 'fantasy'  }}>Vote Results</h1>
      <form>
        <div className="mb-3">
          <input id="id5" type="id" placeholder="Enter Candidate's ID" />
        </div>
      </form>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <button className="dark-button" type="button" onClick={loadResult}>
        CHECK THE RESULT
      </button>
      </div>

      <div style={{ margin: '20px' }}>
        <table>
          <tr>
            <th>Candidate name</th>
            <th>No of votes</th>
            <th>Party</th>
          </tr>
          {res.map((home, index) => (
            <tr key={index}>
              <td>{home.name}</td>
              <td>{home.votecount.toString()}</td>
              <td>{home.party.toString()}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Result;
