/**
 * Created by Administrator on 2017/9/26.
 */
define(['jquery','template','util','bootstrap','form'],function($,template,util){
    //设置导航菜单选中
    util.setMenu('/course/course_add');
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
            //处理添加课时操作
            $("#addLesson").click(function(){
                //alert(1);
                //显示弹窗
                $('#chapterModal').modal();
                var html=template('editLessonTpl',{operate:'添加课时'});
                $('#editLessonInfo').html(html);
                //处理添加课时的提交
                $('#addBtn').click(function(){
                   $('#lessonForm').ajaxSubmit({
                       type:'post',
                       url:'/api/course/chapter/add',
                       data:{ct_cs_id:csId},
                       dataType:'json',
                       success:function(data){
                           location.reload();
                       }
                   });
                });
            });
            //处理课时编辑操作
            $('.editLesson').click(function(){
                //获取课时id
                var ctId=$(this).attr('data-ctId');
                $.ajax({
                    type:'get',
                    url:'/api/course/chapter/edit',
                    data:{ct_id:ctId},
                    dataType:'json',
                    success:function(data){
                        data.result.operate='编辑课时';
                        //根据数据渲染模态框
                        var html=template('editLessonTpl',data.result);
                        $('#editLessonInfo').html(html);
                        $('#chapterModal').modal();
                        $('#addBtn').click(function(){
                            $('#lessonForm').ajaxSubmit({
                                type:'post',
                                url:'/api/course/chapter/modify',
                                data:{ct_id:ctId,ct_cs_id:csId},
                                dataType:'json',
                                success:function(data){
                                    location.reload();
                                }
                            });
                        });
                    }
                });

            })
        }
    })
});