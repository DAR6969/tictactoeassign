import React from "react";
import { ActionsType } from "../../interfaces";
import ActionIcon from "../ActionIcon/ActionIcon";

export interface inPropsPlayer {
  name: string;
  score: number;
  action: ActionsType;
}

function Player({
  name = "Player",
  score = 0,
  action = "rock",
}: inPropsPlayer) {
  return (
    <div className="player" data-testid="player">
      <div className="score" data-testid="score">{`${name}: ${score}`}</div>
      <div className="action" data-testid="action">
        {action && <ActionIcon action={action} size={60} />}
      </div>
    </div>
  );
}

export default Player;
