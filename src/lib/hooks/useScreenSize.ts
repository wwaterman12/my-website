import { ref, onUnmounted, onBeforeMount } from "vue";

export default () => {
  const screenWidth = ref(0);
  const screenHeight = ref(0);

  const update = () => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;
  };

  onBeforeMount(() => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;
    window.addEventListener("resize", update);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });

  return { screenWidth, screenHeight };
};
