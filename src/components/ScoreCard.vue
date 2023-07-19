<template>
  <header class="header__border">
    <div class="heading-container">
      <img src="../assets/images/logo.svg" alt="logo" />
      <div class="score-container">
        <p class="header__Score__Title">SCORE</p>
        <p class="header__Score__Score">{{ score }}</p>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ScoreCard",
  computed: {
    ...mapState(["score"]),
  },
};
</script>

<style scoped lang="scss">
.score-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.score-label {
  font-size: 1.2rem;
  font-weight: bold;
}

.score-value {
  font-size: 3rem;
  font-weight: bold;
}
</style>
