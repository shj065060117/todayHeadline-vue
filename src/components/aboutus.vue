<template>
<div id="home">
  <Header></Header>
  <Banner></Banner>
  <div class="article">
      <h1>{{title}}</h1>
      <div class="content">
        <video id="tenvideo_video_player_0" width="1px" height="1px" autobuffer="" controls="" preload="metadata" autoplay="1" x-webkit-airplay="" poster="/templates/pc/default/com/img/logo3.png" style="width: 6rem; height:3.4rem;"><source src="http://ugcdl.video.gtimg.com/d0501kslz0d.m701.mp4?vkey=3BA52276C863B92B0F288EB8F27535FC4B3FF407F7B0A9A84B592F75834FEAAC283F5972FB6229F3772C296B27FFE7AF8E80DA1BF75C876B14A1F1575B3ED5F73CEF61164A2D12A6EAFD70CB6F6903346C83DBAE0756A7A37F4C7DA786CB0088A3505F53DBB1CE38&amp;br=29&amp;platform=2&amp;fmt=auto&amp;level=0&amp;sdtfrom=v1010&amp;sdtfrom=v1010"></video>
        <p v-for="value in content">{{value}}</p>
      </div>
  </div>
 </div>
</template>
<style scoped>
.article{width:6.0rem; margin:20px auto;}
.article h1{font:100 18px/36px  "microsoft yahei"; color: #333; text-align:center;}
.article .content{overflow:hidden;}
.article .content p{font:100 14px/24px  "microsoft yahei"; color: #666; margin-bottom:15px; text-indent:2em;}
</style>
<script>
import Header from './Header'
import Banner from './Banner'
export default {
  name: 'home',
  components: {Header,Banner},
  data(){
        return{
            title:"关于我们",
            content:["惠益生（北京）生物科技有限公司，是国内专业致力于人体微生态健康管理和产品研发、品牌运营的高新技术企业。公司与国内知名研发专家、科研机构合作，创立了人体微生态健康的“6V”管理理念，提出了“抗生素滥用必将导致人体微生态医疗灾难”和“恢复人体益菌膜才是健康的根源”两大微生态理论。",
            "惠益生秉承“以菌抑菌、天敌治理、根源修复、提升自愈、形成屏障、杜绝复发”产品研发理论，不断致力于微生态健康产品创新。目前推出了针对人体胃肠道系统、口腔呼吸系统、女性私护系统、皮肤系统的功能性益生菌系列产品，并联合知名基因检测机构共同开发出了第二代16S肠道菌群基因检测评估系统与益生元膳食纤维系列微生态食品。",
            "惠益生品牌运营独创出了“实体商业+移动互联网分享+返利终端”的新零售模式，构建成为完整的个体创业孵化平台，让更多个体创业者依托惠益生强大的技术资源整合能力、产品创新能力、品牌运营能力、营销拓展能力和完善的培育复制能力，能够成功创业，共同绘制微生态健康的万亿事业蓝图。",
            "惠益生(北京)生物科技有限公司由多位生物科技研发专家、互联网资深人士共同创立，致力于微生态健康产业、产品研发及应用领域的投资与孵化，旨在做微生态健康领域的倡导及践行者，致力于益生菌研发及应用领域的产业投资与产品孵化，努力成为全球益生菌研发及应用领域的领导品牌。",
            "惠益生以科技创新为源动力，秉承“科技佑卫生命，呵护万千家庭”的理念，怀揣“提升人体体质，延长人类寿命”的愿景，依托国际领先的益生菌研发技术和高标准的质量保证体系，带领优秀的研发、生产、营销和服务团队，为人类健康而不懈努力。"]
        }
  }
}
</script>
