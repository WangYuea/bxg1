/**
 * Created by Administrator on 2017/9/24.
 */
define(['jquery', 'template', 'util', 'validate', 'form'], function ($, template, util) {
    //设置菜单导航选中
    util.setMenu('/course/course_add');
    //获取课程id
    var csId = util.qs('cs_id');
    //获取标识
    var flag = util.qs('flag');
    //console.log(csId);
    //根据课程id查询详细的信息
    $.ajax({
        type: 'get',
        url: '/api/course/basic',
        data: {cs_id: csId},
        dataType: 'json',
        success: function (data) {
            //console.log(data)
            //根据flag判断是添加课程还是编辑课程
            if (flag) {
                data.result.operate = '编辑课程';
            } else {
                data.result.operate = '添加课程';
            }
            var html = template('basicTpl', data.result);
            $('#basicInfo').html(html);
            //处理二级分类的下拉联动操作
            $('#firstType').change(function () {
                //获取一级分类id
                var pid = $(this).val();
                //console.log(pid);
                //根据一级分类的id查询所有的二级分类数据
                $.ajax({
                    type: 'get',
                    url: '/api/category/child',
                    data: {cg_id: pid},
                    dataType: 'json',
                    success: function (data) {
                        //console.log(data);
                        //根据数据渲染页面
                        var tpl = ' <select name="" class="form-control input-sm"> <option value="">请选择二级分类</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option> {{/each}}</select>';
                        var html = template.render(tpl, {list: data.result});
                        $("#secondType").html(html);
                    }
                });
            });
            //处理表单提交
            $('#basicForm').validate({
                sendForm: false,
                valid: function () {
                    $(this).ajaxSubmit({
                        type: 'post',
                        url: '/api/course/update/basic',
                        data: {cs_id: csId},
                        dataType: 'json',
                        success: function (data) {
                            //console.log(data);
                            location.href = '/course/picture?cs_id=' + data.result.cs_id;

                        }
                    });
                }
            });
        }
    });
});