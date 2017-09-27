/**
 * Created by Administrator on 2017/9/27.
 */
define(['jquery'],function($){
    $(document).ajaxStart(function(){
        //显示遮罩层
        $('.overlay').show();
    });
    $(document).ajaxStop(function(){
        //隐藏遮罩层  500毫秒的延时
        setTimeout(function(){
            $('.overlay').hide();
        },500);
    });
});