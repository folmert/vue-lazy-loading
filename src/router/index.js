import Vue from 'vue'
import Router from 'vue-router'

const Hello = () => import(/* webpackChunkName: "hello" */'@/components/Hello')
const Bye = () => import(/* webpackChunkName: "bye" */'@/components/Bye')
const Moin = () => import(/* webpackChunkName: "moin" */'@/components/Moin')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:      '/',
            name:      'Hello',
            component: Hello
        },
        {
            path:      '/hello',
            name:      'Hello',
            component: Hello
        },
        {
            path:      '/bye',
            name:      'Bye',
            component: Bye
        },
        {
            path:      '/moin',
            name:      'Moin',
            component: Moin
        }
    ]
})
