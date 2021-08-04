<template>
  <NavbarPC v-if="screenWidth > 500" />
  <NavbarSP v-else />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import NavbarPC from "./PC/index.vue";
import NavbarSP from "./SP/index.vue";
import useScreenSize from "~/lib/hooks/useScreenSize";

export default defineComponent({
  name: "NavBar",
  components: {
    NavbarPC,
    NavbarSP,
  },
  setup: () => {
    const { screenWidth } = useScreenSize();
    return { screenWidth };
  },
});
</script>
