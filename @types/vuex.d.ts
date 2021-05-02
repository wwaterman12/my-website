import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { IDadJoke } from "~/lib/types";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    dadJoke: null | IDadJoke;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
