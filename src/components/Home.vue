<template>
  <div>
    <h1>Welcome to Stockify</h1>
    <hr>
    
    <h5>Save and Load your data based on your preference</h5>
    <h5>Start a New Day by clicking on 'End Day'</h5>
   
  </div>
</template>

<script>
export default {
    computed:{
        wallet(){
            return this.$store.getters.wallet
        }
    }
}
</script>