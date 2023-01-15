import React from "react";
import { ActionsType } from "../../interfaces";
import ActionIcon from "../ActionIcon/ActionIcon";

export interface inPropsActionButton {
  action: ActionsType;
  onActionSelected: (selectedAction: string) => void;
  testid?: string; //for unit-tests
}

function ActionButton({
  action = "rock",
  onActionSelected,
  testid,
}: inPropsActionButton) {
  return (
    <button
      className="round-btn"
      onClick={() => onActionSelected(action)}
      data-testid={testid}
    >
      <ActionIcon action={action} size={20} />
    </button>
  );
}

export default ActionButton;
