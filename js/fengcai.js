$(function () {
	var num
	var $a=$(".intro1 a")
	var $lis = $(".super_container .intro1 img")
	var $a2=$(".intro2 a")
	var $lis2 = $(".super_container .intro2 img")
	var $bofang=$(".introduce .bofang")
	 var $lis3=$(".intro3 img")
	 var $lis4=$(".intro4 img")
	  var $lis5=$(".intro5 img")
	 var $lis6=$(".intro6 img")
	 
	$a.mouseenter(function () {
		num = $(this).index()
		//alert(num)
		$lis.eq(num).stop().css("opacity",0.9).animate({
			width: 710,
			height: 525,
			top: -15,
			left: -15

		}, 200)
		$bofang.eq(num).stop().fadeIn(200);
	})
	$a.mouseleave(function(){
		num=$(this).index();
		$bofang.stop().eq(num).fadeOut(200);
		$lis.eq(num).stop().css("opacity",1).animate({
			width: 683.64,
			height: 500,
			top: 0,
			left: 0
		},200)
		$bofang.eq(num).stop().fadeOut(200);
	})
	
	
	$a2.mouseenter(function () {
		num = $(this).index()
		//alert(num)
		$lis2.eq(num).stop().css("opacity",0.9).animate({
			width: 780,
			height: 525,
			top: -15,
			left: -15

		}, 200)
		$bofang.eq(num).stop().fadeIn(200);
	})
	$a2.mouseleave(function(){
		num=$(this).index();
		$bofang.stop().eq(num).fadeOut(200);
		$lis2.eq(num).stop().css("opacity",1).animate({
			width: 760,
			height: 500,
			top: 0,
			left: 0
		},200)
		$bofang.eq(num).stop().fadeOut(200);
	})
	
	$lis3.mouseenter(function(){
		$lis3.stop().animate({
			width: 710,
			height: 525,
			top: -15,
			left: -15
		},200)
	})
	$lis3.mouseleave(function(){
		$lis3.stop().animate({
			width: 683.64,
			height: 500,
			top: 0,
			left: 0
		},200)
	})
	
	$lis4.mouseenter(function(){
		$lis4.stop().animate({
			width: 780,
			height: 525,
			top: -15,
			left: -15
		},200)
	})
	$lis4.mouseleave(function(){
		$lis4.stop().animate({
			width: 760,
			height: 500,
			top: 0,
			left: 0
		},200)
	})
	
	
	
	
	
	
	
	$lis5.mouseenter(function(){
		$lis5.stop().animate({
			width: 710,
			height: 525,
			top: -15,
			left: -15
		},200)
	})
	$lis5.mouseleave(function(){
		$lis5.stop().animate({
			width: 683.64,
			height: 500,
			top: 0,
			left: 0
		},200)
	})
	
	$lis6.mouseenter(function(){
		$lis6.stop().animate({
			width: 780,
			height: 525,
			top: -15,
			left: -15
		},200)
	})
	$lis6.mouseleave(function(){
		$lis6.stop().animate({
			width: 760,
			height: 500,
			top: 0,
			left: 0
		},200)
	})

})
