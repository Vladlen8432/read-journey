import login from "./authSlice";

export const LOGOUT = "LOGOUT";

export const logout = () => ({ type: LOGOUT });

export const loginUser = (user, token) => (dispatch) => {
  dispatch(login({ user, token }));
  localStorage.setItem("token", token);
};
