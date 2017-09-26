/**
 * Created by Administrator on 2017/9/26.
 */
define(['jquery','template','util'],function($,template,util){
    //设置导航菜单选中
    util.setMenu('/course/add');
    //获取id值
    var csId=util.qs('cs_id');
    $.ajax({
        type:'get',
        url:'/api/course/lesson',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
            //console.log(data);
            //根据数据渲染页面
            var html=template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
        }
    })
});