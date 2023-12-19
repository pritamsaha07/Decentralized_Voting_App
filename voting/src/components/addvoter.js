
import React from 'react';
import './AddVoter.css';

const AddVoter = ({ state }) => {
  const addVoter = async () => {
    const { contract } = state;
    const name = document.querySelector('#name1').value;
    const id = document.querySelector('#id1').value;
    console.log(name, id);
    const transaction = await contract.addVoter(name, id);
    await transaction.wait();
    console.log('Transaction is done');
  };

  return (
    <>
      <div>
        <h1 style={{ fontFamily: 'fantasy' ,textAlign:"center" , marginTop:"15px"}}>Voter Registration</h1>
      </div>
      <div>
        <form>
          <div className="mb-3">
            <input id="id1" type="id" placeholder="Enter Voter's ID" />
          </div>
          <div className="mb-3">
            <input id="name1" type="message" placeholder="Enter Votes's name" />
          </div>
        </form>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
      <button className="dark-button" type="button" onClick={addVoter}>
        ADD VOTER DETAILS
      </button>
      </div>
    </>
  );
};

export default AddVoter;
