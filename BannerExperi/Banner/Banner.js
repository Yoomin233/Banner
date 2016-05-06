function includeExtFile(filePath,fileType){
	if(fileType=="css"){
		var CSS=document.createElement("link");
		CSS.setAttribute("rel","stylesheet");
		CSS.setAttribute("type","text/css");
		CSS.setAttribute("href",filePath);
		document.getElementsByTagName("head")[0].appendChild(CSS);
	}
};
includeExtFile("Banner/CSS/Banner.css","css");
;(function($){
    //BannerScroll jQuery plug-in by Yoomin @ 2016-05-06 16:39
    $.fn.extend({
    	BannerScroll:function(opt,callback){
    		if(!opt)var opt={};
    		var _btnR=$("#"+opt.right);//获取左右卷动按钮ID
    		var _btnL=$("#"+opt.left);
    		var speed=opt.speed?parseInt(opt.speed,10):500; //卷动速度，数值越大，速度越慢（毫秒）
            var timer=opt.timer?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
    		var current=opt.current?parseInt(opt.current):0;//起始页，默认为0（第一页）
    		var _inner=this.eq(0).find("#inner");//获取要卷动的元素
    		var itemCount=_inner.children().length;//获取inner内部元素的个数
    		var innerWidth=itemCount+"00%";//获取内部容器宽度
    		_inner.css({"width":innerWidth})//设置内部容器宽度
    		.children().css({"width":(100/itemCount)+"%"});//设置内部容器里的item宽度
    		var _indicator=this.eq(0).find("."+(opt.pointerGroup?opt.pointerGroup:"pointerGroup"));//获取小圆点们的父元素
    		//设置小圆点和起始页
    		var fragment=document.createDocumentFragment();  
    		for(i=0;i<itemCount;i++){
    			var item=document.createElement("div");
    			if(i==current){
    				item.setAttribute("class","selectedPointer");
    				_inner.css({"left":-(i*100)+"%"});
    			}
    			fragment.appendChild(item);
    		}
    		_indicator[0].appendChild(fragment);
    		//设置小圆点结束

    		//右翻页函数
    		var scrollRight=function(){
    			if(current==itemCount-1){
    				_inner.animate({"left":"0"},speed);
    				current=0;
    				_indicator.children().eq(current).addClass("selectedPointer")
    				.siblings().removeClass("selectedPointer");
    			}else{
    				current++;
    				_inner.animate({"left":"-=100%"},speed);
    				_indicator.children().eq(current).addClass("selectedPointer")
    				.siblings().removeClass("selectedPointer");
    			}
    		}

    		//左翻页函数
    		var scrollLeft=function(){
    			if(current==0){
    				_inner.animate({"left":-(itemCount-1)+"00%"},speed);
    				current=itemCount-1;
    				_indicator.children().eq(current).addClass("selectedPointer")
    				.siblings().removeClass("selectedPointer");
    			}else{
    				current--;
    				_inner.animate({"left":"+=100%"},speed);
    				_indicator.children().eq(current).addClass("selectedPointer")
    				.siblings().removeClass("selectedPointer");
    			}
    		}
            //小圆点点击函数
            var indicatorClick=function(){
                var myIndex=$(this).index();
                _inner.animate({"left":((-myIndex)+"00%")},speed);
                $(this).addClass("selectedPointer")
                .siblings().removeClass("selectedPointer");
                current=myIndex;
            }

    		var autoPlay=function(){
    			if(timer)timeID=window.setInterval(scrollRight,timer);
    		}
    		var autoStop=function(){
    			if(timer)window.clearInterval(timeID);
    		}
    		this.hover(autoStop,autoPlay);
    		autoPlay();//开启自动播放
    		_btnR.on("click",scrollRight);//设置按钮的点击事件
    		_btnL.on("click",scrollLeft);
            _indicator.children().on("click",indicatorClick);
    	}
    })
})(jQuery);