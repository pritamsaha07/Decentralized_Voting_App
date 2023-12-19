
import React from 'react';
import './Vote.css';

const AddVote = ({ state }) => {
    const addVote = async () => {
        const { contract } = state;
        const candidateId = document.querySelector('#id2').value;
        const voterId = document.querySelector('#id3').value;
      
        try {
          const gasLimit = 10000000; 
          const transaction = await contract.addVote(voterId, candidateId, { gasLimit });
          await transaction.wait();
          console.log('Transaction is done');
          alert('Vote added to respective candidate');
        } catch (error) {
          console.error('Error:', error.message);
          alert('Error adding vote. Please check the console for details.');
        }
      };

  return (
    <>
      <div>
        <h1 style={{ fontFamily: 'fantasy', textAlign:"center"  }}>Vote</h1>
      </div>
      <div>
        <form>
          <div className="mb-3">
            <input id="id2" type="id" placeholder="Enter Candidate's ID" />
          </div>
          <div className="mb-3">
            <input id="id3" type="id" placeholder="Enter Voter's ID" />
          </div>
        </form>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <button className="dark-button" type="button" onClick={addVote}>
         VOTE
      </button>
      </div>
     
    </>
  );
};

export default AddVote;
