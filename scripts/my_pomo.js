function makeTimer(){

    var timer = {
        seconds_passed: 0,
        intervalID: null,
        INTERVAL: 1000,

        startInterval: function()
        {
			var self = this;
            this.intervalID = setInterval(
                    function() {self.tictac();},
                    1000);
        },

        stopInterval: function()
        {
            clearInterval(this.intervalID);
        },

        reset: function()
        {
            clearInterval(this.intervalID);
            this.seconds_passed = 0;
            $("#timeleft").html('00:00');
        },

        pad: function(str, max){
        str = str.toString();
        return str.length < max ? this.pad("0" + str, max) : str;
        },

        tictac: function(){
            this.seconds_passed++;

            var minutes_str = this.pad(Math.floor(this.seconds_passed / 60), 2);
            var seconds_str = this.pad(this.seconds_passed % 60, 2)

            $("#timeleft").html(minutes_str + ':' + seconds_str);
            if (this.seconds_passed == 60 * 25){
                $("#player_audio").get(0).play();
            }
        }
    };
    return timer;
}


$(document).ready(function(){

    timer = makeTimer();

	$("button#pomodoro").click(function() {
        timer.startInterval();})

	$("button#shortBreak").click(function(){
	alert("Are you going to stare at this boring page forever?");
	});

	$("button#stop").click(function() {
		timer.stopInterval();})
	$("button#reset").click(function() {
		timer.reset();})


});
