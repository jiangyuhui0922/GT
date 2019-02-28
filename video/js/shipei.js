	function scale () {
			var HTML=document.getElementsByTagName('html')[0];
			var Ww=document.documentElement.clientWidth;
			var scale=Ww/750;
			HTML.style.fontSize=scale*100+'px';
		}
		scale();
		window.onresize=function(){
			scale();
		}