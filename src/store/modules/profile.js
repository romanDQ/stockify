const state = {
    wallet: 8000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(el => el.id == stockId)
        if (record) {
            record.quantity += quantity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.wallet -= stockPrice * quantity
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(el => el.id == stockId)
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record))
        }
        state.wallet += stockPrice * quantity
    },
    'SET_PROFILE' (state, profile){
        state.wallet = profile.wallet
        state.stocks = profile.stockProfile ? profile.stockProfile: []
    }
}

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    stockProfile(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    wallet(state) {
        return state.wallet
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}