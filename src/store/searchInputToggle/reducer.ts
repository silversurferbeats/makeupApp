import { TOGGLE_INPUT, InputState, TestActionType } from "./types";

const initialState: InputState = {
  toggle: false
};

const toggleReducer = (state = initialState, action: TestActionType) => {
  switch (action.type) {
    case TOGGLE_INPUT:
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export default toggleReducer;
