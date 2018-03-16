<template>
<div class="listImg" id=""ListImg>
  <section v-for="item in datalists">
   <a href="javascript:;"  v-if="item.imgsrc=='arrimgs'" class="arrimgs">
     <img :src="imgs" v-for="imgs in item.arrimgs">
      <strong>{{item.title}}</strong>
      <span><i>{{item.ico}}</i>{{item.source}}<b>评论：{{item.comment}}</b></span>
   </a>
    <a href="javascript:;"  v-else>
            <img :src="item.imgsrc">
            <strong>{{item.title}}</strong>
            <span><i>{{item.ico}}</i>{{item.source}}<b>评论：{{item.comment}}</b></span>
    </a>
   </section>
</div>
</template>


<style scoped>
.listImg{width:6.0rem;margin:0 auto;}
.listImg section{margin-top:15px;overflow:hidden;}
.listImg section a{display:block;}
.listImg section strong{font:100 14px/20px  'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif; color:#333; width:3.8rem;float:left;}
.listImg section span{font:100 .12px/18px  'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif; color:#333; width:3.8rem;float:left;}
.listImg section span i{font-style:normal;color:#F00; padding-right:4px;}
.listImg section span b{font-weight:100;padding-left:4px}
.listImg section  img{width:2rem;height:1.4rem;display:block; margin:0; float:right}
.listImg section .arrimgs strong,.listImg section .arrimgs span{width:100%;}
.listImg section .arrimgs img{width:1.9rem;}
.listImg section .arrimgs img:nth-of-type(2){margin:0 .1rem;}
</style>
<script>
//引入本地图片地址
var img = require('../images/wimg1.jpg');

export default {
     data () {
         return {
               datalists: [
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:'arrimgs',title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128',arrimgs:[img,img,img]},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:img,title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128'},
                    {imgsrc:'arrimgs',title: '十三届全国人大一次会议举行第四次全体会议',ico:'热',source:'央视新闻',comment:'128',arrimgs:[img,img,img]}
               ]

         }
     }
}
</script>
