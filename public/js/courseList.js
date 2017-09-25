/**
 * Created by Administrator on 2017/9/24.
 */
define(['jquery','template','util'],function($,template,util){
    //处理导航菜单选中
util.setMenu(location.pathname);
    //获取课程列表数据
    $.ajax({
        type:'get',
        url:'/api/course',
        dataType:'json',
        success:function(data){
            //console.log(data);
            //根据数据渲染页面
            var html=template('courseTpl',{list:data.result});
            $('#courseInfo').html(html);
        }
    })
});