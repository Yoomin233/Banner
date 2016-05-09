## Banner
=====================
基于jQuery的banner插件，简单易用
[项目地址](https://github.com/YueminHu/Banner/)
##Banner是什么？
Banner是一个轻量级的基于jQuery的图片轮播插件。
##特色
-简单明了的HTML结构（参考项目内的html代码）
-简易调用
-宽度自适应
-动态生成小圆点
##使用
###HTML结构
```html
<div id="Banner-outer">
	<div class="pointerGroup">
	</div>
	<div id="Banner-inner">
		<a href="#"><img src="../IMG/20160419150316285.jpg" alt=""></a>
		<a href="#"><img src="../IMG/20160218105307416.jpg" alt=""></a>
		<a href="#"><img src="../IMG/20160419150316285.jpg" alt=""></a>
		<a href="#"><img src="../IMG/20160218105307416.jpg" alt=""></a>

	</div>
	<div id="left" class="arrow arrowLeft">
		<img src="../Img/Arrow-left.png"/>
	</div>
	<div id="right" class="arrow arrowRight">
		<img src="../Img/Arrow-right.png"/>
	</div>
</div>
```
###引入CSS和JS文件
```html
<script type="text/javascript" src="Banner/Banner.js"></script>
```
###绑定元素
```javascript
<script type="text/javascript">
	$("#Banner-outer").BannerScroll({right:"right",left:"left",timer:8000}); 
</script>
```
###选项
```javascript

```
