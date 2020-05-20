import Vue from 'vue'

export const getData = ({commit}) => {
    Vue.http.get('data.json')
    .then(res => res.json())
    .then(data => {
        if(data){
            const stocks = data.stocks
            const wallet = data.wallet
            const stockProfile = data.stockProfile

            const profile = {
                stockProfile,
                wallet
            }

            commit('SET_STOCKS', stocks)
            commit('SET_PROFILE', profile)
        }
    })
}