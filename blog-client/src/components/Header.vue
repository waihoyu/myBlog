<!-- 
 * @description: 
 * @fileName: head.vue 
 * @author: Wai HoYu 
 * @date: 2019-10-14 23:38:19
 * @后台人员:  
 * @version: V1.0.5 
!-->
           
<!--  -->
   <template>
       <div class='site-header'>
           <div class="site-header-wrap">
               <div class="site-header-inside">
                   <div class="site-branding">
                       <p class="profile">
                           <router-link to="/index">
                                <img src="../assets/logo.png" alt="">
                           </router-link>
                       </p>
                       <div class="site-identity">
                           <h1>赵四</h1>
                           <p>web developer</p>
                       </div>
                       <div class="site-nav-inside">
                           <ul class="menu">
                               <li class="menu-item" v-for="(item, index) in list" :key="index">
                                   <router-link :to="item.path">{{item.title}}</router-link>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </template>
           
   <script  type="text/ecmascript-6">
//    import index from '@com'
       //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
       //例如：import 《组件名称》 from '《组件路径》';
       export default {
           name: 'Header',
           data() {
           //这里存放数据
           return { 
                  list: [
                      {
                          title: "home",
                          path: '/index'
                      },{
                          title: "about",
                          path: '/about'
                      },{
                          title: "note",
                          path: '/note'
                      }
                  ]  
               };
           },
           props: {
           //这里存放属性
                                        
           },
           //import引入的组件需要注入到对象中才能使用
           components: {
                            
            },
           //监听属性 类似于data概念
           computed: {
                               
           },
           //监控data中的数据变化
           watch: {
                               
           },
           //方法集合
           methods: {
                        
           },
           //生命周期 - 创建完成（可以访问当前this实例）
           created() {
                              
           },
           //生命周期 - 挂载完成（可以访问DOM元素）
           mounted() {
                         
           },
           //生命周期 - 创建之前
           beforeCreate() { 
                         
           },
           //生命周期 - 挂载之前
           beforeMount() { 
                        
           },
           //生命周期 - 更新之前
           beforeUpdate() { 
                       
           },
           //生命周期 - 更新之后
            updated() { 
                         
           },
           //生命周期 - 销毁之前
           beforeDestroy() { 
                        
            },
           //生命周期 - 销毁完成
           destroyed() { 
                               
           },
           //如果页面有keep-alive缓存功能，这个函数会触发
           activated() { 
                           
           },
   }
   </script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    //@import url(); 引入公共css类
    .header{
        background-color red;
    }
    ul{
        padding 0
    }
    li{
        list-style none
    }
    a {
        text-decoration none;
    }
    .site-header {
        // display none;
        // float: left;
        background #1d1d1d;
        color #fff;
        height  100%;
        left 0;
        // positin fixed;
        position: absolute;
        text-align center;
        top 0;
    }
    .profile img {
        width  100px;
        border  2px solid #d4a259;
        border-radius 50%;
    }
    .site-identity {
        padding-bottom 1.6em;
    }
    .site-identity h1 {
        font-size 30px;
        color rgb(102, 102, 102);
    }
    .menu {
        font-size 0.8rem;
        color  #aaa;
        line-height 1.5;
        letter-spacing 0.15em;
        text-transform uppercase;
        border-bottom 1px solid #333;
    }
    .menu-item{
        border-top 1px solid #333;
        padding 0.5rem 0;
    }
    // .bottom {
    //          border-bottom 1px solid #333;
    // }
    .menu-item a{
        color #aaa;
        cursor pointer;
    }
    .menu-item a:hove {
        color #d4a259;
    }
    .menu-item-select {
        color #d4a259 !important;
    }
    @media only screen and (min-width 1001px){
        .site-header {
            width 300px;
        }
        .site-header-inside {
            padding-left 30px;
            padding-right 30px;
            padding-bottom 3.33333em;
            padding-top 3.333333em;
        }
    }
    @media only screen and (min-width:801px) and (max-width: 1001px){
        .site-header {
            width 30vw;
        }
        .site-header-inside {
            padding-bottom 3.3333em;
            padding-top 3.3333em
        }
    }
    @media only screen and (max-width 800px){
        .site-header{
            width 100%;
            height 78px;
        }
        .profile img{
            width 50px;
        }
    }
    .site-header-wrap {
        height 100%;
        overflow auto;
        -webkit-overflow-scrolling touch;
        position relative;
    }
</style>