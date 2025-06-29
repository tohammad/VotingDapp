import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import "../../RegistrationForm.css";
const RegisterVoter = () => {
  const { contractInstance, selectedAccount, chainId } = useWeb3Context();
  // create all the necessary refs
  const voterNameRef = useRef(null);
  const voterAgeRef = useRef(null);
  const voterGenderRef = useRef(null);
  const voterPartyRef = useRef(null);

  const handleCandidateRegistration = async (event) => {
    try {
      // Logic for registering a candidate will go here
      console.log("Candidate registered successfully!");
    } catch (error) {
      console.error("Error registering candidate:", error);
    }
    event.preventDefault();
    const voterName = voterNameRef.current.value;
    const voterAge = voterAgeRef.current.value;
    const voterGender = voterGenderRef.current.value;
    const voterParty = voterPartyRef.current.value;

    await contractInstance.registerCandidate(
      voterName,
      voterAge,
      voterGender,
      voterParty
    );
    // Logic for registering a voter will go here
    console.log("Voter registered successfully!");
  };
  return (
    <div className="form-wrapper">
      <h2>Register Voter</h2>
      <p>This page will allow users to register as voters.</p>
      {/* Registration form and logic will go here */}
      <form className="form" onSubmit={handleCandidateRegistration}>
        <div className="form-group">
          <label htmlFor="voterName">Voter Name:</label>
          <input
            type="text"
            id="voterName"
            name="voterName"
            ref={voterNameRef}
            required
          />
          <label htmlFor="voterAge">Voter Age:</label>
          <input
            type="text"
            id="voterAge"
            name="voterAge"
            ref={voterAgeRef}
            required
          />
          <label htmlFor="voterGender">Voter Gender:</label>
          <input
            type="text"
            id="voterGender"
            name="voterGender"
            ref={voterGenderRef}
            required
          />
          <label htmlFor="voterParty">Voter Party:</label>
          <input
            type="text"
            id="voterParty"
            name="voterParty"
            ref={voterPartyRef}
            required
          />
        </div>
        <button type="submit"  className="form-submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterVoter;
