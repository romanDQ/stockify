import stocks from '../../data/stocks'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks
    },
    'RANDOM_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1.7 + Math.random() - 1.1)
            )
        });
    }
}

const actions = {
    //add order after {commit} later
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order)
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({ commit }) => {
        commit('RANDOM_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default {
    state, mutations, actions, getters
}