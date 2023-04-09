import { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Result=({state}) => {
  const [res, setres] = useState([]);
  const {contract} = state;
  const loadResult = async () => {
    const id=document.querySelector('#id5').value;
    console.log(id);
    const transaction=await contract.addtoarray(id);
    await transaction.wait();
    console.log("Transaction is done");
               try {
                const result = await contract.showResult();
                setres(result);
                console.log(result)
              } catch (error) {
                console.error(error);
              }
            };
return(
<>
<h1 style={{fontFamily:"fantasy",}}>Vote Results</h1>
<Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control id="id5" type="id" placeholder="Enter Candidate's ID" />
    </Form.Group>
    </Form>
<Button variant="dark" type="submit" onClick={loadResult}>Pay 0.0002 ETH TO CHECK THE RESULT</Button>{' '}

   <div>
      {res.map(home =><tr> <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "200px",
                    }}>{home.name}</td> 
                    <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}>{home.votecount.toString()}</td> <td style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}>{home.party.toString()}</td> </tr>   )}
      
    </div>
</>
);
};

export default Result