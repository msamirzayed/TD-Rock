<template>
  <div class="play-game">
    <div class="container">
      <div class="paragraphs-container">
        <div class="paragraph-1">
          <p>You picked</p>
        </div>
        <div class="paragraph-2">
          <p>The house picked</p>
        </div>
      </div>

      <div class="images-container">
        <div class="image-1" :class="{ winner: win }">
          <img :src="playerImage" :class="imageClass($route.params.name)" />
        </div>
        <ResultContainer
          :showResult="showResult"
          :resultMessage="resultMessage"
          @play-again="resetGame"
          class="result-container"
        />
        <div class="image-2" v-if="showHouseImage" :class="{ winner: lose }">
          <img :src="houseImage" :class="imageClass(houseChoice)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ResultContainer from "../components/ResultContainer.vue";
export default {
  name: "PlayCard",
  components: { ResultContainer },
  data() {
    return {
      showHouseImage: false,
      houseImage: "",
      playerImage: "",
      houseChoice: "",
      playerChoice: this.$route.params.name,
      win: false,
      lose: false,
      showResult: false,
      resultMessage: "",
    };
  },
  computed: {
    ...mapGetters(["score"]),
    imageClass() {
      return function (name) {
        if (name === "paper") {
          return "player-paper";
        } else if (name === "scissors") {
          return "player-scissors";
        } else if (name === "rock") {
          return "player-rock";
        } else {
          return "";
        }
      };
    },
  },
  methods: {
    ...mapActions(["updateScore"]),
    getImageUrl(name) {
      return require(`../../public/images/icon-${name}.svg`);
    },

    playGame() {
      // Generate a random choice for the house
      const choices = ["rock", "paper", "scissors"];
      const houseChoice = choices[Math.floor(Math.random() * choices.length)];
      this.houseChoice = houseChoice;
      this.houseImage = this.getImageUrl(houseChoice);

      // Determine the winner
      let result;
      if (this.playerChoice === "rock") {
        if (houseChoice === "rock") {
          result = "tie";
        } else if (houseChoice === "paper") {
          result = "lose";
        } else if (houseChoice === "scissors") {
          result = "win";
        }
      } else if (this.playerChoice === "paper") {
        if (houseChoice === "rock") {
          result = "win";
        } else if (houseChoice === "paper") {
          result = "tie";
        } else if (houseChoice === "scissors") {
          result = "lose";
        }
      } else if (this.playerChoice === "scissors") {
        if (houseChoice === "rock") {
          result = "lose";
        } else if (houseChoice === "paper") {
          result = "win";
        } else if (houseChoice === "scissors") {
          result = "tie";
        }
      }

      // Update the score based on the result
      if (result === "win") {
        this.updateScore(1);
        this.resultMessage = "You win!";
        this.win = true;
        this.lose = false;
      } else if (result === "lose") {
        this.updateScore(-1);
        this.resultMessage = "You lose!";
        this.win = false;
        this.lose = true;
      } else {
        this.resultMessage = "It's a tie!";
        this.win = false;
        this.lose = false;
      }

      // If the score is below zero, set it to zero
      if (this.score < 0) {
        this.updateScore(-this.score);
      }

      this.showHouseImage = true;
      this.showResult = true;

      // Save score to local storage
      localStorage.setItem("score", this.score);
    },

    resetGame() {
      this.showHouseImage = false;
      this.houseChoice = "";
      this.playerChoice = this.$route.params.name;
      this.win = false;
      this.lose = false;
      this.showResult = false;
      this.resultMessage = "";
      this.playGame();
    },
  },
  mounted() {
    const name = this.$route.params.name;
    this.playerImage = this.getImageUrl(name);

    this.playGame();
  },
};
</script>

<style scoped lang="scss">
.play-game {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Barlow Semi Condensed";
  color: white;
  font-size: xx-large;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 768px) {
  .images-container {
    flex-wrap: wrap;
  }

  .result-container {
    order: 4;
    flex-basis: 100%;
  }
  .paragraphs-container {
    font-size: 1.5rem;
  }
}

.paragraphs-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90%;
}

.images-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-1 {
  margin-right: 20px;
}

.image-2 {
  margin-left: 20px;
}
</style>
