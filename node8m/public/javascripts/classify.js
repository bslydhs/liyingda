$(function(){
    $('.left a').click(function(){
        $(this).css('color','#ff6b00').siblings().css('color','black');//当前点击变红，其它变黑（可以设置成需要的任意颜色，很简单吧，只一行代码）
        $(this).css('border-left','5px solid #ff6b00').siblings().css('border-left','5px solid white');
    });
    $("#input").focus( function () {
        window.open("/search","_self");
    });
});