<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h6>Rules</h6>
      <div class="header">
        <div class="close" @click="$emit('close-modal')">
          <img
            class="close-img"
            src="../assets/images/icon-close.svg"
            alt="close"
          />
        </div>
      </div>
      <img
        class="rules-img"
        src="../assets/images/image-rules.svg"
        alt="rules"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  position: relative;
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 15%;
  padding: 60px 0;
  border-radius: 20px;
}
@media (max-width: 768px) {
  .modal {
    margin-top: 20%;
  }
}
.close {
  position: absolute;
  top: 32px;
  right: 30px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}
.rules-img {
  width: 100%;
  max-width: 75%;
  height: 100%;
  max-height: 85%;
}

.header {
  margin-bottom: 10%;
}

h6 {
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  position: absolute;
  top: 32px;
  left: 30px;
  color: hsl(229, 25%, 31%);
  margin: 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
