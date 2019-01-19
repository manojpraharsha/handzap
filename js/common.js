$(document).ready(function(){
    $('.navbar li a').click(function(){
        var tab = $(this).attr('data-module');
        $('.titlepane').removeClass('tabActive');
        $('#'+tab).addClass('tabActive');
        $('.navbar li a').removeClass('titleActive');
        $(this).addClass('titleActive');
    });
});