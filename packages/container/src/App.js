import React from "react";
import MarketingShow from "./components/MarketingShow";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingShow />
      </div>
    </BrowserRouter>
  );
};

export default App;
