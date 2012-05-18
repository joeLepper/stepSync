$(document).ready(function() {
	var context;
	var sinewave;
	var that;
	try {
		context = new webkitAudioContext();
		sinewaveA = new SineWave(context);
		sinewaveA.process = sawGenerator;
		
		function SineWave(context) {
			that = this;
			this.x = 0; // Initial sample number
			this.context = context;
			that.sample_rate = this.context.sampleRate;
			this.frequency = 27.5;
			this.node = context.createJavaScriptNode(1024, 1, 1);
			this.node.onaudioprocess = function(e) { that.process(e) };
		}
		SineWave.prototype.process = bellGenerator;
		SineWave.prototype.play = playCall;
		SineWave.prototype.pause = pauseCall;
		SineWave.prototype.setFrequency = frequencySetter;
		
		function playCall(){
		    that.node.connect(this.context.destination);		
		}
		function pauseCall(){
			that.node.disconnect();
		}
		function frequencySetter(freq){
		  this.frequency = freq;
		}
		function sineGenerator(e){
			var data = e.outputBuffer.getChannelData(0);
			for (var i = 0; i < data.length; ++i) {
				var t = this.x++ / data.length;
				data[i] = (Math.sin(this.x / (this.sample_rate / (2 * Math.PI * this.frequency))));
				data[i] *= ( 1 - t );
			}
		}
		function fmGenerator(e){
			var data = e.outputBuffer.getChannelData(0);
			var samples_length = 44100;
			for (var i = 0; i < data.length; ++i) {
				var t = this.x++/samples_length;
				var w = this.frequency*2*Math.PI*t;
				data[i] = (Math.sin(w) + 0.75*Math.sin(w*3) + 0.5*Math.sin(w*5)+0.14*Math.sin(w*7)+0.5*Math.sin(w*9)+0.12*Math.sin(11*w)+0.17*Math.sin(w*13))/(1+.75+.5+.14+.17);
				data[i] *= Math.exp(t/1.5);
				data[i] *= Math.exp(-t*1.5);
				
			}
		}
		function bellGenerator(e){
			var data = e.outputBuffer.getChannelData(0);
			var samples_length = 44100;
			for (var i = 0; i < data.length; ++i) {
				var t = this.x++/samples_length;
  				var w = 2*Math.PI*this.frequency*t;
  				data[i] = Math.cos(w + 8*Math.sin(w*2) * Math.exp(-t*4) );
  				data[i] *= Math.exp(-t/2);
			}
		}
		function sawGenerator(e){
			var data = e.outputBuffer.getChannelData(0);
			var samples_length = 44100;
			for (var i = 0; i < data.length; ++i) {
				var t = this.x++/samples_length;
				var y=0;
				var A_total = 0;
				for (var harm=1;harm<=7;harm++) {
					var f2 = this.frequency*harm;
					var A = 1/harm;
					A_total += A;
					y += A*Math.sin(f2*2*Math.PI*t);
				}
				data[i] = y/A_total;
				data[i] *= (1-0.5*Math.sin(2*Math.PI*6*t)); // Add a low frequency amplitude modulation
				data[i] *= (1-Math.exp(-t*3));
			}
		}
		//sinewaveB.play();
		//sinewaveA.play();
	}
	catch(e) {
		alert('Web Audio API is not supported in this browser');
	}
});
