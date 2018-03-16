<template>
<div id="home">

  <Header></Header>
  <Banner></Banner>
  <div class="contactus">
       <section>
             <h2>北京天乐浩世科技文化有限公司  </h2>
             <p>地址：北京市朝阳区下甸甲路3号院1号楼尚8国际广告园C座C201</p>
             <p>邮编：100022</p>
             <p>电话：+86（10）8779 8630</p>
             <p>传真：+86（10）8779 8630</p>
             <p><img :src="imgSrcs"></p>
        </section>
  </div>
 </div>
</template>
<style scoped>
.contactus{width:6rem; margin:20px auto;}
.contactus h2{font:100 16px/40px  "microsoft yahei"; color: #007dcd;}
.contactus p{font:100 14px/20px  "microsoft yahei"; color: #333;}
.contactus p img{display:block; width:100%; border:1px solid ; margin-top:20px;}
</style>
<script>
//引入本地图片地址

var imgs = require('../images/map.jpg');

import Header from './Header'
import Banner from './Banner'
export default {
  name: 'home',
  components: {Header,Banner},
  data(){
      return{
          imgSrcs:imgs
          
      }
  }
}
</script>
