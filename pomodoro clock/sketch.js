var t=25
var clockDown =false;
var alarm = new Audio("Ship_Brass_Bell.mp3");

$(document).ready(function(){
  setTime();
})

function setTime(){
   work = $(".work>.flexButton>p").html();
   pause = $(".break>.flexButton>p").html();
   t = Number(work)*60;
}

function setClock(){
  clockDown = setInterval(countDown,1000);
}

function countDown(){
  t--;
  s = ("0"+t%60).slice(-2);
  m = Math.floor(t/60);
  $(".clock").css("background","linear-gradient(#B02A2A "+(Math.floor(100 -t/60/work*100))+"%,transparent 0%)");
  $("#time").html(m+":"+s);
  if (t===0){
    alarm.play();
    clearInterval(clockDown);
    clockDown = false;
  }
}

$(".clock").on("click",function(){
  if (!clockDown&&t>0){
     setClock();
  } else {
    clearInterval(clockDown);
    clockDown = false;
  }
  if (t===0){
    if ($(".clock > p:first").html()=="Period"){
      alarm.pause();
      t = Number(pause)*60;
      setClock();
      $("#time").html(pause+":00");
      $(".clock > p:first").html("Break !");
    } else {
      alarm.pause();
      t = Number(work)*60;
      setClock();
      $("#time").html(work+":00");
      $(".clock > p:first").html("Period");
    }
    $(".clock").css("background","linear-gradient(#B02A2A "+(Math.floor(100 -t/60/work*100))+"%,transparent 0%)");
  }
})

$("button").on("click",function(){
  var  html = $(this).siblings().not($("button")).html();
    if (clockDown == false){
      if (this.innerHTML=="-") {
        if (html>1){
    $(this).siblings().not($("button")).html(Number(html)-1);

        }
    } else  {
    $(this).siblings().not($("button")).html(Number(html)+1)
    }
    $("#time").html(  ($(".work > .flexButton >p").html())+":00");
    setTime();
  }
})