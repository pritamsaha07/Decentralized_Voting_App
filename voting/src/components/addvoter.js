import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddVoter=({state})=>{
    const addvoter=async()=>{
        
        const {contract}=state;
        const name=document.querySelector('#name1').value;
        const id=document.querySelector('#id1').value;
        console.log(name,id);
        const transaction=await contract.addVoter(name,id);
        await transaction.wait();
        console.log("Transaction is done");
    }
   return<>
    <div>
        <h1 style={{fontFamily:"fantasy",}}>Voter Registration</h1>
    </div>
   <div>
   <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control id="id1" type="id" placeholder="Enter Voter's ID" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control  id="name1" type="message" placeholder="Enter Votes's name" />
      </Form.Group>
      </Form>
   </div>
   <Button variant="dark" type="submit" onClick={addvoter}> PAY 0.0002 ETH TO ADD VOTER DETAILS</Button>{' '}
    </>
}

export default AddVoter