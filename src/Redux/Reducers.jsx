import { Types } from "./Types";

let initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.MYDEFAULT:
      return state;

    default:
      return state;
  }
}
