/**
 * Created by Administrator on 2017/9/22.
 */
define(['jquery','template','uploadify','region'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            //console.log(data);
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
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
        }
    })
});