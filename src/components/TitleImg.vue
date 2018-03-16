<template>
<div class="titlimgs" id=""titlimgs>
  <section v-for="item in titleImgs">
   <a href="javascript:;">
      <img :src="item.imgsrc">
      <strong>{{item.title}}</strong>
   </a>
   </section>
</div>
</template>


<style scoped>
.titlimgs{width:6.0rem;margin:0 auto;}
.titlimgs section{margin-top:15px;width:2.9rem; float:left; overflow:hidden;}
.titlimgs section:nth-child(2n){float:right;}
.titlimgs section a{display:block;}
.titlimgs section a img{display:block;width:2.9rem; height:1.8rem;}
.titlimgs section strong{display:block;font:100 14px/24px  'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif; color:#333;overflow:hidden; height:20px;text-align:center; }
.listImg section span{font:100 .12px/18px  'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif; color:#333;}
</style>
<script>
//引入本地图片地址
var img = require('../images/wimg2.jpg');

export default {
     data () {
         return {
               titleImgs: [
                    {imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/4712000058ffebb6f7d0",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/6ec500135e4e3db5b3a0",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:'http://p3.pstatp.com/large/6c0600021aeb76077c21',title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/6ec800073bde6e8dfade",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/4712000058ffebb6f7d0",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/6ec800073bde6e8dfade",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:'http://p3.pstatp.com/large/6c0600021aeb76077c21',title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"http://s2.pstatp.com/site/promotion/landing_page/img/%E9%87%87%E8%8A%B1_20e2d7c5d2f81fab71411ef719cb6b0a.jpg",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/4712000058ffebb6f7d0",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/6ec500135e4e3db5b3a0",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:'http://p3.pstatp.com/large/6c0600021aeb76077c21',title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/6ec800073bde6e8dfade",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/4712000058ffebb6f7d0",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"https://p3.pstatp.com/list/6ec800073bde6e8dfade",title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:'http://p3.pstatp.com/large/6c0600021aeb76077c21',title: '十三届全国人大一次会议举行第四次全体会议'},
                    {imgsrc:"http://s2.pstatp.com/site/promotion/landing_page/img/%E9%87%87%E8%8A%B1_20e2d7c5d2f81fab71411ef719cb6b0a.jpg",title: '十三届全国人大一次会议举行第四次全体会议'}


               ]

         }
     }
}
</script>
