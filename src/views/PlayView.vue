<template>
  <section class="game-outer">
    <div class="game-container">
      <img
        class="triangle"
        src="../assets/images/bg-triangle.svg"
        alt="triangle"
      />
      <div class="play-card">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.url"
          :class="image.class"
          @click="goToPlay(image.name)"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PlayView",

  data() {
    return {
      images: [
        {
          id: 1,
          name: "paper",
          url: "./images/icon-paper.svg",
          class: "player-paper",
        },
        {
          id: 2,
          name: "scissors",
          url: "./images/icon-scissors.svg",
          class: "player-scissors",
        },
        {
          id: 3,
          name: "rock",
          url: "./images/icon-rock.svg",
          class: "player-rock",
        },
      ],
    };
  },
  methods: {
    goToPlay(imageName) {
      this.$router.push({ name: "play-card", params: { name: imageName } });
    },
  },
};
</script>

<style scoped lang="scss">
.play-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 7vh;
  cursor: pointer;
  align-items: stretch;
  gap: 3% 10%;
}
@media (max-width: 768px) {
  .play-card {
    margin-top: 0vh;
  }
}
</style>
