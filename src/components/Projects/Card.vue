<template>
  <div class="card" ref="card$El" @click="handleTransition">
    <div class="inner" :class="{ back: activeSide === 'back' }">
      {{ activeSide === "back" ? backText : frontText }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { delay } from "~/lib/utils";

type ActiveSide = "forward" | "back";

export default defineComponent({
  name: "Card",
  props: {
    frontText: String,
    backText: String,
  },
  setup() {
    const card$El = ref();
    const ANIMATIONS = {
      forward: `flipForward 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both`,
      back: `flipBack 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both`,
    };
    const activeSide = ref<ActiveSide>("back");

    const handleTransition = async () => {
      const newActiveSide: ActiveSide = {
        forward: "back",
        back: "forward",
      }[activeSide.value];
      card$El.value.style.animation = ANIMATIONS[newActiveSide];
      await delay(200);
      activeSide.value = newActiveSide;
    };

    return {
      card$El,
      activeSide,
      handleTransition,
    };
  },
});
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 200px;
  height: 200px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  .inner {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-blue);
  }

  .back {
    background: var(--light-blue);
  }
}
</style>

<style lang="scss">
.flipForward {
  animation: flipForward 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

.flipBack {
  animation: flipBack 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

@keyframes flipForward {
  0% {
    transform: translateZ(0) rotateY(0) scale(100%);
  }
  100% {
    transform: translateZ(160px) rotateY(180deg) scale(120%);
  }
}

@keyframes flipBack {
  0% {
    transform: translateZ(0) rotateY(0) scale(120%);
  }
  100% {
    transform: translateZ(-260px) rotateY(-180deg) scale(100%);
  }
}
</style>
