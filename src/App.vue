<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "~/store";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    onMounted(async () => {
      await store.dispatch("getDadJoke");
      console.log(
        "%cOpening the console I see! Here's a (bad) programming joke for your troubles",
        "color: #0000A0; font-size: 16px;"
      );
      console.log(store.getters.setup);
      console.log(store.getters.punchline);
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
