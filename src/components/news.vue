<template>
<div id="home">
  <Header></Header>
  <Banner></Banner>
  <TitleDescription></TitleDescription>
 </div>
</template>
<script>
import Header from './Header'
import Banner from './Banner'
import TitleDescription from './TitleDescription'
export default {
  name: 'home',
  components: {Header,Banner,TitleDescription}
}
</script>
