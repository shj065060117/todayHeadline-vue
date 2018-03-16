<template>
<div id="home">
  <Header></Header>
  <Banner></Banner>
  <div class="recruit">
    <section>
        <h2>移动前端工程师</h2>
        <ul>
            <li>所属公司：京东金融</li>
            <li>所属部门：移动研发部</li>
            <li>工作地点： 大兴区</li>
            <li>招聘人数：1</li>
            <li>所属公司：京东金融</li>
            <li>学历标准：本科</li>
            <li>工作类型： 全职</li>
            <li>发布时间：2018-03-14</li>
            <li>工作年限：3年</li>
         </ul>
         <dl>
            <dt>工作内容/职位描述：</dt>
            <dd>1、负责移动端网页的前端开发； <br />
                2、负责实现移动端网页的各项功能； <br />
                3、负责提升移动端网页的前端性能； <br />
                4、持续对前端开发流程进行改进与优化，提高开发能力和效率； <br />
                5、负责移动大前端技术研究与推广，包括React Native, weex技术，负责打通三端。
            </dd>
            <dt>任职资格：</dt>
            <dd>1、 计算机相关专业本科及以上学历，3年以上工作经验；  <br />
                2、精通html5、css3、javascript、nodejs等前端开发技术，熟悉常用前端框架；  <br />
                3、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；  <br />
                4、有良好的沟通能力和团队协作能力，工作严谨、有激情、工作自主驱动、关注用户体验；  <br />
                5、有iOS，Android开发经验更佳，有React Native开发经验可加分；  <br />
                6、Github有开源项目，可加分。
            </dd>
         </dl>
     </section>
      <section>
             <h2>前端工程师</h2>
             <ul>
                 <li>所属公司：京东金融</li>
                 <li>所属部门：移动研发部</li>
                 <li>工作地点： 大兴区</li>
                 <li>招聘人数：1</li>
                 <li>所属公司：京东金融</li>
                 <li>学历标准：本科</li>
                 <li>工作类型： 全职</li>
                 <li>发布时间：2018-03-14</li>
                 <li>工作年限：3年</li>
              </ul>
              <dl>
                 <dt>工作内容/职位描述：</dt>
                 <dd>1、负责移动端网页的前端开发； <br />
                     2、负责实现移动端网页的各项功能； <br />
                     3、负责提升移动端网页的前端性能； <br />
                     4、持续对前端开发流程进行改进与优化，提高开发能力和效率； <br />
                     5、负责移动大前端技术研究与推广，包括React Native, weex技术，负责打通三端。
                 </dd>
                 <dt>任职资格：</dt>
                 <dd>1、 计算机相关专业本科及以上学历，3年以上工作经验；  <br />
                     2、精通html5、css3、javascript、nodejs等前端开发技术，熟悉常用前端框架；  <br />
                     3、具有较高的技术钻研能力、技术难点攻关能力、扎实编码能力，分析问题、解决问题的能力；  <br />
                     4、有良好的沟通能力和团队协作能力，工作严谨、有激情、工作自主驱动、关注用户体验；  <br />
                     5、有iOS，Android开发经验更佳，有React Native开发经验可加分；  <br />
                     6、Github有开源项目，可加分。
                 </dd>
              </dl>
          </section>
  </div>
 </div>
</template>
<style scoped>
.recruit{width:6.4rem; margin:20px auto;}
.recruit h2{font:100 18px/40px  "microsoft yahei"; color:#007dcd; border-top:2px solid #007dcd; margin-top:20px; padding:5px 0 0 .2rem;}
.recruit ul{overflow:hidden; padding:0 .2rem 20px .2rem;}
.recruit ul li{font:100 14px/20px  "microsoft yahei"; color: #333;float:left; width:2.9rem; margin-top:10px;}
.recruit ul li:nth-child(2n){float:right;}
.recruit dl{border-top:1px solid #CCC; padding:0 .2rem 0 .2rem;}
.recruit dl dt{font:100 16px/36px  "microsoft yahei"; color:#007dcd; padding:10px 0;}
.recruit dl dd{font:100 14px/20px  "microsoft yahei"; color: #333;}
</style>
<script>
import Header from './Header'
import Banner from './Banner'
export default {
  name: 'home',
  components: {Header,Banner}
}
</script>
