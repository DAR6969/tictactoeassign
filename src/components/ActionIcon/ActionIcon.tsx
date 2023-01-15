import React from "react";
import { ActionsType } from "../../interfaces";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

export interface inPropsActionIcon {
  action: ActionsType;
  size: number;
}

function ActionIcon({ action, ...props }: inPropsActionIcon) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };
  const Icon = icons[action];
  return <Icon {...props} />;
}

export default ActionIcon;
