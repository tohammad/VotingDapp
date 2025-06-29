import "./App.css";
import Web3Provider from "./context/web3Provider";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Web3Provider>
        <div className="form-grid">
          <RouterProvider router={routes}></RouterProvider>

        </div>
      </Web3Provider>
    </>
  );
}

export default App;
