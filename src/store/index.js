import { createStore } from "vuex";

export default createStore({
  state: {
    score: parseInt(localStorage.getItem("score") || 0),
  },
  getters: {
    score: (state) => state.score,
  },
  mutations: {
    updateScoreMutation(state, payload) {
      const newScore = state.score + payload;
      state.score = newScore < 0 ? 0 : newScore;
      localStorage.setItem("score", state.score);
    },
  },
  actions: {
    updateScore({ commit }, payload) {
      commit("updateScoreMutation", payload);
    },
  },
  modules: {},
});
