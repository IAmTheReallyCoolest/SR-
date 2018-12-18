$(function () {
	var num
	var $a=$(".intro1 a")
	var $lis = $(".super_container .intro1 img")
	var $bofang=$(".introduce .bofang")
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

})
