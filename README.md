# Decentralized Voting Application

This decentralized voting application allows users to conduct elections on the Ethereum blockchain while leveraging Hashgraph for added transparency and auditability. The application enables candidate registration, voter registration, voting, and result tracking through a user-friendly React.js frontend.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- Metamask browser extension
- Ethereum wallet with test Ether (for interacting with the Sepolia test network)
- Hashgraph account (for submitting voting messages)

## Setup Instructions

### Smart Contract Deployment

1. Navigate to the `contracts` directory.
2. Compile the Solidity smart contract using Hardhat:
   ```bash
   npx hardhat compile

Deploy the compiled smart contract to the Ethereum blockchain:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
It will return a contract address in console copy it then navigate to voting-> src ->app.js and then on line no 23 replace the existing contract address with the new copied address.


Frontend Setup
Clone the repository:
```bash
git clone <https://github.com/pritamsaha07/Decentralized_Voting_App>
```
Navigate to the project directory:
```bash
cd voting
```
Install dependencies:
```bash
npm install
```
Start the React frontend:
```bash
npm start
```
