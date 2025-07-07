"use client";

import React, { useReducer } from "react";
import '@/app/styles/voting.css'

const reducer = (state, action) => {
  switch (action.type) {
    case "meriParty":
      return { ...state, meriParty: state.meriParty + 1 };
    case "aapkiParty":
      return { ...state, aapkiParty: state.aapkiParty + 1 };
    case "sabkiParty":
      return { ...state, sabkiParty: state.sabkiParty + 1 };
    default:
      return state;
  }
};

const VotingApp = () => {
  const initialState = {
    meriParty: 0,
    aapkiParty: 0,
    sabkiParty: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const options = ["meriParty", "aapkiParty", "sabkiParty"];

  return (
    <div>
      <p className="instructions">
        12. Create a simple voting application using the useReducer hook. Set up
        a reducer to manage the votes for different options. Create buttons
        representing voting options. Use the useReducer hook to access the votes
        state and dispatch actions. Allow users to vote for their preferred
        options. Display the current vote count for each option.
      </p>
      <div className="main-voting">

      <div className="vote-container">
        {options.map((candidate) => (
          <button
            key={candidate}
            onClick={() => dispatch({ type: candidate })}
            className="vote-button"
          >
          vote for '{candidate}'
          </button>
        ))}
      </div>

      <div className="result-list">
        <ul>
          {options.map((candidate) => (
            <li key={candidate}>
              {candidate}: {state[candidate]}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default VotingApp;
