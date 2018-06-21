//商品分类与所有品牌切换
$(function(){
	$(".mainTitle a:first-child").click(function(){
		$(this).css({"width":"1.02rem",
      	"height":"0.28rem",
      	"font-size":"0.14rem",
      	"color":"#e60154",
      	"padding-top":"0.13rem",
      	"border-bottom":"0.02rem solid #e60154"});
      	$(".mainTitle a:last-child").css({"border":"none","color":"#535353"});
		$(".mainClass").show();
		$(".allpinpailie").hide();
	})
	$(".mainTitle a:last-child").click(function(){
		$(this).css({"width":"1.02rem",
      	"height":"0.28rem",
      	"font-size":"0.14rem",
      	"color":"#e60154",
      	"padding-top":"0.13rem",
      	"border-bottom":"0.02rem solid #e60154"});
      	$(".mainTitle a:first-child").css({"border":"none","color":"#535353"});
		$(".allpinpailie").show();
		$(".mainClass").hide();
	})
})