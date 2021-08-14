<template>
  <NavBar />
  <Projects />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "~/store";
import NavBar from "~/components/NavBar/index.vue";
import Projects from "~/components/Projects/index.vue";
import "~/theme.css";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Projects,
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
