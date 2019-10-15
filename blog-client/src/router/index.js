/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-10-15 05:02:20
 *@version: V1.0.0
*/

import Vue      from 'vue';
import Router   from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Header   from '@/components/Header';
import Content  from '@/components/Home';
import About    from '@/components/About';
import Note     from '@/components/Note';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        components: {
            header: Header,
            main: Content
        }
    },
    {
        path: '/about',
        name: 'about',
        components: {
            header: Header,
            main: About
        }
    },
    {
        path: '/note',
        name: 'note',
        components: {
            header: Header,
            main: Note
        }
    }     
  ]
})
