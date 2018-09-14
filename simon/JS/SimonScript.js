

var audio,context,oscillatorsNode,oscillatorNode1,errGain,failOsc,failGain
var count=0;
var it=0;
var moves=[];timeout = [];
var clickable = false;
var strict = false;
function audioInit(){
	var AudioContext = window.AudioContext || window.webkitAudioContext || false;
	context = new AudioContext();
	failOsc = context.createOscillator();
	failOsc.frequency.setValueAtTime(190,context.currentTime);
	failOsc.type = "square"
	failOsc.start(0,0);
	failGain = context.createGain();
	failGain.gain.setValueAtTime(0,context.currentTime)
	failOsc.connect(failGain);
	failGain.connect(context.destination);
	var frequencies = [200.81,220.00,246.94	,261.63];
	oscillatorsNode = frequencies.map(function(val){
		var oscillator = context.createOscillator();
		oscillator.frequency.setValueAtTime(val,context.currentTime);
		oscillator.type="sine";
		oscillator.start(0.0);
		return oscillator;
	});
	errGain = oscillatorsNode.map(function(val){
		var gainNode = context.createGain();
		gainNode.gain.setValueAtTime(0,context.currentTime);
		val.connect(gainNode);
		gainNode.connect(context.destination);
		return gainNode;
	})
}

$(window).on("load",function(){
	audioInit();
});

	$(".col div").on("mousedown",function(){
		if (!clickable||!$("input[name='onoff']").is(":checked")) return
		var i = $(this).attr("index");
		$(".col > div[index='"+ i +"']").addClass("lit");
		if (checkMove(i,it)){
		errGain[i].gain.setTargetAtTime(.5,context.currentTime,.05);
		it++;
		} else{
			it=0;
			failGain.gain.setTargetAtTime(.3,context.currentTime,.05);
			
			timeout.push(setTimeout(function(){
				failGain.gain.setTargetAtTime(0,context.currentTime,.05);
				iterateMove(moves,0);
			},1000));
			
			//stop errsound
			$(this).on("mouseup",function(){
				clickable = false
				errGain.forEach(val => val.gain.setTargetAtTime(0,context.currentTime,.1));
				$(".col > div").each((i,val)=>val.classList.remove("lit"));
			});
			// reset if strict
			if (strict==true){
				moves=[];
				playTime();
				timeout.push(setTimeout("iterateMove(moves,0)",1500));
				count=0;
				$(".counter > span:nth-child(1)").html(("0"+count).slice(-2,-1));
				$(".counter > span:nth-child(2)").html(("0"+count).slice(-1));
			}
		} 
		
		// stop the sounds
		$(document).on("mouseup",function(){
			if (!clickable||!$("input[name='onoff']").is(":checked")) return
			errGain.forEach(val => val.gain.setTargetAtTime(0,context.currentTime,.1));
			$(".col > div").each((i,val)=>val.classList.remove("lit"));
			if (it==moves.length){
				console.log(count);
				$(".counter > span:nth-child(1)").html(("0"+count).slice(-2,-1));
				$(".counter > span:nth-child(2)").html(("0"+count).slice(-1));
				clickable=false;
				it=0;
				playTime();
				timeout.push(setTimeout(function(){iterateMove(moves,0)},500));
			}
		});
	});




$("input[name='onoff']").change(function(){
	if ($(this).is(":checked")){
		timeout.push(setTimeout(function(){
			playTime();
			iterateMove(moves,0);
		},1000));
	} else {
		errGain.forEach(val => val.gain.setTargetAtTime(0,context.currentTime,.1));
		$(".col > div").each((i,val)=>val.classList.remove("lit"));
		clickable=false;
		moves=[];
		timeout.forEach(x=>clearTimeout(x));
		timeout=[];
		count=0;
		$(".counter > span:nth-child(1)").html(("0"+count).slice(-2,-1));
		$(".counter > span:nth-child(2)").html(("0"+count).slice(-1));
	}
});
$("input[name='strictCheck']").change(function(){
	if ($(this).is(":checked")){
		strict = true;
	}else{
		strict = false;
	}
})

function playTime(){
	moves.push(Math.floor(Math.random()*4));
	count++;
}

function iterateMove(arr,it){
	var g = errGain[arr[it]];
	g.gain.setTargetAtTime(.5,context.currentTime,.2);
	var touch = $(".col > div[index='"+arr[it]+"']");
	touch.addClass("lit");
	timeout.push(setTimeout(function(){
		g.gain.setTargetAtTime(0,context.currentTime,.2)
		touch.removeClass("lit");
		},1000));
	if (it<arr.length-1){
		timeout.push(setTimeout(function(){iterateMove(arr,it+1)},1500))
	} else timeout.push(setTimeout("clickable = true",1000));
}

function checkMove(n,it){
	if (n==moves[it]){return true}
	else return false;
}
