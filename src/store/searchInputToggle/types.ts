//state type
export interface InputState {
  toggle: boolean;
}

//Action type
export const TOGGLE_INPUT = "TOGGLE_INPUT";

//
interface ToggleInput {
  type: typeof TOGGLE_INPUT;
}

export type TestActionType = ToggleInput;
