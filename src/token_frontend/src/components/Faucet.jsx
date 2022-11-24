import React, { useState } from "react";
import { token_backend } from "../../../declarations/token_backend";

function Faucet() {

  const [isDisabled, setDisabled] = useState(false);
  const [claimed, setClaimed] = useState("Gimme Gimme");

  async function handleClick(event) {
    setDisabled(true);
    const result = await token_backend.payOut();
    setClaimed(results);
    // setDisabled(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free COMP tokens here! Claim 10,000 COMP tokens to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {claimed}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
