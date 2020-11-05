/*
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2020-10-16 14:31:34
 * @LastEditTime: 2020-10-17 22:12:30
 * @LastEditors: Do not edit
 * @FilePath: \HB\Workspace\项目\first\assets\js\nav.js
 * @Description: 耶斯莫拉
 */
$(function(){
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            // $('.main').css("width","96%")
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
            // $('.main').css("width","80%")
        }
    });
});