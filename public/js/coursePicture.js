/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery', 'template', 'util', 'uploadify'], function ($, template, util) {
    //设置导航菜单选中
    util.setMenu('/course/course_add');
    //获取课程id
    var csId = util.qs('cs_id');
    //查询封面信息
    $.ajax({
        type: 'get',
        url: '/api/course/picture',
        data: {cs_id: csId},
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            //根据数据渲染页面
            var html = template('pictureTpl', data.result);
            $('#pictureInfo').html(html);
            //处理封面上传操作
            $("#myfile").uploadify({
                swf: '/public/assets/uploadify/uploadify.swf',
                buttonText: "选择图片",
                buttonClass: "btn btn-success btn-sm",
                width: 80,
                height: 'auto',
                itemTemplate:'<span></span>',
                uploader: '/api/uploader/cover',
                fileObjName: 'cs_cover_original',
                formData: {cs_id: csId},
                onUploadSuccess: function (a, b) {
                    //console.log(b);
                    var obj=JSON.parse(b);
                    $('.preview img').attr('src',obj.result.path);
                }
            });
        }
    })
});