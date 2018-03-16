<template>
<div id="home">
  <Header></Header>
  <Banner></Banner>
  <div class="join">
      <section>
           <h2>品牌市场</h2>
           <p><img src="http://p3.pstatp.com/large/442e00011c77a475aa6b" /></p>
       </section>
       <section>
             <h2>产品优势</h2>
             <p><strong>原籍菌</strong>市场上80%菌株来源为进口菌株。只有中国菌，才更符合国人体质。</p>
             <p><strong>科学组方</strong>并不是每一株益生菌都是全面手，不同菌株与益生元搭配组方，针对性治疗才能更有效。</p>
             <p><strong>安全保障</strong>从菌株采集到组方到生产，必须全线保证产品安全，不添加化学防腐剂或致过敏成分。</p>
             <p><strong>专利菌</strong>不是每株菌都有专利认证，都有自己的身份编码。只有经过功能验证的菌株，功效性和安全性才有保障。</p>
             <p><strong>高定植能力</strong>益生菌必须要在经过胃液，胆汁的考验之后，还能存活，才能有效在肠道定植发挥作用。</p>
             <p><strong>高活性</strong>益生菌必须是活的微生物，足够数量，才能发挥功效。</p>
        </section>
        <section>
             <h2>品牌体验店</h2>
             <ul>
                <li><img src="https://p3.pstatp.com/large/719c00012d27b0fb6c6c" /></li>
                <li><img src="https://p3.pstatp.com/large/66af0005e6169121acf7" /></li>
                <li><img src="https://p3.pstatp.com/large/719c00012d27b0fb6c6c" /></li>
                <li><img src="https://p3.pstatp.com/large/66af0005e6169121acf7" /></li>
             </ul>
        </section>
  </div>
 </div>
</template>
<style scoped>
.join{width:6.4rem; margin:20px auto;}
.join h2{font:700 18px/40px  "microsoft yahei"; color: #FFF; text-align:center; background:#E06278;}
.join p{font:100 14px/20px  "microsoft yahei"; color: #333; padding:0 .2rem .2rem }
.join p img{display:block; width:100%;}
.join p strong{display:block; font:700 16px/36px "microsoft yahei";}

.join ul{ padding:0 .2rem; overflow:hidden;}
.join ul li{width:2.9rem; float:left; margin-top:20px;}
.join ul li:nth-child(2n){float:right;}
.join ul li img{display:block; width:100%;}
</style>
<script>
import Header from './Header'
import Banner from './Banner'
export default {
  name: 'home',
  components: {Header,Banner}
}
</script>
