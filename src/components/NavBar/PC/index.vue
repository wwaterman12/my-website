<template>
  <nav class="navbar">
    <ul :class="{ letterExpand: letterExpand }">
      <li><a href="#about">About Wes</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#work">Work Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "NavBarPC",
  setup: () => {
    const letterExpand = ref(false);

    onMounted(() => {
      setTimeout(() => (letterExpand.value = true), 500);
    });

    return { letterExpand };
  },
});
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  width: 100%;

  ul {
    opacity: 0;
    display: flex;
    justify-content: flex-end;

    li {
      list-style: none;
      padding: 20px 15px;

      a {
        font-size: 14px;
        text-decoration: none;
        color: var(--light-blue);
        position: relative;

        &:after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--light-blue);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        &:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
    }
  }
}
</style>
<style>
.letterExpand {
  animation: letterExpand 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@keyframes letterExpand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

</style>
