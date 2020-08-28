import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Redirect, Router, Link } from "@reach/router";
import PrdList from "./views/PrdList";
import NewPrd from "./views/NewPrd";
import Prd from "./views/Prd";
import Main from "./views/Main";
import EditPrd from "./views/EditPrd";
// import DeletePrd from "./views/DeletePrd";

function App() {
  return (
    <div className="App">
      <Link to="/main">Main</Link> | <Link to="/prds">All Products</Link> |{" "}
      <Link to="/prds/new">Create New Product</Link>
      <Router>
        <Redirect from="/" to="/main" noThrow="true" />
        <Main path="/main" />
        <PrdList path="/prds" />
        <NewPrd path="/prds/new" />
        <Prd path="/prds/:id" />
        <EditPrd path="/prds/:id/Edit" />
        {/* <DeletePrd path="/prds/:id/Delete" /> */}
      </Router>
    </div>
  );
}

export default App;
  