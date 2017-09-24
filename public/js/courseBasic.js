/**
 * Created by Administrator on 2017/9/24.
 */
define(['jquery', 'template', 'util'], function ($, template, util) {
    //设置菜单导航选中
    util.setMenu('/course/course_add');
    //获取课程id
    var csId = util.qs('cs_id');
    var flag=util.qs('flag');
    //console.log(csId);
    //根据课程id查询详细的信息
    $.ajax({
        type:'get',
        url:'/api/course/basic',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
            //console.log(data)
            if(flag){
                data.result.operate='编辑课程';
            }else{
                data.result.operate='添加课程';
            }
            var html=template('basicTpl',data.result);
            $('#basicInfo').html(html);

        }
    })
});