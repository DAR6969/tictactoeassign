import "./App.css";
import React, { useState } from "react";
import { ActionSetType, ActionsType } from "./interfaces";
import ActionButton from "./components/ActionButton/ActionButton";
import Player from "./components/Player/Player";

// this object defines which actions loses to whom
const actions: ActionSetType = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length); //using random function to play CPU action

  const newActions = ["rock", "paper", "scissors"] as ActionsType[];

  return newActions[index];
}

export interface inPropsCalculateWinner {
  action1: ActionsType;
  action2: ActionsType;
}

function calculateWinner({ action1, action2 }: inPropsCalculateWinner) {
  if (action1 === action2) {
    // if both play the same move
    return 0;
  }
  // the actions object determines if action1 or action2 won
  else if (actions[action1].includes(action2)) {
    return -1;
  } else if (actions[action2].includes(action1)) {
    return 1;
  }

  // This shouldn't really happen, but still some error handling and edge-cases to be considered
  return null;
}

function ShowWinner({ winner = 0 }) {
  let text: string;
  switch (winner) {
    case -1:
      text = "You Win!";
      break;
    case 0:
      text = "It's a Tie!";
      break;
    case 1:
      text = "You Lose!";
      break;
  }

  return <h2 className="resulttext">{text}</h2>;
}

function App() {
  const [playerAction, setPlayerAction] = useState<ActionsType>("rock"); // defining the type for the states using generics
  const [computerAction, setComputerAction] = useState<ActionsType>("rock"); // defining the type for the states using generics

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const [winner, setWinner] = useState(0);

  // when an action is selected
  const onActionSelected = (selectedAction: ActionsType) => {
    const newComputerAction = randomAction();
    console.log({ newComputerAction });
    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner({
      action1: selectedAction,
      action2: newComputerAction,
    });

    if (newWinner) setWinner(newWinner);

    // setting the score depending on who won
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="center">
      <h1>Rock Paper Scissors</h1>
      <div>
        {/* Player tiles, one for user and one for computer with corresponding props */}
        <div className="container">
          <Player name="Player" score={playerScore} action={playerAction} />
          <Player
            name="Computer"
            score={computerScore}
            action={computerAction}
          />
        </div>

        {/* Move options for players */}
        <h2 className="chooseaction">Choose Your Move</h2>
        <div className="actionslist">
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>

        <ShowWinner winner={winner} />
      </div>
    </div>
  );
}

export default App;
