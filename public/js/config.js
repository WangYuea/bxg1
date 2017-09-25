/**
 * Created by Administrator on 2017/9/19.
 */
require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap: 'bootstrap/js/bootstrap',
        datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker',
        language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'validate/jquery-validate.min',
        form:'jquery-form/jquery.form',
        uploadify:'uploadify/jquery.uploadify.min',
        region:'jquery-region/jquery.region',
        ckeditor:'ckeditor/ckeditor',
        util: '../js/util',
        common: '../js/common',
        login: '../js/login',
        teacherList: '../js/teacherList',
        teacherAdd: '../js/teacherAdd',
        settings:'../js/settings',
        index:'../js/index',
        courseList:'../js/courseList',
        courseAdd:'../js/courseAdd',
        courseBasic:'../js/courseBasic',
        coursePicture:'../js/coursePicture'
    },
    //处理不是标准的define
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        },
        uploadify:{
            deps:['jquery']
        },
        ckeditor:{
            exports:'CKEDITOR'
        }
    }
});