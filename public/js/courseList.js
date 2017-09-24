/**
 * Created by Administrator on 2017/9/24.
 */
define(['jquery','template','util'],function($,template,util){
util.setMenu(location.pathname);
    $.ajax({
        type:'get',
        url:'/api/course',
        dataType:'json',
        success:function(data){
            //console.log(data);
            var html=template('courseTpl',{list:data.result});
            $('#courseInfo').html(html);
        }
    })
});