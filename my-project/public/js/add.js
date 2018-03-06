$(function(){
	$(".add_com1>li").click(function(){		
		index=$(this).index();
		$(this).css("background","#fff").siblings().css("background","#efefef")
		$(".add_com2 li").eq(index).css("display","block").siblings().css("display","none");
	})
	$(".special").click(function(){
		$(this).siblings('#category_add').css("display","inline-block")
		
	})
	$(".pp").click(function(){
		$(this).parent().css("display","none")
	})


	// function addGoods(){

	// }

	$(".button").eq(0).click(function() {
		// var ajax=new XMLHttpRequest();
		// ajax.open("post","/api/addMerchandise");
		// ajax.onreadystatechange=function(res){
		// 	console.log(res)
		// }
		// var form=new FormData();
		// form.append("goods_name",$("#goods_name").val());
		// form.append("price",$("#goods_price").val());
		// form.append("img",document.getElementById("oImg").files[0]);
		// ajax.send(form);
		// console.log(form)
		document.getElementById("frm").submit();
		




		//jquery 不支持文件上传
		// $.ajax(function(){
		// 	url:"/api/addMerchandise",
		// 	type:"post",
		// 	data:{

		// 	},
		// 	success:function(res){
		// 		console.log(res)	
		// 	}

		// })
	});
	$(".button").eq(1).click(function() {
		
		location.reload()
	});

})