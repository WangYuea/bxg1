define(['jquery','template','cookie'],function($,tempalte){
	//NProgress.start();
	//NProgress.done();
	//控制左侧折叠显示隐藏
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	//输入用户名和密码跳转到首页
	$('#logoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				if(data.code==200){
					location.href='/main/login';
				}
			}
		});
	});
	//验证用户是否登录
	var flag= $.cookie('PHPSESSID');
	//console.log(flag);
	if(!flag&&location.pathname!='/main/login'){
		location.href='/main/login';
	}
	var loginInfo=$.cookie('loginInfo');
	//console.log(loginInfo);
	loginInfo=loginInfo&&JSON.parse(loginInfo);
	var tpl='<div class="avatar img-circle"> <img src="{{tc_avatar}}"> </div> <h4>{{tc_name}}</h4>';
	var html=tempalte.render(tpl,loginInfo);
	$('.aside .profile').html(html);
	//$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	//$('.aside .profile h4').html(loginInfo.tc_name);
});

