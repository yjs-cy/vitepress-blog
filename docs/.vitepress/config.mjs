import { defineConfig } from 'vitepress'
import {nav} from './navs.js'
import {sidebar} from './sidebars.js'

export default defineConfig({
  title: "麋鹿的博客",//左上角的名称
  base:'/vitepress-blog/',
  head:[
    ['link', { rel: 'icon', href: '/logo.png' }]//页签上的logo
  ],
  themeConfig: {
    logo:'/logo.png',//左上角logo
    nav,
    sidebar,
    outline:{
      level:[2,6],
      label:'文章目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
