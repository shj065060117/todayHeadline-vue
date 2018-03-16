<template>
<section class="wrap" id="wrap">
	<ul class="list" id="list">
		<li><a href="javascript:;"><img src="../images/wbanner1.jpg" alt="" /></a></li>
		<li><a href="javascript:;"><img src="../images/wbanner2.jpg" alt="" /></a></li>
		<li><a href="javascript:;"><img src="../images/wbanner3.jpg" alt="" /></a></li>
		<li><a href="javascript:;"><img src="../images/wbanner4.jpg" alt="" /></a></li>
	</ul>
	<nav id="nums">
		<a class="active" href="javascript:;"></a>
		<a href="javascript:;"></a>
		<a href="javascript:;"></a>
		<a href="javascript:;"></a>
	</nav>
</section>

</template>
<style scoped>
#wrap{position:relative;height:2.6rem; overflow: hidden;}
#wrap .list{position:absolute;top:0;left:0;width:500%;list-style:none}
#wrap .list li{float:left;width:6.4rem;color:#FFF;text-align:center;font:100 2rem/3.6rem arial}
#wrap .list li img{width: 6.4rem; height: 2.6rem; display: block;}
#wrap nav{position:absolute; left:1.5rem;bottom:3px;width:3rem;height:15px;text-align:center}
#wrap nav a{display:inline-block;width:26px; float:left; margin-left:.15rem;height:3px;background:#FFF; overflow: hidden;}
#wrap nav a.active{background:#F08300}
</style>

<script>
function WapBanner(){
	this.oWrap=document.getElementById("wrap")
	this.oList=document.getElementById("list")
	this.oNav=document.getElementById("nums");
	this.oA=this.oNav.getElementsByTagName("a");
	this.oW=this.oWrap.clientWidth;
	this.disX=0;
	this.oListL=0;
	this.len=0;
	this.iNow=0;
	this.num=0;
	this.timer=null;
	this.oW=this.oWrap.clientWidth;
}
WapBanner.prototype.init=function(){
	var This=this;

	This.oList.innerHTML+=This.oList.innerHTML;
	This.len=This.oList.children.length;
	This.oList.style.width=This.len*This.oW+"px";
	//自动播放
	This.auto();
	This.oList.addEventListener('touchstart',function(){
		This.start();
		//暂停自动播放
		clearInterval(This.timer);
	})
	This.oList.addEventListener('touchmove',function(){
		This.move();
		//暂停自动播放
		clearInterval(This.timer);
	})
	This.oList.addEventListener('touchend',function(){
		This.end();
		//自动播放
		This.auto();
	})

}
//手指按下
WapBanner.prototype.start=function(ev){
	var ev=ev||event,
		e=ev.changedTouches[0];
	this.disX=e.pageX;
	this.oList.style.transition='none';

	var num=Math.round(this.oList.offsetLeft/this.oW);
	if(num==0){
		num=this.oA.length;
		this.oList.style.left=-num*this.oW+"px";
	}
	if(-num==this.len-1){
		num=this.oA.length-1;
		this.oList.style.left=-num*this.oW+"px";
	}


	this.oListL=this.oList.offsetLeft;
}
//手指滑动
WapBanner.prototype.move=function(ev){
	var This=this,
		ev=ev||event,
		e=ev.changedTouches[0];
	//阻止向下滑动
	ev.preventDefault();
	this.oList.style.left=(e.pageX-this.disX)+this.oListL+"px";
}
//手指抬起
WapBanner.prototype.end=function(ev){
	var This=this,
		ev=ev||event,
		e=ev.changedTouches[0];
	if(this.disX>e.pageX){
		var addleng=-100
	}else{
		var addleng=100
	}

	var num=Math.round((this.oList.offsetLeft+addleng)/this.oW);
	this.oList.style.transition='.5s';
	this.oList.style.left=num*this.oW+"px";

	this.oA[this.iNow].className="";
	this.oA[-num%this.oA.length].className="active";
	this.iNow=-num%this.oA.length;
	This.num=num%(this.oA.length+1);
}
//自动播放
WapBanner.prototype.auto=function(){
	This=this;

	This.timer=setInterval(function(){
		This.num--;

		This.oList.style.transition='.3s';
		This.oList.style.left=This.num*This.oW+"px";

		This.oA[This.iNow].className="";
		This.oA[-This.num%This.oA.length].className="active";
		This.iNow=-This.num%This.oA.length;
		if(Math.abs(This.num)==This.oA.length){
			setTimeout(function(){
				This.oList.style.transition='0s';
				This.oList.style.left=0+"px";
				This.num=0;
			},300)
		}

	},3000)
}
window.onload=function(){
  var wrapbanner=new WapBanner();
  wrapbanner.init();
}


</script>
