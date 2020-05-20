<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stockify</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/profile" activeClass="active" tag="li">
            <a>Profile</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">Wallet: {{wallet | currency}}</strong>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" @click="endDay">End Day</a>
          </li>
          <li 
          class="dropdown" 
          :class="{open: isDropdown}"
          @click="isDropdown =! isDropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save and Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" @click="saveData">Save Data</a>
              </li>
              <li>
                <a href="#" @click="getData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return{
            isDropdown: false
        }
    },
  computed: {
    wallet() {
      return this.$store.getters.wallet;
    }
  },
  methods: {
    ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'getData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData(){
        const data = {
            wallet: this.$store.getters.wallet,
            stockProfile: this.$store.getters.stockProfile,
            stocks: this.$store.getters.stocks
        }
        this.$http.put('data.json', data)
    },
    getData(){
        this.fetchData()
    }
  }
};
</script>
