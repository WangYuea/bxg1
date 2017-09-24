/**
 * Created by Administrator on 2017/9/20.
 */
define(['jquery','template','util','bootstrap'],function($,template,util){
   //console.log(location.pathname);
    //$('.aside .navs a[href="'+location.pathname+'"]').addClass('active');
    util.setMenu(location.pathname);
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            console.log(data);
            var html=template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
            $('.eod').click(function(){
                //var td=$(this).parent();
                var td=$(this).closest('td');
                var tcId=td.attr('data-tcId');
                var tcStatus=td.attr('data-status');
                var that=this;
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcId,tc_status:tcStatus},
                    dataType:'json',
                    success:function(data){
                        if(data.code==200){
                            td.attr('data-status',data.result.tc_status);
                            if(data.result.tc_status==0){
                          $(that).text('启用');
                            }else{
                                $(that).text('注销');
                            }
                        }
                    }
                })
            });
            $('.preview').click(function(){
                var td=$(this).closest('td');
                var tcId=td.attr('data-tcId');
                $.ajax({
                    type:'post',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success:function(data){
                        //console.log(data);

                        var html=template('modalTpl',data.result);
                        $('#modalInfo').html(html);

                        $('#teacherModal').modal();
                    }
                })
            })
        }
    })
});