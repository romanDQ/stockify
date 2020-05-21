<template>
  <div class="jumbotron">
    <h1 class="display-4">Welcome To Stockify</h1>
    <p
      class="lead"
    >Looking for a way to increase your income? Then you have come to the right place!</p>
    <hr class="my-4" />
    <p>
      <strong>Instructions:</strong>
    </p>
    <p>1) Buy your desired stocks.</p>
    <p>2) To check the stock prices for the next day, click on 'End Day'.</p>
    <p>3) Sell your stocks to make income!</p>
    <router-link class="btn btn-success btn-lg" router-link to="/stocks">Get Started</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    wallet() {
      return this.$store.getters.wallet;
    }
  }
};
</script>