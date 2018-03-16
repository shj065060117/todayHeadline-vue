<template>
<div id="home">
  <Header></Header>
  <Banner></Banner>
  <ListImg></ListImg>
 </div>
</template>
<script>
import Header from './Header'
import Banner from './Banner'
import ListImg from './ListImg'
export default {
  name: 'home',
  components: {Header,Banner,ListImg}
}
</script>
