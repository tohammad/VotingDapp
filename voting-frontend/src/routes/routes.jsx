import { createBrowserRouter } from "react-router-dom";
import GetVoterList from "../pages/Voter/GetVoterList";
import GetCandidateList from "../pages/Candidate/GetCandidateList";
import RegisterCandidate from "../pages/Candidate/RegisterCandidate";
import RegisterVoter from "../pages/Voter/RegisterVoter";
import ElectionCommission from "../pages/ElectionCommission/ElectionCommission";
import Wallet from "../components/Wallet/Wallet";
import Navigation from "../components/Navigation/Navigation";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Wallet />
      </div>
    ),
  },
  {
    path: "register-voter",
    element: (
      <div>
        <Navigation />
        <RegisterVoter />
      </div>
    ),
  },
  {
    path: "register-candidate",
    element: (
      <div>
        <Navigation />
        <RegisterCandidate />
      </div>
    ),
  },
  {
    path: "voter-list",
    element: (
      <div>
        <Navigation />
        <GetVoterList />
      </div>
    ),
  },
  {
    path: "candidate-list",
    element: (
      <div>
        <Navigation />
        <GetCandidateList />
      </div>
    ),
  },
  {
    path: "election-commision",
    element: (
      <div>
        <Navigation />
        <ElectionCommission />
      </div>
    ),
  },
]);
