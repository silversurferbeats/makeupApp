import { TOGGLE_SIDEBAR, SidebarState, SidebarActions } from "./types";
const initialState: SidebarState = {
  sideToggle: false
};

const sidebarToggleReducer = (state = initialState, action: SidebarActions) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sideToggle: !state.sideToggle };
    default:
      return state;
  }
};
export default sidebarToggleReducer;
