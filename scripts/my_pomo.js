var seconds = 0;
var timer = null;

function tictac(){
    seconds++;

    var minutes_str = pad(Math.floor(seconds / 60), 2);
    var seconds_str = pad(seconds % 60, 2)

    $("#timeleft").html(minutes_str + ':' + seconds_str);
    if (seconds == 60 * 25){
        $("#player_audio").get(0).play();
    }
}

function reset()
{
clearInterval(timer);
    seconds=0;
    $("#timeleft").html('00:00');
}

function startInterval()
{
timer= setInterval("tictac()", 1000);
}
function stopInterval()
{
    clearInterval(timer);
}

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

$(document).ready(function(){

	$("button#pomodoro").click(startInterval)

	$("button#shortBreak").click(function(){
	alert("Are you going to stare at this boring page forever?");
	});

	$("button#stop").click(stopInterval)
	$("button#reset").click(reset)


});
