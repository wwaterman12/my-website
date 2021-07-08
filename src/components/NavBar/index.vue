<template>
  <nav :class="$styles.navBar">
    <ul>
      <li><a href="#about">About Wes</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#work">Work Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contant</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import $styles from "./styles.module.css";
export default defineComponent({
  name: "NavBar",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count, $styles };
  },
});
</script>
