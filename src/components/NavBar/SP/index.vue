<template>
  <div>
    <div class="buttonWrapper" :class="{ mounted: mounted }">
      <Hamburger :isOpen="isOpen" @change="handleOpenChange" />
    </div>
    <nav class="navbar" :class="{ open: isOpen }">
      <ul>
        <li><a href="#about">About Wes</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import Hamburger from "./hamburger.vue";

export default defineComponent({
  name: "NavBarSP",
  components: {
    Hamburger,
  },
  setup: () => {
    const mounted = ref(false);
    const isOpen = ref(false);

    onMounted(() => setTimeout(() => (mounted.value = true), 500));

    const handleOpenChange = () => (isOpen.value = !isOpen.value);

    return { mounted, isOpen, handleOpenChange };
  },
});
</script>

<style scoped lang="scss">
.buttonWrapper {
  position: fixed;
  top: 12px;
  right: 12px;
  transform: translateX(150%);
  transition: transform 0.3s;
}

.buttonWrapper.mounted {
  transform: translateX(0);
}
.navbar {
  position: fixed;
  top: 42px;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.5s;

  ul {
    li {
      list-style: none;
      padding: 20px;

      a {
        font-size: 14px;
        text-decoration: none;
        color: var(--light-blue);
      }
    }
  }
}

.navbar.open {
  transform: translateX(0);
}
</style>
