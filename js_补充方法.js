<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	 1.获得焦点:   onfocus  

	 2.失去焦点:   onblur   

	 3.Txt.focus();   方法  

	 4.Onfocus  事件  

	 5.this.select(); //选择

	 6.判断用户输入事件:
			正常浏览器  :    oninput  
			Ie 678  支持的  ： onpropertychange 

			

	7.数组常用方法:
		 push()  向数组的末尾添加一个或多个元素，并返回新的长度。			
		 unshift()    向数组的开头添加一个或更多元素，并返回新的长度
		 pop()   移除最后一个元素 返回最后一个值
		 			var  arr = [1,3,5]   →  arr.pop()  →  结果   [1,3]  
		 shift()  把数组的第一个元素从其中删除，并返回第一个元素的值
		 			var  arr = [1,3,5]   →  arr.shift()  →  结果   [3,5] 
		 concat()连接两个数组 它不会改变现有的数组，而仅仅会返回被连接数组的一个副本 
		 			var aa = [1,3,5];  var bb = [“a”,”b”,”c”];aa.concat(bb);     结果：  [1,3,5,“a”,”b”,”c”];
		join() 将数组各个元素是通过指定的分隔符进行连接成为一个字符串。
				arrayObject.join(separator)   数组名.join(符号) 
				参数 separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
				var arr = [1,2,3];
				console.log(arr.join(“-”))    结果就是：  1-2-3    字符串
		 split()把字符串转换为数组 
				join   <=>   split  
				 split() 方法用于把一个字符串分割成字符串数组
				语法
				 stringObject.split(separator,howmany)
				参数 separator 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
				howmany 可选。该参数可指定返回的数组的最大长度

	8. 下拉菜单的事件:  onchange
  		sele.onchange = function(){}   当改变的时候  事件     

  	9.DOM节点
  	      	parentNode       父级  
     		this.parentNode     我的父亲      
          		nextSibling        兄弟        
     		childNodes       孩子们   官方用法      
	  	一般情况下，我们只需要元素节点  nodeType  来  判断   
	       	nodeType == 1    元素节点     
	       	nodeType == 2    属性节点
	       	nodeType == 3    文本节点 
	       	
	    	children    不是官方写法       所有的孩子   亲儿子   
	    	ie 678 把注释节点 也算  可以避免 
	10:节点操作
		creatElement:  创建节点
    		setAttribute(“属性”,”值”);设置节点属性
  		div.setAttribute(“class”,”demo”);  一个 类名  改为   demo  
    		removeAttribute(“属性”); 删除某个属性
    		demo.removeAttribute(“title”)  title  属性  给删掉了  。

    		A.appendChild(B); B 一定是 A 孩子 ， 同时b 放到了a 的里面最后面

   		A.insertBefore（B，C）     B  C  都是 A 的孩子  ，把 b  放到  a 里面 ，但是 是 c 的前面

   	11.内置对象
   		日期函数  ( Date() )

  		var  date = new Date(); 声明日期
  		var arr = new Array();  
 		var  date = new Date();   
  		date.getTime();
  		date.valueOf();        得到 距离 1970年的毫秒数     

  		eg.
 		var date  = new Date();  // 声明
		console.log(date.getTime());  // 提倡使用的
		console.log(date.valueOf());
		// 直接使用
		console.log(Date.now());
		console.log(+new Date());
		   
	12. 常用的日期的方法   

		获取日期和时间
		getDate()                  获取日 1-31
		getDay ()                  获取星期 0-6      
		getMonth ()                获取月  0-11
		getFullYear ()	            获取完整年份（浏览器都支持）
		getHours ()	               获取小时 0-23
		getMinutes ()	               获取分钟 0-59
		getSeconds ()	               获取秒  0-59
		getMilliseconds ()            获取当前的毫秒 
		getTime ()	       返回累计毫秒数(从1970/1/1午夜)

	13.  定时器
		window.setInterval(“执行的函数”,间隔时间) 

	       	正确的写法:
	        	setInterval(fun, 1000);      1000 ms   毫秒
	        	每隔1秒钟，就去执行一次 fun 这个函数.  
	        	setInterval(“fun()”,1000)     可以用 
	        	setInterval( function(){} , 1000 )  
	        	setInterval(fun(),1000)  错误的  
  
		eg.
		倒计时 
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        body{
            font-size:30px;
            text-align: center;
            color:red;
        }
    </style>
    <script>
        window.onload = function(){
            var demo = document.getElementById("demo");
            var endTime = new Date("2015/12/12 17:30:00"); // 最终时间
            setInterval(clock,1000); // 开启定时器
            function clock(){
                var nowTime = new Date(); // 一定是要获取最新的时间
                //  console.log(nowTime.getTime());  获得自己的毫秒
                var second = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
                // 用将来的时间毫秒 -  现在的毫秒  / 1000 得到的 还剩下的秒  可能处不断 取整
               // console.log(second);
                 // 一小时 3600 秒
                // second / 3600  一共的小时数  /24   天数
                var d = parseInt(second / 3600 / 24);  //天数
                //console.log(d);
                var h = parseInt(second / 3600  % 24)  // 小时
               // console.log(h);
                var m = parseInt(second / 60  % 60);
                //console.log(m);
                var s = parseInt(second % 60); // 当前的秒
                console.log(s);
               /* if(d<10)
                {
                    d = "0" + d;
                }*/
                d<10 ? d="0"+d : d;
                h<10 ? h="0"+h : h;
                m<10 ? m="0"+m : m;
                s<10 ? s="0"+s : s;
                demo.innerHTML = "距离抢购时间还剩: "+d+"天 "+h+"小时 "+m+"分钟 "+s+"秒";
            }
        }
    </script>
</head>
<body>
<div id="demo"></div>
	14.时钟效果	
		ms = date.getMilliseconds(); // 现在的毫秒数
		s = date.getSeconds() + ms / 1000;  //  得到秒 1.3 s
		m = date.getMinutes() + s / 60;  //  得到的是分数  45.6分钟
		h = date.getHours() % 12 + m / 60 ;
   
		旋转角度原理 
		秒针     一秒 走多少度呢 ？  
		一圈  360 °     一共有 60 秒       每秒  6 °
		分针     一圈  360    一圈走 60次   每次  6°  每分钟 6°
		时针     一圈 360      一共 12 个 表盘没有24小时    每个小时 走   30°
		完整代码：
<script>
    	var hour = document.getElementById("hour");
     	var minute = document.getElementById("minute");
     	var second = document.getElementById("second");
       	// 开始定时器
     	var s = 0,m = 0, h = 0, ms = 0;
       	setInterval(function() {           
          		var date = new Date();  // 得到最新的时间
          		ms = date.getMilliseconds(); // 现在的毫秒数
          		s = date.getSeconds() + ms / 1000;  //  得到秒 1.3 s
          		m = date.getMinutes() + s / 60;  //  得到的是分数  45.6分钟
         		h = date.getHours() % 12 + m / 60 ;

      		// 一圈  360 °     一共有 60 秒       每秒  6 °   现在是 s秒
          		second.style.WebkitTransform = "rotate("+ s*6 +"deg)";
                     //  变化            旋转    deg  度
         		minute.style.WebkitTransform = "rotate("+ m*6 +"deg)";
          		hour.style.WebkitTransform = "rotate("+ h*30 +"deg)";
           	second.style.MozTransform = "rotate("+ s*6 +"deg)";
                        //  变化            旋转    deg  度
          		minute.style.MozTransform = "rotate("+ m*6 +"deg)";
           	hour.style.MozTransform = "rotate("+ h*30 +"deg)";  
       	},30);
</script>
	15.arguments 对象
 		function fn(a,b,c) {  console.log(a+b+c); alert(arguments.length;)}
 		fn(1,3,4,6); 
     		arguments.length;  返回的是  实参的个数。    
     		但是这个对象有讲究，他只在正在使用的函数内使用。 
     		arguments.callee;    
     		返回的是正在执行的函数。 也是在函数体内使用。 在使用函数递归调用时推荐使用arguments.callee代替函数名本身。 
     		function fn() {  console.log(arguments.callee); }   
     		这个callee 就是 ：   function fn() {  console.log(arguments.callee); } 

     	16运算符
		一元操作符 ++， -- + -       +5   -6
		逻辑操作符 ! && ||
		基本运算符 +, -, *, /, %
		关系操作符 >, <, >=, <=, ===, ==, !=, !==
		 = 赋值    == 判断    === 全等     
		条件操作符 （三元运算符）  ? :
		赋值运算符 +=, -=, *=, /=, %= 
     
		逗号运算符 ,   var  a=0,b=0;  
	17 运算符顺序
    		1  () 
		2  !、-、++、--    (-10)  负号  正号
		3 *、/、% 
		4 +、-         10-5
		5 <、<=、<、>=    
		6 ==、!=、===、!==、  
		7 && 
		8 || 
		9?: 
		10 =、+=、-=、*=、/=、%=     赋值 

	18 几个面试题
 		1.  a&&b   结果是什么？  

	 		如果a 为假 ，则返回 a   
	 		如果a 为真 ，则返回 b 

			var aa  =   0&&1;
			alert(aa)    // 0 
			var bb =  1&&0;
			alert(bb);  //0  
			var cc =  1&&10;
			alert(cc);  // 10
		2. a||b  
   			如果 a 为假   则返回b  
   			如果 a 为真   则返回a  
   			
			console.log(0||1);   1
			console.log(1||0);   1
			console.log(1||5);   1
			console.log(5||1);   5

			var a = 1 && 2 && 3;
			console.log(a);   3
			var b = 0 && 1 && 2;
			console.log(b);  0
			var c = 1 && 0  && 2;
			console.log(c);  0
			%=  
			 a+=3 
			 a = a % 3;
 	19 字符串对象常用方法 
		转换为字符串
 			1. + “”       2+ “”  =  “2”    2+”ab”   =  “2ab” 
 			2. String()    转换为字符串 
 			3. toString（基数）  ;    基数就是进制  

			 	var txt = 10;
			 	txt.toString(2)       二进制      1010
		获取字符位置方法
			charAt获取相应位置字符（参数:字符位置） 
			charCodeAt获取相应位置字符unicode编码（参数:字符位置）

				var txt = “abcedf”;     
			   	比如，  txt.charAt(4);     d
			  
			unicode编码  是我们字符的字符的唯一表示 。
	20  根据字符返回位置
 		1.indexOf(“字符”);它是从 前面开始数（从左边开始数）， 而且只找第一个， 然后返回改字符的位置， 索引号都是从0开始的。  返回的是个数值。

			var txt = “abcdef”;
			alert(txt.indexOf(“d”))      结果就是   3
			如果找不到该字符   返回  -1   
		2.lastIndexOf(参数：索引字符串)  从后面开始数    同上  

			var  txt = “abcdef” ;
			txt.lastIndexOf(“d”);     3   

	21 网址编码 
		我们知道一个网址 自己的网址，   不同页面也有自己id网址， 我们经常会做一些， 把网址送入到后台。  但是后台再处理的 不认识比如 换行啊 等特殊符号的  ？  
		var url =  “http://www.itast.cn?name=cz”  
		所以我们要实现编码，然后再传到后台。
		encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
		decodeURIComponent() 函数可把字符串作为 URI 组件进行解码

			var url = "http://www.itcast.cn?name=andy";
			console.log(encodeURIComponent(url));  // 编码
			var afterUrl = encodeURIComponent(url);
			console.log(decodeURIComponent(afterUrl));  // 解码

	22 操作字符串
		1  concat() 连接字符串

			var  txt1 = “abc”;
			var  txt2 = ”123”;
			console.log(txt1.concat(txt2));     “abc123”; 

		2 slice(“取字符串的起始位置”, [结束位置]) ;    []  可选的  

			var txt = “abcedf”;
			txt.slice(3) ;    从 txt 里面字符的 第 3（索引号）个开始取   结束位置省略， 一直取到最后一个。 			
			slice(3,6)     3 从 第3个开始 取     6  取到第6索引号的位置，还是从左边的第0个开始数。 但是不包 6 。
			起始位置可以是负数  ， 如果是负数，则是从 右边往左边开始取。
			var txt =”asdf”;
			txt.slice(-1)  结果是   f  
	23  substr(起始位置,[取的个数])  同上。  
  		不写取的个数， 默认从起始位置一直取到最后 。
  		取的个数：    是指从起始位置开始，往后面数几个。 

			var txt = “abcdefghijk”;
			txt.substr(3,4);从第3个  （d） 开始 数 4个  defg 
			substr(-1)  少用   ie678 报错 。 尽量少用

			兼容性的写法 ： 
			onBtnClick("btn7",div1.substr(div1.length-1,1));  // 兼容的写法
			substring 同slice  一样的   但是有一点不同 
			substring(3,6)     
			substring 始终会把  小的值作为  起始位置 大的值作为结束位置
			例如：  substring(6,3)   实际中   自动变成  substring(3,6); 

	24. 122340.12345      保留两位有效小数  122340.12  
  		substr(0, .+3)
		1.console.log(str.substr(0,str.indexOf(".")+3));
  			通过 indexOf  返回小数点的位置     截取字符串  
		2 console.log(parseInt(PI*100) /100);
      			先乘以100  取整  然后 除以100  
 		3 console.log(PI.toFixed(2));
			pi.toFixed(2)  保留 2位 小数  

	25 .大小写转换
		1 toUpperCase，转换为大写（参数： 无）
		2 toLowerCase，转换为小写（参数：无）

			asdf.toUpperCase()   结果就是：     ASDF
			$("txt").value.toUpperCase();
			把txt 的值 转换为大写  

	26.缓冲动画
		缓动动画公式:
		一个盒子初始值  是  0      要走到 400 px 的位置  
		假如说，初始值   leader  0          target  400
		box.style.left =  xxxx +   “px”
		leader = leader + (target - leader ) /10 ;
		    
		      btn.onclick = function() {
		           setInterval(function(){
		               leader = leader + (target - leader )/10;
		               box.style.left = leader + "px";
		           },30)
		      }
	27. offset家族
		(1).offsetWidth    offsetHeight
			offsetWidth =  width  + border  +  padding   
			为什么不用 div.style.width   因为东西 只能得到行内的数值

		(2). offsetLeft  offsetTop    
			返回距离上级盒子（最近的带有定位）左边的位置 如果父级都没有定位则以body 为准 这里的父级指的是所有上一级 不仅仅指的是 父亲 还可以是 爷爷 曾爷爷 曾曾爷爷。。。。

			offsetLeft 从父级的padding 开始算    父亲的border 不算
			总结一下：  就是子盒子到定位的父盒子边框到边框的距离

		(3).offsetParent  
			返回改对象的父级 （带有定位） 不一定是亲的爸爸 前面学过一个返回父亲(亲的)    parentNode   有所区别

			如果当前元素的父级元素没有进行CSS定位（position为absolute或relative），offsetParent为body。
			如果当前元素的父级元素中有CSS定位（position为absolute或relative），offsetParent取最近的那个父级元素。

		(4).offsetTop style.top 的区别
			最大区别在于  offsetLeft  可以返回没有定位盒子的距离左侧的位置。 而 style.top 不可以  只有定位的盒子 才有 left  top right  
			offsetTop 返回的是数字，而 style.top 返回的是字符串，除了数字外还带有单位：px。
			offsetTop 只读，而 style.top 可读写。
			如果没有给 HTML 元素指定过 top 样式，则 style.top 返回的是空字符串。
			最重要的区别  style.left 只能得到 行内样式     offsetLeft 随便

	28. 事件对象	
		  var event = event || window.event; 

		event 常见属性
		属性节点作用
		data			返回拖拽对象的URL字符串（dragDrop）
		width			该窗口或框架的高度
		height 		该窗口或框架的高度
		pageX			光标相对于该网页的水平位置（ie无）
		pageY			光标相对于该网页的垂直位置（ie无）
		screenX		光标相对于该屏幕的水平位置
		screenY		光标相对于该屏幕的垂直位置
		target			该事件被传送到的对象
		Type 			事件的类型
		clientX		光标相对于该网页的水平位置 （当前可见区域）
		clientY		光标相对于该网页的水平位置

		screen X   screenY   
		是以我们的电脑屏幕 为基准点   测量 
		pageX  pageY   
		以我们的  文档   （绝对定位）  的基准点 对齐       ie678 不认识  
		clientX   clientY
		以 可视区域 为基准点   类似于    固定定位  
	29. 常用事件
		onmouseover      onmouseout   onclick      
		onmousemove    当鼠标移动的时候    就是说，鼠标移动一像素就会执行的事件
		div.onmousemove = function() { 语句 }

		onmouseup       当鼠标弹起   
		onmousedown     当鼠标按下的时候  
		
	30. 防止选择拖动
		我们知道 按下鼠标然后拖拽可以选择文字 的。 
		清除选中的内容 
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

	31. 	document.body.scrollTop;  火狐 和其他浏览器   
  		document.documentElement.scrollTop;ie9+  和 最新浏览器   都认识
  		window.pageXOffset;     pageYOffset  （scrollTop）

  		document.body.scrollTop  没有DOCTYPE html头
		 兼容性写法：  

		 var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


	32. client 家族
		client  可视区域    
		offsetWidth:   width  +  padding  +  border     （披着羊皮的狼）  
		clientWidth： width  +  padding      不包含border  
		scrollWidth:   大小是内容的大小    


	33.检测屏幕宽度(可视区域)
		ie9及其以上的版本
		window.innerWidth  
		标准模式
		document.documentElement.clientWidth
		怪异模式 
		document.body.clientWidth
		自己封装一个 返回可视区宽度和高度的函数。

	34. window.onresize    改变窗口事件  
		window.onscroll  = function() {}  屏幕滚动事件 
		window.onresize = function() {}  窗口改变事件 
		onresize 事件会在窗口或框架被调整大小时发生 

	35. 简单冒泡机制
		事件冒泡: 当一个元素上的事件被触发的时候，比如说鼠标点击了一个按钮，同样的事件将会在那个元素的所有祖先元素中被触发。这一过程被称为事件冒泡；这个事件从原始元素开始一直冒泡到DOM树的最上层。
			顺序
			E 6.0: 
			div -> body -> html -> document
			其他浏览器: 
			div -> body -> html -> document -> window

			不是所有的事件都能冒泡。以下事件不冒泡：blur、focus、load、unload
		 阻止冒泡的方法
			 标准浏览器 和  ie浏览器  
			 w3c的方法是event.stopPropagation()        proPagation  传播  传递 
			 IE则是使用event.cancelBubble = true       bubble   冒泡  泡泡       cancel 取消 
		兼容的写法： 
		if(event && event.stopPropagation){
		          event.stopPropagation();  //  w3c 标准
		}else{
		               event.cancelBubble = true;  // ie 678  ie浏览器
		}

	37. 判断当前对象
	   火狐 谷歌 等   event.target.id   
	   ie 678          event.srcElement.id    
	   兼容性写法：  
	  var targetId = event.target ? event.target.id : event.srcElement.id;	  
	  targetId != "show"       
  

<!DOCTYPE html>
	<html>
   	<head lang="en">
       	<meta charset="UTF-8">
      	<title></title>
      	<style>
	          body {
               height:2000px;
           }
           #mask {
               width: 100%;
               height: 100%;
               opacity: 0.4;   /*半透明*/
               filter: alpha(opacity = 40);  /*ie 6半透明*/
               background-color: black;
               position: fixed;
               top: 0;
               left: 0;
	               display: none;
          }
           #show {
              width: 300px;
              height: 300px;
              background-color: #fff;
              position: fixed;
              left: 50%;
              top: 50%;
               margin: -150px 0 0 -150px;
               display: none;
           }
       </style>
   </head>
   <body>
   <a href="javascript:;" id="login">注册</a>
  <a href="javascript:;">登录</a>
  <div id="mask"></div>
  <div id="show"></div>
  </body>
  </html>
  <script>
      function $(id) { return document.getElementById(id);}
      var login = document.getElementById("login");
      login.onclick = function(event) {
          $("mask").style.display = "block";
           $("show").style.display = "block";
           document.body.style.overflow = "hidden";  // 不显示滚动条
           //取消冒泡
           var event = event || window.event;
           if(event && event.stopPropagation)
           {
              event.stopPropagation();
           }
           else
           {
               event.cancelBubble = true;
           }
       }
       document.onclick = function(event) {
   
           var event = event || window.event;
          // alert(event.target.id);  // 返回的是点击的某个对象的id 名字
           // alert(event.srcElement.id);
           var targetId = event.target ? event.target.id : event.srcElement.id;
           // 看明白这个写法
           if(targetId != "show")  // 不等于当前点点击的名字
           {
               $("mask").style.display = "none";
               $("show").style.display = "none";
               document.body.style.overflow = "visible"; // 显示滚动条
           }
       }
   </script>

1.4.4  选中之后，弹出层
我们想，选中某些文字之后，会弹出一个弹出框
这个和 我们前面讲过的拖拽有点不一样。
拖拽  是拖着走。  拉着鼠标走 。
选择文字：  这个弹出的层 选中的时候不出来，弹起鼠标的时候才出现 。
 所以这个的事件一定是  onmouseup  . 盒子显示而且盒子的位置 再  鼠标的 clientX  和 clientY 一模一样
用来判断选择的文字： 
1.4.5 获得用户选择内容
window.getSelection()     标准浏览器
document.selection.createRange().text;      ie 获得选择的文字
兼容性的写法：
if(window.getSelection)
{
    txt = window.getSelection().toString();   // 转换为字符串
}
else
{
    txt = document.selection.createRange().text;   // ie 的写法
}
综合代码:
1   <!DOCTYPE html>
2   <html>
3   <head lang="en">
4       <meta charset="UTF-8">
5       <title></title>
6       <style>
7           div {
8               width: 400px;
9               margin:50px;
10           }
11           #demo {
12               width: 100px;
13               height: 100px;
14               background-color: pink;
15               position: absolute;
16               top: 0;
17               left: 0;
18               display: none;
19           }
20       </style>
21   </head>
22   <body>
23   <span id="demo"></span>
24   <div id="test">我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字我要复制的文字</div>
25   <div id="another">
26       我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字 我不要的文字
27   </div>
28   </body>
29   </html>
30   <script>
31       function $(id) {return document.getElementById(id)}
32       $("test").onmouseup = function(event) {
33           var event = event || window.event;
34           var x = event.clientX;  //  鼠标的x坐标
35           var y = event.clientY;  //  同理
36           var txt;  // 用于存贮文字的变量
37           if(window.getSelection)  // 获取我们选中的文字
38           {
39               txt = window.getSelection().toString();   // 转换为字符串
40           }
41           else
42           {
43               txt = document.selection.createRange().text;   // ie 的写法
44           }
45           if(txt)   // 所有的字符串都为真  "" 是假    所有的数字为真  0  为假
46           {
47               //看看有没有选中的文字，没有选中文字为空的，就不应该执行   点击一下鼠标 就是空的
48               showBox(x,y,txt);  // 调用函数
49           }
50       }
51       document.onclick = function(event){  // 点击空白处隐藏
52           var event = event || window.event;
53           var targetId = event.target ? event.target.id : event.srcElement.id;
54           if(targetId != "demo"){
55               $("demo").style.display = "none";
56           }
57       }
58       function showBox(mousex,mousey,contentText) {  // 相关操作
59              setTimeout(function(){
60                  $("demo").style.display = "block";
61                  $("demo").style.left = mousex + "px";
62                  $("demo").style.top = mousey + "px";
63                  $("demo").innerHTML = contentText;
64              },300);
65       }
66   </script>

1.5 动画原理
  人走路的时候，   步长     
 动画的基本原理 ： 让盒子的 offsetLeft   +  步长     
 盒子 原来的位置  0    + 10       盒子现在的offsetLeft  10
 10 + 10  =  20   + 10  
  原理： 
<script>
    //动画的基本原理   盒子的 offsetLeft  +  步长
    var btn = document.getElementsByTagName("button")[0];
    var div = document.getElementsByTagName("div")[0];
    var timer = null;
    btn.onclick = function() {
       timer = setInterval(function() {
           if(div.offsetLeft > 400)
           {
               clearInterval(timer);
           }
           div.style.left = div.offsetLeft + 10  + "px";
       },20);
    }
</script>
|-5|   = 5 

Math.abs(-5)   取绝对值函数       js  就是 数学计算
1.5.1 匀速运动封装函数
1    function animate(obj,target){
2           var speed = obj.offsetLeft < target ? 5 : -5;  // 用来判断 应该 +  还是 -
3           obj.timer = setInterval(function() {
4               var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
5               obj.style.left = obj.offsetLeft + speed + "px";
6               if(Math.abs(result)<=5)  // 如果差值不小于 5 说明到位置了
7               {
8                   clearInterval(obj.timer);
9                   obj.style.left = target + "px";  // 有5像素差距  我们直接跳转目标位置
10               }
11           },30)
12       }
 


    
   


</body>



  	


</body>
</html>