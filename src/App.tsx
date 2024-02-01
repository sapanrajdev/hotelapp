import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservation from "./pages/reservation";
import { Layout } from "./pages/layout";
import { Dashboard } from "./pages/dashboard";
import ResultPage from "./pages/Result";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reservation/:hotelId" element={<Reservation />} />
          <Route path="success" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
