
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

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
if(!flag){
	location.href='/main/login';
}
	var loginInfo=$.cookie('loginInfo');
	//console.log(loginInfo);
	loginInfo=loginInfo&&JSON.parse(loginInfo);
	$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);