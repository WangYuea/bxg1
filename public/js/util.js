/**
 * Created by Administrator on 2017/9/21.
 */
define(['jquery'],function($){
    return {
        setMenu:function(path){
            $('.aside .navs a[href="'+path+'"]').addClass('active').closest('ul').show();
        },
        qs:function(key){
            var param=location.search.substr(1);
            //console.log(param);
            var tcId=null;
            if(param){
                var  ps=param.split('&');
                $.each(ps,function(i,item){
                    //console.log(item);
                    var kv=item.split('=');
                    if(kv[0]==key){
                        tcId=kv[1];
                        return false;
                    }
                })
            }
            return tcId;
        }
    }
});