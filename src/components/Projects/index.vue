<template>
  <div id="projects">
    <Card frontText="F" backText="B" />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Projects",
  components: {
    Card,
  },
  setup: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#projects {
  margin: 50px;
}
</style>
