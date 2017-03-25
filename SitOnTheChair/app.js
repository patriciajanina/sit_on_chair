
$(document).ready(function(){
  $('#firma').on('click', function(){
     $('.lista1').slideToggle(400);
   });
 });
 $(document).ready(function(){
   $('#galeria').on('click', function(){
      $('.lista2').slideToggle(400);
    });
  });
  $(document).ready(function(){
    $('#kontakt').on('click', function(){
       $('.lista3').slideToggle(400);
     });
   });
  $(document).ready(function(){
       $('.sighn').on('click', function(){
         if($('.section2').css("display") === 'none'){
         $('.section1').css({'display':'none'});
         $('.section2').css({'display':'flex' });
         }
         else {
         $('.section1').css({'display':'flex'});
         $('.section2').css({'display':'none'});
         }
       });
     });

//   $(document).ready(function(){
//
//      $(".firstPic").on('mouseover',function(){
//     $(".firstPic div.whiteOpacity").css({"display":"none"});
//     $(".firstPic div.textOnPic").css({"display":"none"});
//     $(".firstPic div.greenLine").css({"display":"none"});
//     $(".firstPic img").animate({"width":"350px" , 'height':'auto'},1000);
// });
//  });

 $(document).ready(function(){

   $(".firstPic").on('mouseover',function(){
   $(".firstPic div.whiteOpacity").hide();
   $(".firstPic div.textOnPic").hide();
   $(".firstPic div.greenLine").hide();
});
});
$(document).ready(function(){

  $(".firstPic").on('mouseout',function(){
  $(".firstPic div.whiteOpacity").show();
  $(".firstPic div.textOnPic").show();
  $(".firstPic div.greenLine").show();
});
});
$(document).ready(function(){
$(".firstPic img").on('mouseover',function(){
   $(this).animate({'width':'320px','height':'220px'},1000 ,
   function complete(){
      $(this).animate({'width':'300px','height':'200px'},2000);
   }
 );
});
});
$(document).ready(function(){

  $(".secondPic").on('mouseover',function(){
  $(".secondPic div.whiteOpacity").hide();
  $(".secondPic div.textOnPic").hide();
  $(".secondPic div.greenLine").hide();
});
});
$(document).ready(function(){

 $(".secondPic").on('mouseout',function(){
 $(".secondPic div.whiteOpacity").show();
 $(".secondPic div.textOnPic").show();
 $(".secondPic div.greenLine").show();
});
});
$(document).ready(function(){
$(".secondPic img").on('mouseover',function(){
  $(this).animate({'width':'320px','height':'220px'},1000 ,
  function complete(){
     $(this).animate({'width':'300px','height':'200px'},2000);
  }
);
});
});
