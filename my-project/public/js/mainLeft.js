$(function(){
	$(".nav_con2>ul>li:not(:last)").click(function(){
		var index=$(this).index();
		
		$(this).siblings().children('ul').css("display","none");
		if($(this).children('ul').css("display")=="block"){
			$(this).children('ul').css("display","none");
			$(this).css("background","url(/images/menu_"+(index+1)+".png) 7px 0px no-repeat #575757");
		}else{
			$(this).children('ul').css("display","block");
			$(this).css("background","url(/images/menu1_"+(index+1)+".png) 7px 0px no-repeat #575757");
		}
	})
	// $(".nav_con2>ul>li:last").click(function(){
	// 	if($(this).children('ul').css("display")=="block"){
	// 		$(this).children('ul').css("display","none");
	// 		$(this).css("background","url(/images/menu_15.png) 7px 0px no-repeat #575757");
	// 	}else{
	// 		$(this).children('ul').css("display","block");
	// 		$(this).css("background","url(/images/menu1_15.png) 7px 0px no-repeat #575757");
	// 	}
	// }

})