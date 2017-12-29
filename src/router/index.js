import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/pages/login'
import home from '@/components/pages/home/home'
import companyInfo from '@/components/pages/home/tab/basicInfo/companyInfo'
import homeSetting from '@/components/pages/home/tab/basicInfo/homeSetting'
import Investment from '@/components/pages/home/tab/basicInfo/Investment'
import yueChaSetting from '@/components/pages/home/tab/basicInfo/yueChaSetting'
import CofCcompany from '@/components/pages/home/tab/CofC/CofCcompany'
import CofCinfo from '@/components/pages/home/tab/CofC/CofCinfo'
import CofCmoney from '@/components/pages/home/tab/CofC/CofCmoney'
import companyData from '@/components/pages/home/tab/companyUser/companyData'
import companyRongZ from '@/components/pages/home/tab/companyUser/companyRongZ'
import companyUser from '@/components/pages/home/tab/companyUser/companyUser'
import rongziHistory from '@/components/pages/home/tab/companyUser/rongziHistory'
import account from '@/components/pages/home/tab/system/account'
import message from '@/components/pages/home/tab/system/message'
import operation from '@/components/pages/home/tab/system/operation'
import investor from '@/components/pages/home/tab/investor/investor'
import mechanism from '@/components/pages/home/tab/investor/mechanism'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'companyInfo',
          name: 'companyInfo',
          component: companyInfo
        },
        {
          path: 'homeSetting',
          name: 'homeSetting',
          component: homeSetting
        },
        {
          path: 'Investment',
          name: 'Investment',
          component: Investment
        },
        {
          path: 'yueChaSetting',
          name: 'yueChaSetting',
          component: yueChaSetting
        },
        {
          path: 'CofCcompany',
          name: 'CofCcompany',
          component: CofCcompany
        },
        {
          path: 'CofCinfo',
          name: 'CofCinfo',
          component: CofCinfo
        },
        {
          path: 'CofCmoney',
          name: 'CofCmoney',
          component: CofCmoney
        },
        {
          path: 'companyData',
          name: 'companyData',
          component: companyData
        },
        {
          path: 'companyRongZ',
          name: 'companyRongZ',
          component: companyRongZ
        },
        {
          path: 'companyUser',
          name: 'companyUser',
          component: companyUser
        },
        {
          path: 'rongziHistory',
          name: 'rongziHistory',
          component: rongziHistory
        },
        {
          path: 'account',
          name: 'account',
          component: account
        },
        {
          path: 'message',
          name: 'message',
          component: message
        },
        {
          path: 'operation',
          name: 'operation',
          component: operation
        },
        {
          path: 'investor',
          name: 'investor',
          component: investor
        },
        {
          path: 'mechanism',
          name: 'mechanism',
          component: mechanism
        },
      ]
    }
  ]
})
