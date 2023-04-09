pragma solidity >=0.7.0 <0.9.0;
// SPDX-License-Identifier: GPL-3.0

contract Vote {
    struct Candidate {
        string name;
        uint votecount;
        string party;
        uint age;
        string qualification;
        address id;
    }

    struct Voter {
        string name;
        bool hasVoted;
        bool isRegistered;
    }

    mapping(address => Candidate) contestants;
    mapping(address => Voter) voters;

    Candidate[] Candidatearray;

    function addCandidate(string memory _name, string memory _party, string memory _qualification, uint _age, address _id) public {
        contestants[_id] = Candidate(_name, 0, _party, _age, _qualification, _id);
        Candidatearray.push(contestants[_id]);
    }

    function showCandidateNames() public view returns (string[] memory) {
        string[] memory candidateNames = new string[](Candidatearray.length);
        for (uint i = 0; i < Candidatearray.length; i++) {
            candidateNames[i] = Candidatearray[i].name;
        }
        return candidateNames;
    }

    function addVoter(string memory _name, address user) public {
        voters[user].isRegistered = true;
        voters[user].name = _name;
    }
Candidate[] resultarray;
    function addVote(address user, address contestantId) public {
        require(voters[user].isRegistered, "Voter is not registered");
        require(!voters[user].hasVoted, "Voter has already casted vote");
        contestants[contestantId].votecount++;
        voters[user].hasVoted = true;
        
    }

    function addtoarray(address contestantId) public{
        resultarray.push(contestants[contestantId]);
    }

    function showResult() public view returns (Candidate[] memory) {
        return resultarray;
    }
}
