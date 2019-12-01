export const namespaced = true;

export const state = () => ({
  loggedIn: false,
  isAdmin: false,
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

export const mutations = {
  logout(state) {
    state.loggedIn = false;
    state.isAdmin = false;
    this.bearerToken = '';
    this.email = '';
    this.name = '';
  }
};
