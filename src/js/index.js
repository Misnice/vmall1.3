//加载css样式
//require("!style-loader!css-loader!../../dist/css/index.css");
//js区域
aaa();
function aaa(){
	console.log('测试函数中的内容');
}

//轮播
slideBox();
//轮播函数
function slideBox(){
	var index = 0; //定义一个下标
	var stop = false; //定义一个触发器
	var $li = $("#banner").find(".warp").children(".item"); //获取所有的轮播图片
	var $page = $("#banner").find(".bth-list").children(".bth"); //获取所有的圆点列表
	$page.hover(function(){
		index = $(this).index(); //把图片下标的值赋给定义下标
		$(this).addClass("active").stop(true,true).siblings().removeClass("active"); //给鼠标选中的圆点列表添加样式
		$li.eq(index).stop(true,true).fadeIn(1000).siblings().fadeOut(1000); //轮播图片淡入淡出效果
	});
	//左边点击按钮
	$(".left").click(function(){
		clearInterval(timer);
		index--;
		if(index < 0){
			index = $li.length-1;
		}
		$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
	});
	//右边点击按钮
	$(".right").click(function(){
		clearInterval(timer);
		index++;
		if(index > $li.length-1){
			index = 0;
		}
		$li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
	});
	//自动轮播图片
	var timer = setInterval(function() {
		if(stop) return;
		index++;
		if(index > $li.length-1) {
			index = 0;
		}
		$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
	},5000);
	//鼠标移入图片内，自动轮播停止
	$("#banner").mousemove(function() {
		clearInterval(timer);
	}).mouseout(function() {
		timer = setInterval(function() {
			if(stop) return;
			index++;
			if(index > $li.length-1) {
				index = 0;
			}
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
		},5000);
	});
}	

//轮播slide2
slideBox2();
function slideBox2(){
	var index = 0; //定义一个下标
	var stop = false; //定义一个触发器
	var $li = $("#banner2").find(".warp2").children(".item2"); //获取所有的轮播图片
	var $page = $("#banner2").find(".bth-list2").children(".bth2"); //获取所有的圆点列表
	$page.hover(function() {	
		index = $(this).index(); //把图片下标的值赋给定义下标
		$(this).addClass("active2").stop(true,true).siblings().removeClass("active2"); //给鼠标选中的圆点列表添加样式
		$li.eq(index).stop(true,true).fadeIn(1000).siblings().fadeOut(1000); //轮播图片淡入淡出效果
	});
	//自动轮播图片
	var timer = setInterval(function() {
		if(stop) return;
		index++;
		if(index > $li.length-1) {
			index = 0;
		}
		$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active2").stop(true, true).siblings().removeClass("active2");
	},5000);
	//鼠标移入图片内，自动轮播停止
	$("#banner2").mousemove(function() {
		clearInterval(timer);
	}).mouseout(function() {
		var timer = setInterval(function() {
			if(stop) return;
			index++;
			if(index > $li.length-1) {
				index = 0;
			}
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$page.eq(index).addClass("active2").stop(true, true).siblings().removeClass("active2");
		},5000);
	});
}
