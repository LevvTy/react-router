// import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Page17 from "./Component/Page17 (19-2)/Page17";
import Dashboard from "./Component/Page17 (19-2)/Dashboard";
import Products from "./Component/Page17 (19-2)/Products";
import Laptop from "./Component/Page17 (19-2)/Laptop";
import Desktop from "./Component/Page17 (19-2)/Desktop";

function App() {
  return (
    <>
      <div>
        <h1 style={{ color: "red" }}>LPL LevvTy</h1>
      </div>
      <Page17 />
    </>
  );
}

export default App;
