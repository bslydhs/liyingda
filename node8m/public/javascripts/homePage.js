$(function(){
    var index =0;
    var skip = 0;
    var timer = setTimeout(function(){
        index = (index == 2) ? 0 : index + 1;
        $(".ul-top li").hide().eq(index).show();
    },0);
    var timer = setInterval(function(){
        index = (index == 2) ? 0 : index + 1;
        $(".ul-top li").hide().eq(index).show();
    }, 2000);
    $("#input").focus( function () {
        window.open("/search","_self");
    });

    var range = 50;             //距下边界长度/单位px
    var elemt = 500;           //插入元素高度/单位px
    var maxnum = 10;            //设置加载最多次数
    var num = 1;
    var totalheight = 0;
    var main = $(".middle");//主体元素

    $(window).scroll(function(){
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if(($(document).height()-range) <= totalheight  && num != maxnum) {
            var showHtml = "";
            $.ajax({
                type:"post", //http的请求类型
                url:"/homePage", //请求地址
                data:{
                    skip:skip,
                }, //传输给服务器的数据，是一个对象
                success: function(data){
                    console.log(data);
                    if(data != null){
                        for(var o of data){
                            showHtml += "<div><img src='"+o.image+"'>";
                            showHtml += "<p class='p1'>"+o["name"]+"</p>";
                            showHtml += "<p class='p2'>"+o["details"]+"</p>";
                            showHtml += "<p class='p3'>"+o["price"]+"</p></div>";
                        }
                        $('#insertpage').append(showHtml);
                        num++;
                        skip += 2;
                    }
                },
                error:function(error){
                    console.log(error);
                }
            });
        }
    });
});


