$(function(){
    var i= 0;
   $(".span3").click(function(){
       i++;
       if(i%2!=0){
           $(".middle").css('display','block') ;
       }
      if(i%2==0){
          $(".middle").css('display','none') ;
      }
   })
});