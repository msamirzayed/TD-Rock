<template>
  <div class="home">
    <div class="play-view">
      <score-card></score-card>
    </div>
    <button
      class="outline-button"
      @click="showModal = true"
      @close-modal="showModal = false"
    >
      Rules
    </button>
    <RouterView></RouterView>
    <modal-card
      v-show="showModal"
      @close-modal="showModal = false"
    ></modal-card>
  </div>
</template>

<script>


import ModalCard from "@/components/ModalCard.vue";
import ScoreCard from "@/components/ScoreCard.vue";

export default {
  name: "HomeView",
  components: {
    ModalCard,
    ScoreCard,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped lang="scss">
.play-view {
  display: flex;
  justify-content: center;
}
.outline-button {
  position: absolute;
  right: 50px;
  bottom: 20vh;
  width: 200px;
  color: white;
}
@media (max-width: 1024px) {
  .outline-button {
    bottom: 1px;
  }
}
</style>
