
/**
 * Created by Administrator on 2017/9/23.
 */
define(['jquery','template','util','form'],function($,template,util){
    //设置菜单导航选中
 util.setMenu(location.pathname);
    //添加课程名称
    $('#courseBtn').click(function(){
        //提交课程名称信息
        $("#courseForm").ajaxSubmit({
            type:'post',
            url:'/api/course/create',
            dataType:'json',
            success:function(data){
                //console.log(data);
                //成功后跳转到基础信息添加页面
                if(data.code==200){
                    location.href='/course/basic?cs_id='+data.result.cs_id;
                }
            }
        })
    })
});