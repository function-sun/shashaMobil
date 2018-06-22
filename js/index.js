//吸顶效果
//$(function(){
//	 var a = $('.hstFen'),  
//    b =a.offset();//返回或设置导航栏相对于文档的偏移(位置)  
////加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离  
//  $('.mainzong').on('scroll',function(){  
//    var c = $('.mainzong').scrollTop();  
////当滚动的屏幕距离大于等于导航栏本身离最顶端的距离时（判断条件）给它加样式（根据自己业务的条件加样式，一般如下） 
//    if(b.top>=c){  
//      a.css({'position':'fixed','top':'120px'})  
//      }else{  
//        a.css({'position':'absolute','top':'500px'})  
//      } 
//   })
//})

//跳转页面
$(function(){
	$(".areaTopMain .areamainOne").click(function(){
		window.location.href = "BondedPage.html";
	})
})
