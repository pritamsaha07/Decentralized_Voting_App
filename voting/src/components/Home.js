import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample() {
  return (
    <Card>
      <Card.Header><h2 style={{fontFamily:"fantasy",}}>How Candidate registration process will be done</h2></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            To register as a voting candidate, a user will need to call the addCandidate function of the Vote smart contract, passing in the required parameters including the candidate's name, party, qualification, age and Ethereum address. The function will then create a new Candidate struct with the provided information and store it in the contestants mapping with the candidate's Ethereum address as the key. Additionally, the Candidate struct will be added to the Candidatearray array to keep track of all the registered candidates. Once registered, the candidate will be able to receive votes from registered voters.{' '}
          </p>
         
        </blockquote>
      </Card.Body>
      <Card.Header><h2 style={{fontFamily:"fantasy",}}>How Voter registration process will be done </h2></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            To register as a voter, a user will need to interact with the contract using a blockchain wallet application such as MetaMask. After connecting to the blockchain network where the Vote smart contract is deployed, user will need to call the addVoter function and provide the necessary parameters such as user's name and Ethereum address.

Once the function is executed, my details will be stored as a new Voter struct in the voters mapping with user's Ethereum address as the key. Moreover, the isRegistered field of the Voter struct will be set to true, indicating that the user is now a registered voter in the smart contract.

After registration, user will be able to cast my vote by calling the addVote function with the Ethereum address of the candidate that I want to vote for. However, user can only vote once, as the hasVoted field of my Voter struct will be set to true after user's vote is recorded.{' '}
          </p>
         
        </blockquote>
      </Card.Body>
      <Card.Header><h2 style={{fontFamily:"fantasy",}}>How voting process will be done</h2></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            To cast a vote in the Vote smart contract, you must first be a registered voter by calling the addVoter function with your name and Ethereum address. Once registered, you can cast your vote by calling the addVote function and passing in the Ethereum address of the candidate that you want to vote for.

When the addVote function is called, it checks that the voter is registered and has not already cast their vote. If these conditions are met, the function adds one to the votecount field of the Candidate struct associated with the provided Ethereum address, and sets the hasVoted field of the voter's Voter struct to true.

It is important to note that once a vote has been cast, it cannot be changed or revoked. Therefore, voters should be careful when selecting the candidate to vote for.{' '}
          </p>
         
        </blockquote>
      </Card.Body>
      <Card.Header><h2 style={{fontFamily:"fantasy",}}>How result will show up to you</h2></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            To check the result of the voting process in the Vote smart contract, you can call the showResult function. This function returns an array of all the Candidate structs that were registered in the contestants mapping, including their names, vote count, party, age, qualification, and Ethereum address.

To see the result of the vote, you can examine the votecount field of each candidate's Candidate struct. The candidate with the highest votecount field value is the winner of the election.

It is important to note that the showResult function only shows the current result of the vote, and it is possible that the result may change if additional votes are added to the votecount field of any candidate's Candidate struct.{' '}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
    
  );
}

export default WithHeaderAndQuoteExample;