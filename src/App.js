import React from "react";
import Dashboard from "./Components/Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Wallet from "./Components/Pages/Wallet";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </Layout>
  );
};

export default App;
