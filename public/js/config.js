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
        util: '../js/util',
        common: '../js/common',
        login: '../js/login',
        teacherList: '../js/teacherList',
        teacherAdd: '../js/teacherAdd'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        }
    }
});