
/**
 * Created by Administrator on 2017/9/23.
 */
define(['jquery','template',],function($,template){
    var csName=$("#csName");
    $.ajax({
        type:'post',
        url:'/api/course/create',
        dateType:'json',
        data:{cs_name:csName},
        success:function(data){
            console.log(data);
        }
    })
});