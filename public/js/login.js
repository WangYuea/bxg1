/**
 * Created by Administrator on 2017/9/19.
 */
define(['jquery','cookie'], function ($) {
    //给登录按钮添加单击事件
    $('#loginBtn').click(function () {
//        console.log(window.location.href);
//        console.log($('#loginForm').serialize());
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
//                console.log(data);
//                判断获取登录成功后跳转到首页
                if (data.code == 200) {
                    $.cookie('loginInfo', JSON.stringify(data.result), {path: '/'});
                    location.href = '/main/index';
                }
            }
        });
//
        return false;
    });
});