<template>
  <div v-if="showResult">
    <p>{{ resultMessage }}</p>
    <button @click="playAgain" class="play-again">Play Again</button>
  </div>
</template>

<script>
export default {
  name: "ResultContainer",
  props: {
    showResult: {
      type: Boolean,
      required: true,
    },
    resultMessage: {
      type: String,
      required: true,
    },
  },
  methods: {
    playAgain() {
      this.$emit("play-again");
    },
  },
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.play-again {
  background-color: white;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: hsl(229, 25%, 31%);
  font-family: "League Spartan", sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 15px 60px;
  margin: 0 10px;
  &:hover {
    color: hsl(349, 71%, 52%);
  }
}
@media (max-width: 768px) {
  .play-again {
    margin: 0;
    padding: 15px 30px;
    width: 70%;
  }
}


</style>
