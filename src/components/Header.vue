<template>
  <div id="header">
      <div id="nav">
          <router-link to="/" ><b  v-on:click="selected(this)">首页</b></router-link>
          <router-link to="/aboutus"><b  v-on:click="selected(this)">关于我们</b></router-link>
          <router-link to="/product"><b  v-on:click="selected(this)">产品中心</b></router-link>
          <router-link to="/successcase"><b  v-on:click="selected(this)">成功案例</b></router-link>
          <router-link to="/news"><b  v-on:click="selected(this)">新闻中心</b></router-link>
          <router-link to="/join"><b  v-on:click="selected(this)">招商加盟</b></router-link>
          <router-link to="/recruit"><b  v-on:click="selected(this)">人才招聘</b></router-link>
          <router-link to="/contactus"><b  v-on:click="selected(this)">联系我们</b></router-link>
          
      </div>
  </div>
</template>
<style scoped>
*{margin: 0; padding: 0; line-height:0}
::-webkit-scrollbar{background: transparent;}
#header{width: 100%; height: 40px; background: #f4f5f6; box-sizing: border-box;}
#header #nav{overflow: hidden;white-space: nowrap; overflow-x: scroll; }
#header a{display: inline-block; white-space: nowrap;font: 100 16px/40px "microsoft yahei"; color: #333; padding: 0 10px; text-decoration: none;}
#header a b{font-weight:100;}
#header a.active{color:#F00;}
#header a.router-link-exact-active{color:#F00;}
</style>
<script>
import Header from './Header'
import Banner from './Banner'
export default {
  data(){
    return{
          navs: [
              {title:"首页",paths:'/'},
              {title:"关于我们",paths:'/aboutus'},
              {title:"产品中心",paths:'/product'},
              {title:"成功案例",paths:'/successcase'},
              {title:"新闻中心",paths:'/news'},
              {title:"招商加盟",paths:'/join'},
              {title:"人才招聘",paths:'/recruit'},
              {title:"联系我们",paths:'/contactus'}
          ],
          activeName: ''
    }

  },
  mounted(){
    this.init()
    
  },
  methods:{
        selected:function(){

            var aA=event.target.parentNode.parentNode.getElementsByTagName("a");
            var iTime=2000;
            event.target.parentNode.className="active";
            var ofLeft=event.target.parentNode.offsetLeft;
        
           
        },
        init(){
            var nav=document.getElementById("nav");
            var aA=nav.getElementsByTagName("a");
            var ofL=0;
            for (let i = 0; i < aA.length; i++) {
                if(aA[i].className.indexOf("router-link-exact-active")>-1){
                    ofL=aA[i].offsetLeft;
                }
                
            }
            if (ofL<165) {
                return false;
            } else {
                    nav.scrollLeft=ofL-165;
            }
                    
           
        }
  }
}
</script>
