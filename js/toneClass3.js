$(document).ready(function() {
	context = new webkitAudioContext();;
		oscArray = [ a1 = context.createJavaScriptNode(1024,1,1),
					 b1 = context.createJavaScriptNode(1024,1,1)]
	//var sinewave = new SineWave(context);
	function constructGraph(context){
		for(var i = 0; i < oscArray.length; i++){
			specificOsc = oscArray[i]
			$(oscArray[i]).prop("step", "i").prop("counter", 0);
			oscArray[i].onaudioprocess = function(e){generateAudioData(e)};
			$($(".playSomething")[i]).bind("click", specificOsc, playSound);
			console.log("looping");	
		}
	}
	function generateAudioData(e){//step will be used to calculate the frequency of the wave (it is the "step" in an octave).
		//console.log("called?");
		var data = e.outputBuffer.getChannelData(0);
		for (var i = 0; i < data.length; i++) {
			data[i] = Math.sin( i / (this.sample_rate / (2 * Math.PI * 440)));
			//console.log(data[i]);
		}
	}
	function playSound(oscToPlay){
		oscToPlay.data.connect(context.destination);
	}
	constructGraph();
	/*function SineWave(context) {
		that = this;
		this.x = 0; // Initial sample number
		this.context = context;
		that.sample_rate = this.context.sampleRate;
		//this.frequency = 220;
		this.node = context.createJavaScriptNode(1024, 1, 1);
		this.node.onaudioprocess = function(e) { that.process(e) };
	}
	SineWave.prototype.process = function(e) {
		var data = e.outputBuffer.getChannelData(0);
		for (var i = 0; i < data.length; ++i) {
			data[i] = Math.sin(this.x++ / (this.sample_rate / (2 * Math.PI * 440)));
		}
	}
	SineWave.prototype.play = function() {
	    this.node.connect(this.context.destination);
	}
	SineWave.prototype.pause = function() {
		console.log("turn off!");
			this.node.disconnect();
	}
	SineWave.prototype.setFrequency = function(freq) {
	  this.frequency = freq;
	}
	sinewave.play()*/
});
