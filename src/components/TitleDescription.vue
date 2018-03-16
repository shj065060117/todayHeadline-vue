<template>
<div class="titleDescription" id=""titlimgs>
  <section v-for="item in titleDescription">
   <a href="javascript:;">
      <strong>{{item.title}}</strong>
      <span>{{item.description}}</span>
   </a>
   </section>
</div>
</template>


<style scoped>
.titleDescription{width:6.0rem;margin:0 auto 20px;}
.titleDescription section{margin-top:15px;width:100%; height:auto;overflow:hidden;}
.titleDescription section a{display:block;}
.titleDescription section a img{display:block;width:2.9rem; height:1.8rem;}
.titleDescription section strong{display:block;font:700 14px/24px  'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif; color:#000;overflow:hidden; height:24px;text-align:center; }
.titleDescription section span{display:block;font:100 .12px/18px  'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif; color:#666;}
</style>
<script>
//引入本地图片地址
var img = require('../images/wimg2.jpg');

export default {
     data () {
         return {
               titleDescription: [
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'},
                    {id:1,imgsrc:'https://p3.pstatp.com/large/5b4b0002a0a4e8fbec8c',title: '十三届全国人大一次会议举行第四次全体会议',description: '惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念。'}


               ]

         }
     }
}
</script>
