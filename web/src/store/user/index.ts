import { Module } from 'vuex';

export interface AuthenticationInterface {
  authenticated: false;
  token: '';
}

const AuthenticationModule: Module<AuthenticationInterface, unknown> = {
  state: () => ({
    authenticated: false,
    token: '',
  }),
  mutations: {
    loggedIn (state: AuthenticationInterface, input: AuthenticationInterface) {
      state.authenticated = input.authenticated;
      state.token = input.token;
    },
    loggedOut (state: AuthenticationInterface) {
      state.authenticated = false;
      state.token = '';
    },
  },

  getters: {
    getLoggedIn (state: AuthenticationInterface) {
      return state.authenticated;
    },
    getToken (state: AuthenticationInterface) {
      return state.token;
    }
  }
};

export default AuthenticationModule;