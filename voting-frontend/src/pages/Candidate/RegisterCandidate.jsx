import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import "../../RegistrationForm.css";
const RegisterCandidate = () => {
  const { web3State } = useWeb3Context();
  const { contractInstance } = web3State;
  // create all the necessary refs
  const candidateNameRef = useRef(null);
  const candidateAgeRef = useRef(null);
  const candidateGenderRef = useRef(null);
  const candidatePartyRef = useRef(null);

  const handleCandidateRegistration = async (event) => {
    try {
      event.preventDefault();
      const candidateName = candidateNameRef.current.value;
      const candidateAge = candidateAgeRef.current.value;
      const candidateGender = candidateGenderRef.current.value;
      const candidateParty = candidatePartyRef.current.value;

      const result = await contractInstance.registerCandidate(
        candidateName,
        candidateParty,
        candidateAge,
        candidateGender
      );
      console.log("Transaction hash:", JSON.stringify(result));
      console.log("Candidate registered successfullyyyy!");
    } catch (error) {
      console.error("Error registering candidate:", error);
    }
    // Logic for registering a candidate will go here
  };
  return (
    <div className="form-wrapper">
      <h2>Register Candidate</h2>
      <p>This page will allow users to register as candidates.</p>
      {/* Registration form and logic will go here */}
      <form className="form" onSubmit={handleCandidateRegistration}>
        <div className="form-group">
          <label htmlFor="candidateName">Candidate Name:</label>
          <input
            type="text"
            id="candidateName"
            name="candidateName"
            ref={candidateNameRef}
            required
          />
          <label htmlFor="candidateAge">Candidate Age:</label>
          <input
            type="text"
            id="candidateAge"
            name="candidateAge"
            ref={candidateAgeRef}
            required
          />
          <label htmlFor="candidateGender">Candidate Gender:</label>
          <input
            type="text"
            id="candidateGender"
            name="candidateGender"
            ref={candidateGenderRef}
            required
          />
          <label htmlFor="candidateParty">Candidate Party:</label>
          <input
            type="text"
            id="candidateParty"
            name="candidateParty"
            ref={candidatePartyRef}
            required
          />
        </div>
        <button type="submit" className="form-submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterCandidate;
