import React, { useState } from "react";
import { token_backend , canistedId, createActor} from "../../../declarations/token_backend";
import { AuthClient } from "@dfinity/auth-client";

function Faucet(props) {

  const [isDisabled, setDisabled] = useState(false);
  const [claimed, setClaimed] = useState("Gimme Gimme");

  async function handleClick(event) {
    setDisabled(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canistedId, {
      agentOptions: {
        identity,
      },
    });

    const result = await authenticatedCanister.payOut();
    setClaimed(result);
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
      <label>Get your free COMP tokens here! Claim 10,000 COMP tokens to your account: {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {claimed}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
