<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@charset "UTF-8";

html{margin:0;padding:0;border:0}
body{font-family:tahoma,arial}
body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,code,del,dfn,em,img,q,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,dialog,figure,footer,header,hgroup,nav,section{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;
/*禁止横屏时字体放大*/
	-webkit-text-size-adjust : none ;
	-moz-text-size-adjust : none ;
	-ms-text-size-adjust : none ;
	text-size-adjust : none
}
article,aside,details,figcaption,figure,dialog,footer,header,hgroup,menu,nav,section{display:block}
body{line-height:1.5;background:white}
table{border-collapse:separate;border-spacing:0}
caption,th,td{text-align:left;font-weight:normal;float:none!important}
table,th,td{vertical-align:middle}
blockquote:before,blockquote:after,q:before,q:after{content:''}
blockquote,q{quotes:""""}
a img{border:0}
:focus{outline:0}
ul,ol,li{list-style:none}
button,input,select,textarea,label{vertical-align:middle}
h1,h2,h3,h4,h6,h6{font-weight:bold;font-size:100%}
a:link{text-decoration:none;}
a:visited{text-decoration:none}
a:hover{text-decoration:underline}
select,input[type="submit"],input[type="text"],input[type="reset"],input[type="date"],input[type="checkbox"],input[type="button"],button { -webkit-appearance: none; }
body{width:100%;background-color:#FFF;color:#000;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%
}
</style>
