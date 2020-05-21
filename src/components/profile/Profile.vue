<template>
  <div>
    <h2>Your stocks:</h2>
    <hr />
    <app-stock v-for="(stock, i) in stocks" :key="i" :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockProfile"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>