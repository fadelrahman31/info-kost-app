export const namespaced = true;

export const state = () => ({
  loggedIn: false,
  bearerToken: '',
  email: '',
  name: ''
});

export const getters = {
  isLoggedIn(state) {
    return state.loggedIn;
  },
  getToken(state) {
    return state.bearerToken;
  }
};
