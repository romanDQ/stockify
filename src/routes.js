import Home from './components/Home'
import Profile from './components/profile/Profile'
import Stocks from './components/stocks/Stocks'

export const routes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/stocks', component: Stocks },
]