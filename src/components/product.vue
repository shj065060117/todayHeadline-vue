<template>
<div id="home">
  <Header></Header>
  <Banner></Banner>
  <TitleImg></TitleImg>
 </div>
</template>
<script>
import Header from './Header'
import Banner from './Banner'
import TitleImg from './TitleImg'
export default {
  name: 'home',
  components: {Header,Banner,TitleImg}
}
</script>
