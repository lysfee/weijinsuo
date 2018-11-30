$(function(){
	
	/*计算导航长度*/
	var ininiMobile=function(){
		var $navTabs=$('.wjs_product .nav-tabs');
		var liLength=0;
		$navTabs.find('li').each(function(i,item){
			var $li=$(this);//$(item)
			liLength+=$li.outerWidth(true);
			
		});
		$navTabs.width(liLength);
		console.log(liLength);
		new IScroll($('.nav-tabs-parent')[0],{
			scrollX:true,
			scrollY:false,
			click:true
		});
		}
	ininiMobile();

})