import Vue from 'vue'
import Router from 'vue-router'
import DetailsPage from './components/DetailsPage'
import Home from './components/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: Home
    }, {
      path: '/detailspage/:id',
      component: DetailsPage,
      name: 'obj',
      props: true
    }

  ]
})