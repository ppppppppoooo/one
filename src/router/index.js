import Vue from 'vue'
import Router from 'vue-router'
import Homepage_content from '@/components/index_nr'
import meun from '@/components/meun.vue'
import meun1 from '@/components/meun/meun1'
import user from '@/components/user.vue'
import addres from '@/components/users/Address'
import order from '@/components/users/Order_record'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            component: Homepage_content
        },
        {
            path: '/meun',
            component: meun,
            children: [{
                path: '/meun',
                component: meun1,
            }]
        },
        {
            path: '/user',
            component: user,
            children: [{
                path: '/user',
                component: addres
            }, {
                path: '/order',
                component: order
            }]
        }
    ]
})
const RouterConfig = {
    mode: 'history',
    routes: Router
}