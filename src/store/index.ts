import { InjectionKey } from "vue";
import {
  createStore,
  Store,
  useStore as baseUseStore,
  ActionTree,
  ActionContext,
  MutationTree,
  GetterTree,
} from "vuex";
import { IDadJoke } from "~/lib/types";
import fetchDadJoke from "~/api/dadJokes";

interface State {
  dadJoke: IDadJoke | null;
}
const state: State = {
  dadJoke: null,
};

const getters: GetterTree<State, any> = {
  setup: ({ dadJoke }) => dadJoke?.setup,
  punchline: ({ dadJoke }) => dadJoke?.punchline,
};

interface Actions<S, R> extends ActionTree<S, R> {
  getDadJoke: (context: ActionContext<S, R>) => Promise<void>;
}

const actions: Actions<State, any> = {
  async getDadJoke({ commit }) {
    const dadJoke = await fetchDadJoke();
    commit("SET_DAD_JOKE", dadJoke);
  },
};

const mutations: MutationTree<State> = {
  SET_DAD_JOKE(state, joke: IDadJoke) {
    state.dadJoke = joke;
  },
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  getters,
  actions,
  mutations,
});

export function useStore() {
  return baseUseStore(key);
}
