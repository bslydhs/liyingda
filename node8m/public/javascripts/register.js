$(function(){
    $(".inputSubmit").click(function(){
        //昵称校验
        var username = $("#username").val();
        console.log(username);
        if(username != null && username.length < 16 && username.length > 6){
            $("#username").html("");
        }else{
            $("#userError").html("昵称长度不能小于6大于16");
            return false;
        }
        //手机号码验证
        var phone = $("#phone").val();
        var phone1 =/^1[3|4|5|7|8][0-9]{9}$/;
        if(phone1.test(phone)){
            $("#phone").html("");
        } else{
            $('#userError').html("手机输入错误");
            return false;
        }
        //密码
        var password = $("#password").val();
        if(password != null && password.length>8 && password.length < 16){
            $("#password").html();
        }else{
            $("#userError").html("密码长度不能小于8大于16");
            return false;
        }
        //确认密码
        var password1 = $("#password1").val();
        if(password1 != null && password1 == password){
            $("#password1").html();
        }else{
            $("#userError").html("两次密码不一致");
            return false;
        }
        return true;
    });
});
