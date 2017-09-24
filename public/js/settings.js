/**
 * Created by Administrator on 2017/9/22.
 */
define(['jquery','template','ckeditor','uploadify','region','datepicker','language','validate','form'],function($,template,CKEDITOR){
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            //console.log(data);
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            CKEDITOR.replace('editor');
            //处理头像上传
            $('#upfile').uploadify({
                swf:'/public/assets/uploadify/uploadify.swf',
                uploader:'/api//uploader/avatar',
                fileObjName:'tc_avatar',
                buttonText:'',
                width:120,
                height:120,
                itemTemplate:'<span></span>',
                onUploadSuccess:function(a,b){
                    var obj=JSON.parse(b);
                    console.log(b);
                    $('.preview img').attr('src',obj.result.path);
                }
            });
            //省市县三级联动
            $('#pcd').region({
               url:'/public/assets/jquery-region/region.json'
            });
            //处理表单提交
            $('#settingsForm').validate({
                sendForm:false,
                valid: function () {
                    //拼接籍贯
                    var p=$("#p").find('option:selected').text();
                    var c=$("#d").find('option:selected').text();
                    var d=$("#d").find('option:selected').text();
                    var hometown=p+'|'+c+'|'+d;
                    //更新文本内容
                    console.log(CKEDITOR.instances);
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                        console.log(1);
                    }
                    //console.log(p);
                    //提交表单
                    $(this).ajaxSubmit({
                       type:'post',
                        url:'/api/teacher/modify',
                        data:{
                            tc_hometown:hometown
                        },
                        dataType:'json',
                        success:function(data){
                            //console.log(data);
                            if(data.code==200){
                                console.log(data);
                                location.reload();
                            }
                        }
                    });
                }
            });
        }
    })
});