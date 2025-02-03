import { LOGOUT } from "./authActions";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
