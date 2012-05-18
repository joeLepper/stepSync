//audio graph
var context

//all samples to be initialized
var a0
var aSharp0
var b0
var c0
var cSharp0
var d0
var dSharp0
var e0
var f0
var fSharp0
var g0
var gSharp0

var a1
var aSharp1
var b1
var c1
var cSharp1
var d1
var dSharp1
var e1
var f1
var fSharp1
var g1
var gSharp1

var a2
var aSharp2
var b2
var c2
var cSharp2
var d2
var dSharp2
var e2
var f2
var fSharp2
var g2
var gSharp2

var a3
var aSharp3
var b3
var c3
var cSharp3
var d3
var dSharp3
var e3
var f3
var fSharp3
var g3
var gSharp3

var a4
var aSharp4
var b4
var c4
var cSharp4
var d4
var dSharp4
var e4
var f4
var fSharp4
var g4
var gSharp4

var a5
var aSharp5
var b5
var c5
var cSharp5
var d5
var dSharp5
var e5
var f5
var fSharp5
var g5
var gSharp5

var a6
var aSharp6
var b6
var c6
var cSharp6
var d6
var dSharp6
var e6
var f6
var fSharp6
var g6
var gSharp6

var a7
var aSharp7
var b7
var c7
var cSharp7
var d7
var dSharp7
var e7
var f7
var fSharp7
var g7
var gSharp7

//demo rhythm: when each note should play in the loop
var a0Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp0Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b0Array =      [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0];
var c0Array =      [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
var cSharp0Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d0Array =      [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
var dSharp0Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0];
var e0Array =      [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
var f0Array =      [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
var fSharp0Array = [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
var g0Array =      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0];
var gSharp0Array = [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0];

var a1Array =      [0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0];
var aSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b1Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c1Array =      [0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1];
var cSharp1Array = [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0];
var d1Array =      [1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0];
var dSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e1Array =      [0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0];
var f1Array =      [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0];
var fSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g1Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp1Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp2Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b2Array =      [0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0];
var c2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp2Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp2Array = [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
var e2Array =      [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
var f2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp2Array = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
var g2Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp2Array = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];

var a3Array =      [0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0];
var aSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0];
var b3Array =      [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
var c3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp3Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g3Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp3Array = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp4Array = [0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0];
var b4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp4Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp4Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e4Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f4Array =      [0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1];
var fSharp4Array = [1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0];
var g4Array =      [0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0];
var gSharp4Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a5Array =      [1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0];
var aSharp5Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp5Array = [0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0];
var d5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp5Array = [0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0];
var e5Array =      [0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0];
var f5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp5Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g5Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp5Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var aSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b6Array =      [1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1];
var c6Array =      [0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0];
var cSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g6Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp6Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var a7Array =      [1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0];
var aSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var b7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var c7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var cSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var d7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var e7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var f7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fSharp7Array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var g7Array =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gSharp7Array = [1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0];

//all samples in their arrays
sampleBank0 = [gSharp0,g0,fSharp0,f0,e0,dSharp0,d0,cSharp0,c0,b0,aSharp0,a0]
sampleBank1 = [gSharp1,g1,fSharp1,f1,e1,dSharp1,d1,cSharp1,c1,b1,aSharp1,a1]
sampleBank2 = [gSharp2,g2,fSharp2,f2,e2,dSharp2,d2,cSharp2,c2,b2,aSharp2,a2]
sampleBank3 = [gSharp3,g3,fSharp3,f3,e3,dSharp3,d3,cSharp3,c3,b3,aSharp3,a3]
sampleBank4 = [gSharp4,g4,fSharp4,f4,e4,dSharp4,d4,cSharp4,c4,b4,aSharp4,a4]
sampleBank5 = [gSharp5,g5,fSharp5,f5,e5,dSharp5,d5,cSharp5,c5,b5,aSharp5,a5]
sampleBank6 = [gSharp6,g6,fSharp6,f6,e6,dSharp6,d6,cSharp6,c6,b6,aSharp6,a6]
sampleBank7 = [gSharp7,g7,fSharp7,f7,e7,dSharp7,d7,cSharp7,c7,b7,aSharp7,a7]
allSamples = [sampleBank0,sampleBank1,sampleBank2,sampleBank3,sampleBank4,sampleBank5,sampleBank6,sampleBank7]

blankArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//all demo rhythms sorted into arrays by row
var rhythmArray0 = [gSharp0Array,g0Array,fSharp0Array,f0Array,e0Array,dSharp0Array,d0Array,cSharp0Array,c0Array,b0Array,aSharp0Array,a0Array];
var rhythmArray1 = [gSharp1Array,g1Array,fSharp1Array,f1Array,e1Array,dSharp1Array,d1Array,cSharp1Array,c1Array,b1Array,aSharp1Array,a1Array];
var rhythmArray2 = [gSharp2Array,g2Array,fSharp2Array,f2Array,e2Array,dSharp2Array,d2Array,cSharp2Array,c2Array,b2Array,aSharp2Array,a2Array];
var rhythmArray3 = [gSharp3Array,g3Array,fSharp3Array,f3Array,e3Array,dSharp3Array,d3Array,cSharp3Array,c3Array,b3Array,aSharp3Array,a3Array];
var rhythmArray4 = [gSharp4Array,g4Array,fSharp4Array,f4Array,e4Array,dSharp4Array,d4Array,cSharp4Array,c4Array,b4Array,aSharp4Array,a4Array];
var rhythmArray5 = [gSharp5Array,g5Array,fSharp5Array,f5Array,e5Array,dSharp5Array,d5Array,cSharp5Array,c5Array,b5Array,aSharp5Array,a5Array];
var rhythmArray6 = [gSharp6Array,g6Array,fSharp6Array,f6Array,e6Array,dSharp6Array,d6Array,cSharp6Array,c6Array,b6Array,aSharp6Array,a6Array];
var rhythmArray7 = [gSharp7Array,g7Array,fSharp7Array,f7Array,e7Array,dSharp7Array,d7Array,cSharp7Array,c7Array,b7Array,aSharp7Array,a7Array];
var rhythmArrayBlank = [blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray,blankArray];

var allRhythms = [rhythmArray0,rhythmArray1,rhythmArray2,rhythmArray3,rhythmArray4,rhythmArray5,rhythmArray6,rhythmArray7,rhythmArrayBlank];

//timing array for tracking what step in a row the sequencer is in and where each loop begins / stops
stepIndexArray = [0,0,0,0,0,0,0,0];
lastStepArray = [15,15,15,15,15,15,15,15];
startLoopArray = [0,0,0,0,0,0,0,0];
endLoopArray = [1,15,15,15,15,15,15,15];

//clock variables
var bpm = 260;
var eighthNoteTime = 60 / bpm;
var maxSwing = eighthNoteTime / 6;
var stepIndex = 0.0;
var stepTime = 0;
var startTime;
var clock;
var swingLevel = .6;
var swingStepIndex = 0;

//flags set while the user is setting / has set a miniloop
var isBeingDraggedIn = [false,false,false,false,false,false,false,false];
var isMiniLooping = [true,false,false,false,false,false,false,false];

//miniLoop arrays
var workingMiniLoop = new Array();
var miniLoops = [miniLoopA,miniLoopB,miniLoopC,miniLoopD,miniLoopE,miniLoopF,miniLoopG,miniLoopH];
var miniLoopA = [0,1];
var miniLoopB = new Array();
var miniLoopC = new Array();
var miniLoopD = new Array();
var miniLoopE = new Array();
var miniLoopF = new Array();
var miniLoopG = new Array();
var miniLoopH = new Array();

//pre-gain nodes --- TODO: COnnect the volume sliders to post-gain nodes and use these for a distortion
var preGain0;
var preGain1;
var preGain2;
var preGain3;
var preGain4;
var preGain5;
var preGain6;
var preGain7;
var preGainNodeArray = [preGain0,preGain1,preGain2,preGain3,preGain4,preGain5,preGain6,preGain7];

//final gain nodes
var gain0;
var gain1;
var gain2;
var gain3;
var gain4;
var gain5;
var gain6;
var gain7;
var gainNodeArray = [gain0,gain1,gain2,gain3,gain4,gain5,gain6,gain7];

//nodes to control number of repetitions for delay
var delayFeedbackGain0
var delayFeedbackGain1
var delayFeedbackGain2
var delayFeedbackGain3
var delayFeedbackGain4
var delayFeedbackGain5
var delayFeedbackGain6
var delayFeedbackGain7
var feedbackGainNodeArray = [delayFeedbackGain0,delayFeedbackGain1,delayFeedbackGain2,delayFeedbackGain3,delayFeedbackGain4,delayFeedbackGain5,delayFeedbackGain6,delayFeedbackGain7];

//delay nodes, control delay time
var delay0
var delay1
var delay2
var delay3
var delay4
var delay5
var delay6
var delay7
var delayArray = [delay0,delay1,delay2,delay3,delay4,delay5,delay6,delay7];

//low-pass filters
var filter0
var filter1
var filter2
var filter3
var filter4
var filter5
var filter6
var filter7
var filterArray = [filter0,filter1,filter2,filter3,filter4,filter5,filter6,filter7];

//overdrive feedback nodes
var overdrive0
var overdrive1
var overdrive2
var overdrive3
var overdrive4
var overdrive5
var overdrive6
var overdrive7
var overdriveArray = [overdrive0,overdrive1,overdrive2,overdrive3,overdrive4,overdrive5,overdrive6,overdrive7]

//compressor
var compressor

//initial FX levels
feedbackGainArray = [0.96,0.25,0.1,0.35,0.35,0.45,0.75,0.01]
delayTimeArray = [0.01,0.25,0.1,0.17,0.5,0.01,0.01,0.01]
var volumeArray = [0.6,0.75,0.3,0.3,0.2,0.5,0.1,0.2];
var filterFreqArray = [220,233,330,2000,2000,4800,4500,4500]
var filterQArray = [45,5,0.01,1.5,.3,0,0,0]
var filterTypeArray = [0,0,0,0,0,0,0,0]
var overdriveFeedbackArray = [11,0.01,0.01,0.01,0.01,0.6,18,19.95]

//initial FX states
var fxOnArray = [1,1,1,1,1,1,1,1]
var muteArray = [1,1,0,0,0,1,1,1];
var delayOnArray =[1,1,1,1,0,1,1,0]
var filterOnArray = [1,1,1,1,1,1,1,1]
var overdriveOnArray = [1,1,1,1,1,1,1,1]

//global housekeeping variables
var showPattern = 8;
var lightToTurnOff;
var turnOnOrOff;
var turnOffThisRow;
var mightJumpToHere;
var rowAffected;
var isPlaying = 0;


$(document).ready(function() {
	try {
		context = new webkitAudioContext();
		context = context;
		compressor = context.createDynamicsCompressor();

		$(".overlay").animate({left: "25%",opacity:1},1000)
		$(".blocker").animate({opacity:0.75},1500)
		init();
		initButtons();
		
		$("#drumPattern1").hide();
		
	}
	catch(e) {
		alert("Web Audio API is not supported in this browser. Download Google Chrome to take advantage of Step Sync's features.");
	}
	bufferLoader = new BufferLoader(
		context,
		[
			'audio/a3.wav',
			'audio/aSharp3.wav',
			'audio/b3.wav',
			'audio/c3.wav',
			'audio/cSharp3.wav',
			'audio/d3.wav',
			'audio/dSharp3.wav',
			'audio/e3.wav',
			'audio/f3.wav',
			'audio/fSharp3.wav',
			'audio/g3.wav',
			'audio/gSharp3.wav',
			
			'audio/a4.wav',
			'audio/aSharp4.wav',
			'audio/b4.wav',
			'audio/c4.wav',
			'audio/cSharp4.wav',
			'audio/d4.wav',
			'audio/dSharp4.wav',
			'audio/e4.wav',
			'audio/f4.wav',
			'audio/fSharp4.wav',
			'audio/g4.wav',
			'audio/gSharp4.wav',
			
			'audio/a5.wav',
			'audio/aSharp5.wav',
			'audio/b5.wav',
			'audio/c5.wav',
			'audio/cSharp5.wav',
			'audio/d5.wav',
			'audio/dSharp5.wav',
			'audio/e5.wav',
			'audio/f5.wav',
			'audio/fSharp5.wav',
			'audio/g5.wav',
			'audio/gSharp5.wav',
			
			'audio/twinkleTwinkle00.wav',
			'audio/twinkleTwinkle01.wav',
			'audio/twinkleTwinkle02.wav',
			'audio/twinkleTwinkle03.wav',
			'audio/twinkleTwinkle04.wav',
			'audio/twinkleTwinkle05.wav',
			'audio/twinkleTwinkle06.wav',
			'audio/twinkleTwinkle07.wav',
			'audio/twinkleTwinkle08.wav',
			'audio/twinkleTwinkle09.wav',
			'audio/twinkleTwinkle10.wav',
			'audio/twinkleTwinkle11.wav',
			
			'audio/a8.wav',
			'audio/aSharp8.wav',
			'audio/b8.wav',
			'audio/c8.wav',
			'audio/cSharp8.wav',
			'audio/d8.wav',
			'audio/dSharp8.wav',
			'audio/e8.wav',
			'audio/f8.wav',
			'audio/fSharp8.wav',
			'audio/g8.wav',
			'audio/gSharp8.wav'
		],
		finishedLoading
	);
	bufferLoader.load();
});

function connectTheFX(rowIndex){
		preGainNodeArray[rowIndex].disconnect();
		filterArray[rowIndex].disconnect();
		delayArray[rowIndex].disconnect();
		overdriveArray[rowIndex].disconnect();
		//main channel
		if(filterOnArray[rowIndex]){
			filterArray[rowIndex].connect(gainNodeArray[rowIndex])
			filterArray[rowIndex].connect(delayArray[rowIndex])
		}
		else{
			preGainNodeArray[rowIndex].connect(gainNodeArray[rowIndex])
			preGainNodeArray[rowIndex].connect(delayArray[rowIndex])
		}
		//overdrive loop
		if(overdriveOnArray[rowIndex]){
			preGainNodeArray[rowIndex].connect(overdriveArray[rowIndex])
			preGainNodeArray[rowIndex].connect(filterArray[rowIndex])
			overdriveArray[rowIndex].connect(filterArray[rowIndex])
		}
		else{
			preGainNodeArray[rowIndex].connect(filterArray[rowIndex])
		}
		if(delayOnArray[rowIndex]){
			delayArray[rowIndex].connect(feedbackGainNodeArray[rowIndex])
			feedbackGainNodeArray[rowIndex].connect(delayArray[rowIndex])
			delayArray[rowIndex].connect(gainNodeArray[rowIndex])
		}
		else{
			
		}
		gainNodeArray[rowIndex].connect(compressor)
		compressor.connect(context.destination)
}

function init(){
	
	$(".dump").each(function(index){
		$(this).prop("rowIndex", index)	
	})
	for(var i = 0; i < allSamples.length; i++){
		for(var j = 0; j < sampleBank0.length; j++){
			allSamples[i][j] = context.createBufferSource();
		}	
	}
	$(preGainNodeArray).each(function(index){
		preGainNodeArray[index] = context.createGainNode();
		preGainNodeArray[index].gain.value = 1;
		
		gainNodeArray[index] = context.createGainNode();
		gainNodeArray[index].gain.value = volumeArray[index];
		
		feedbackGainNodeArray[index] = context.createGainNode();
		feedbackGainNodeArray[index].gain.value = feedbackGainArray[index];
		
		delayArray[index] = context.createDelayNode();
		delayArray[index].delayTime.value = delayTimeArray[index];
		
		filterArray[index] = context.createBiquadFilter();
		filterArray[index].frequency.value = filterFreqArray[index];
		
		overdriveArray[index] = context.createGainNode();
		overdriveArray[index].gain.value = overdriveFeedbackArray[index];
	})
	startTime = context.currentTime + 0.005;
	for(var i = 0; i < 20; i++){
		for(var j = 0; j < 16; j++){
			currentButton = getTheButton(i, j);
			if( i < 12 ){
					$(currentButton).prop("rowIndex", i).prop("columnIndex", j).bind("mousedown", stepToggle);
			}
			else{
					$(currentButton).prop("rowIndex", i - 12).prop("columnIndex", j).bind({click: stepJump,
																						   mousedown: startRowDrag});
			}
		}	
	}
}
function finishedLoading (bufferList) {
	var bufferIndex = 0
	for(var i = 0; i < allSamples.length; i++){
		for(var j = 0; j < sampleBank0.length; j++){
			if(bufferIndex < 48){
				allSamples[i][j] = bufferList[bufferIndex];
				bufferIndex++
			}
			else{
				allSamples[i][j] = bufferList[bufferIndex];
				if( bufferIndex === 59){
					bufferIndex = 48;	
				}
				else{
					bufferIndex++	
				}
			}
		}
	}
	$(preGainNodeArray).each(function(index){
		connectTheFX(index)
		if(!muteArray[index]){
			currentButton = getTheMuteButton(index)
			$(currentButton).removeClass("mute").addClass("muted")
			gainNodeArray[index].gain.value = 0;
		}
	})
}
function nextSchedule (){
	currentTime = context.currentTime;
	currentTime -= startTime;
	nextStep = currentTime + eighthNoteTime;
	while(stepTime < currentTime +0.040){
		var contextPlayTime = stepTime + startTime
		for(var i = 0; i < allRhythms.length; i++){
			for(var j = 0; j < rhythmArray0.length; j++){
				if(allRhythms[i][j][stepIndexArray[i]]){
					playSound(allSamples[i][Math.abs(j-11)], contextPlayTime, i)
				}
			}
		}		
		advanceStep();
	}
	clock = setTimeout("nextSchedule()", 0);
}
function playSound(buffer, time, index) {
	var source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(preGainNodeArray[index]);
	source.connect(overdriveArray[index]);
	source.noteOn(time);
}
function advanceStep(){
	eighthNoteTime = 60 / bpm
	var swing = maxSwing * swingLevel
	//if(swingStepIndex){
		stepTime += eighthNoteTime //+ swing;
		//swingStepIndex = 0
	//}
	//else{
		//stepTime += eighthNoteTime - swing;
		//swingStepIndex = 1
	//}
	updateLights();
	for(var i = 0; i < stepIndexArray.length; i++){
		if(stepIndexArray[i] != endLoopArray[i]){
			stepIndexArray[i]++
		}
		else{
			stepIndexArray[i] = startLoopArray[i];
		}
	}
}
function lightItUp(){
	//turn off
	if (turnOnOrOff){       
		allRhythms[showPattern][$(this).prop("rowIndex")][$(this).prop("columnIndex")] = 0;
		$(this).removeClass("active")
	}
	//turn on
	else{       
		allRhythms[showPattern][$(this).prop("rowIndex")][$(this).prop("columnIndex")] = 1;
		$(this).addClass("active")
	}
}
function stopToggling(){
	$(window).unbind("mouseup", stopToggling);
	for(var i = 0; i < rowA.length; i++){
		for(var j = 0; j < a7Array.length; j++){
			bindToThese = getTheButton(i,j);
			$(bindToThese).unbind("mouseover", lightItUp).unbind("mouseup", stopToggling);
		}	
	}
}
function updateLights(){
	for(var i = 0; i < 20; i++){
		if( i < 12 ){
			if(stepIndexArray[i] < startLoopArray[i] || stepIndexArray[i] > endLoopArray[i]){
				currentButton = getTheButton(i, stepIndexArray[i - 12]);
				currentButton.removeClass("active")
				var isCurrentInAMiniLoop = workingMiniLoop.indexOf(stepIndexArray[i])
				if(isCurrentInAMiniLoop != -1){
					currentButton.addClass("loop")
				}
			}
			lastStepArray[i] = stepIndexArray[i] - 1 
			if(lastStepArray[i] === -1 || (lastStepArray[i] === startLoopArray[i] - 1 && isMiniLooping[i])){
				lastStepArray[i] = endLoopArray[i]	
			}
			for(var j = 0; j < rhythmArray4.length; j++){
				lastButton = getTheButton(j, lastStepArray[showPattern]);
				currentButton = getTheButton(j,stepIndexArray[showPattern]);
				if(!allRhythms[showPattern][j][stepIndexArray[showPattern]] && !allRhythms[showPattern][j][lastStepArray[showPattern]]){
					$(currentButton).addClass("active");
					$(lastButton).removeClass("active").addClass("punch");
				}
				else if(!allRhythms[showPattern][j][stepIndexArray[showPattern]] && allRhythms[showPattern][j][lastStepArray[showPattern]]){
					$(currentButton).addClass("active");				
				}
				else if(allRhythms[showPattern][j][stepIndexArray[showPattern]] && !allRhythms[showPattern][j][lastStepArray[showPattern]]){
					$(lastButton).removeClass("active").addClass("punch");
				}
				else{
					
				}
			}
		}
		else{
				currentButton = getTheButton(i, stepIndexArray[i - 12]);
				lastButton = getTheButton(i, lastStepArray[i - 12]);
				if(isMiniLooping[i - 12]){
					if(stepIndexArray[i - 12] < startLoopArray[i - 12] || stepIndexArray[i - 12] > endLoopArray[i - 12]){
					}
					else if(lastStepArray[i - 12] < startLoopArray[i - 12] || lastStepArray[i - 12] > endLoopArray[i - 12]){
					}
					else{
						$(currentButton).removeClass("loop").addClass("active")
						$(lastButton).removeClass("active").addClass("loop")
					}
				}
				else if(isBeingDraggedIn[i - 12]){
					var isCurrentInThere = workingMiniLoop.indexOf(stepIndexArray[i - 12]);
					var isLastInThere = workingMiniLoop.indexOf(lastStepArray[i - 12]);
					if(isCurrentInThere === -1 && isLastInThere === -1){
						$(currentButton).addClass("active")
						$(lastButton).removeClass("active")
					}
					else if(isCurrentInThere != -1 && isLastInThere === -1){
						$(currentButton).removeClass("loop").addClass("active")
						$(lastButton).removeClass("active")
					}
					else if(isCurrentInThere === -1 && isLastInThere != -1){
						$(currentButton).addClass("active")
						$(lastButton).removeClass("active").addClass("loop")
					}
					else if(isCurrentInThere != -1 && isLastInThere != -1){
						$(currentButton).removeClass("loop").addClass("active")
						$(lastButton).removeClass("active").addClass("loop")
					}
				}
				else{
					$(currentButton).addClass("active")
					$(lastButton).removeClass("active")
				}
		}
	}
}
function initPattern(screen){
	$(".active").each(function(){
		$(this).removeClass("active")
	});
	if(!screen){
		filterMax = $(".filterFreq").attr("min")
		
		$(".delayFeedbackGain").attr("value", feedbackGainArray[showPattern] * 100)
		$(".delayTime").attr("value", delayTimeArray[showPattern] * 100)
		//ugly hack for setting the filter frequency slider TODO: FIX THIS OLD AND BUSTED EQUATION
		$(".filterFreq").attr("value",filterFreqArray[showPattern] / 5000 )    
		$(".filterQ").attr("value", filterQArray[showPattern] / 5)
		$(".overdriveFeedback").attr("value", overdriveFeedbackArray[showPattern])
		
		$("#delayTime").html("Time: " + (delayTimeArray[showPattern]) + "s")
		$("#delayFeedback").html("Feedback: " + (feedbackGainArray[showPattern] * 100) + "%")
		$("#filterFrequency").html("Freq: " + filterFreqArray[showPattern].toFixed(0) + "hz")
		$("#filterQ").html("Q: " + (filterQArray[showPattern] * 2) + "%")
		forString = ( ((overdriveFeedbackArray[showPattern] / 10)-1) * 100 ).toFixed(0)
		$("#overdriveFeedback").html("Amount: " + forString + "%")
		if(delayOnArray[showPattern] && $("#fx0").hasClass("activeFx")){
			$("#fx0").addClass("fx").removeClass("activeFx")
		}
		else if(!delayOnArray[showPattern] && $("#fx0").hasClass("fx")){
			$("#fx0").addClass("activeFx").removeClass("fx")
		}
		if(filterOnArray[showPattern] && $("#fx1").hasClass("activeFx")){
			$("#fx1").addClass("fx").removeClass("activeFx")
		}
		else if(!filterOnArray[showPattern] && $("#fx1").hasClass("fx")){
			$("#fx1").addClass("activeFx").removeClass("fx")
		}
		if(overdriveOnArray[showPattern] && $("#fx2").hasClass("activeFx")){
			$("#fx2").addClass("fx").removeClass("activeFx")
		}
		else if(!overdriveOnArray[showPattern] && $("#fx2").hasClass("fx")){
			$("#fx2").addClass("activeFx").removeClass("fx")
		}
		if(delayOnArray[showPattern]){
				$("#delayOn").html("Delay: On")
		}
		else{
				$("#delayOn").html("Delay: Off")
		}
		if(filterOnArray[showPattern]){
				$("#filterOn").html("Filter: On")
		}
		else{
				$("#filterOn").html("Filter: Off")
		}
		if(overdriveOnArray[showPattern]){
				$("#overdriveOn").html("Overdrive: On")
		}
		else{
				$("#overdriveOn").html("Overdrive: Off")
		}
		if(fxOnArray[showPattern]){
				$("#fxOn").html("Effects: On")
				$("#fx3").addClass("fx").removeClass("activeFx")
		}
		else{
				$("#fxOn").html("Effects: Off")
				$("#fx3").addClass("activeFx").removeClass("fx")
		}
		for(var i = 0; i < rhythmArray0.length; i++){
			for(var j = 0; j < a1Array.length; j++){
				currentButton = getTheButton(i,j);
				if(allRhythms[showPattern][i][j]){
					$(currentButton).addClass("active");
				}
				else{

				}
			}
		}
	}
	else{
		for(var i=0; i < fxOnArray.length; i++){
			thisLight = getTheDumpButton(i)
			if(!fxOnArray[i]){
				$(thisLight).addClass("dumped").removeClass("dump")
			}
			else{
				$(thisLight).removeClass("dumped").addClass("dump")
			}
		}	
	}
}

function stepJump(){
	lightToTurnOff = getTheButton($(this).prop("rowIndex") + 12,stepIndexArray[$(this).prop("rowIndex")] - 1)
	$(lightToTurnOff).removeClass("active");
	stepIndexArray[$(this).prop("rowIndex")] = $(this).prop("columnIndex");
	startLoopArray[$(this).prop("rowIndex")] = 0;
	endLoopArray[$(this).prop("rowIndex")] = 15;
	isMiniLooping[$(this).prop("rowIndex")] = false;
}
/**********************************************************************/
/*            Begins setting miniloop                                 */ 
/**********************************************************************/
		
function startRowDrag(){
	var row = $(this).prop("rowIndex");
	var column = $(this).prop("columnIndex");
	rowAffected = row;
	workingMiniLoop = [column];
	isBeingDraggedIn[row] = true;
	turnOffThisRow = row;
	mightJumpToHere = column;
	if($(this).hasClass("punch")){
	$(this).addClass("loop")
	}
	else if($(this).hasClass("active")){
		
	}
	else{
		
	}
	$(this).bind("mouseup", escapeRowDrag)
	$(window).bind("mouseup", escapeRowDrag);
	for(var i=0; i < 16; i++){
		$(getTheButton(row + 12,i)).bind("mouseover", addRowDrag).bind("mouseup", endRowDrag);
	};
};

/**********************************************************************/
/*               Adds step to miniloop                                */ 
/**********************************************************************/

function addRowDrag(){
	var column = $(this).prop("columnIndex")
	var workingIndex;
	$(this).addClass("loop")
		   .bind("mousedown", startRowDrag)
	$(workingMiniLoop).each(function(index) { 
		$(getTheButton(rowAffected + 12, workingMiniLoop[index])).removeClass("loop")
												 .addClass("punch");
	});
	workingMiniLoop = [mightJumpToHere];
	if(column > workingMiniLoop[0]){
		workingIndex = column
		for(i = 0; i < column - workingMiniLoop[0]; i++){
			workingMiniLoop.push(workingIndex);
			workingIndex--;			
		}
	}
	else{
		workingIndex = column
		for(i = 0; i < workingMiniLoop[0] - column ; i++){
			workingMiniLoop.push(workingIndex);
			workingIndex++;			
		}
	}
	$(workingMiniLoop).each(function(index) { 
		$(getTheButton(rowAffected + 12,workingMiniLoop[index]))
												 .addClass("loop");
	});
};

/**********************************************************************/
/*               Cancels the setting of miniloop                      */ 
/**********************************************************************/
	
function escapeRowDrag(){
	if(workingMiniLoop === []){
	
	}
	else{
		$(workingMiniLoop).each(function(index){
			if($(getTheButton(rowAffected + 12,workingMiniLoop[index])).hasClass("loop")){
				$(getTheButton(rowAffected + 12,workingMiniLoop[index])).removeClass("loop")
															   .addClass("punch");
			}
			else{
				$(getTheButton(rowAffected + 12,workingMiniLoop[index])).removeClass("active")
															   .addClass("punch");
			}
		});
	}
	$(isBeingDraggedIn).each(function(index){
		isBeingDraggedIn[index] = false;
	});
	$(window).unbind("mouseup", escapeRowDrag);
	$(this).removeClass("loop")
		   .addClass("punch");
	for(var i=0; i<16; i++){
		$(getTheButton(turnOffThisRow + 12,i)).unbind("mouseover", addRowDrag)
	};
};

/**********************************************************************/
/*                         Sets the miniloop                          */ 
/**********************************************************************/

function endRowDrag(){
	lightToTurnOff = getTheButton($(this).prop("rowIndex") + 12,lastStepArray[$(this).prop("rowIndex")] + 1)
	$(lightToTurnOff).removeClass("active");
	row = $(this).prop("rowIndex");
	column = $(this).prop("columnIndex")
	isBeingDraggedIn[row] = false;
	isMiniLooping[row] = true;
	if(mightJumpToHere > column){
		startLoopArray[row] = column;
		endLoopArray[row] = mightJumpToHere;
		stepIndexArray[row] = column;
	}
	else{
		startLoopArray[row] = mightJumpToHere;
		endLoopArray[row] = column;
		stepIndexArray[row] = mightJumpToHere;
	}
	if(workingMiniLoop.indexOf(lastStepArray[row]) != -1){
		$(getTheButton(row + 12,lastStepArray[row])).removeClass("active")// <----turns off the currently active light before jumping into the new miniloop
										   .addClass("loop");
	}
	else{
		$(getTheButton(row + 12,lastStepArray[row])).removeClass("active")// <----turns off the currently active light before jumping into the new miniloop
										   .addClass("punch");
	};
	lastStepArray[row] = stepIndexArray[row] - 1;
	$(window).unbind("mouseup", escapeRowDrag);
	for(var i = 0; i < 16; i++){
		$(getTheButton(turnOffThisRow + 12, i)).each(function(index){ 
			$(this).unbind("mouseover", addRowDrag)
				   .unbind("mouseup",endRowDrag);
		})
	}
	$(miniLoops[rowAffected]).each(function(index){
		var isItInThere = workingMiniLoop.indexOf(miniLoops[rowAffected][index]);
		if($(getTheButton(rowAffected + 12, miniLoops[rowAffected][index])).hasClass("loop") && isItInThere === -1){
			$(getTheButton(rowAffected + 12, miniLoops[rowAffected][index])).removeClass("loop")
																  .addClass("punch");
		}
		else if($(getTheButton(rowAffected + 12, miniLoops[rowAffected][index]) && isItInThere != -1).hasClass("punch")){
			$(getTheButton(rowAffected + 12, miniLoops[rowAffected][index])).removeClass("loop")
																  .addClass("punch");
		}
		else{
			$(getTheButton(rowAffected + 12, miniLoops[rowAffected][index])).removeClass("active")
															  .addClass("punch");
		}
	})
	miniLoops[row] = workingMiniLoop;
};

//getTheButton here
function getTheButton(row, column){
		rowA = [document.getElementById('a0'),document.getElementById('a1'),document.getElementById('a2'),document.getElementById('a3'),document.getElementById('a4'),document.getElementById('a5'),document.getElementById('a6'),document.getElementById('a7'),document.getElementById('a8'),document.getElementById('a9'),document.getElementById('a10'),document.getElementById('a11'),document.getElementById('a12'),document.getElementById('a13'),document.getElementById('a14'),document.getElementById('a15')]
		rowB = [document.getElementById('b0'),document.getElementById('b1'),document.getElementById('b2'),document.getElementById('b3'),document.getElementById('b4'),document.getElementById('b5'),document.getElementById('b6'),document.getElementById('b7'),document.getElementById('b8'),document.getElementById('b9'),document.getElementById('b10'),document.getElementById('b11'),document.getElementById('b12'),document.getElementById('b13'),document.getElementById('b14'),document.getElementById('b15')]
		rowC = [document.getElementById('c0'),document.getElementById('c1'),document.getElementById('c2'),document.getElementById('c3'),document.getElementById('c4'),document.getElementById('c5'),document.getElementById('c6'),document.getElementById('c7'),document.getElementById('c8'),document.getElementById('c9'),document.getElementById('c10'),document.getElementById('c11'),document.getElementById('c12'),document.getElementById('c13'),document.getElementById('c14'),document.getElementById('c15')]
		rowD = [document.getElementById('d0'),document.getElementById('d1'),document.getElementById('d2'),document.getElementById('d3'),document.getElementById('d4'),document.getElementById('d5'),document.getElementById('d6'),document.getElementById('d7'),document.getElementById('d8'),document.getElementById('d9'),document.getElementById('d10'),document.getElementById('d11'),document.getElementById('d12'),document.getElementById('d13'),document.getElementById('d14'),document.getElementById('d15')]
		rowE = [document.getElementById('e0'),document.getElementById('e1'),document.getElementById('e2'),document.getElementById('e3'),document.getElementById('e4'),document.getElementById('e5'),document.getElementById('e6'),document.getElementById('e7'),document.getElementById('e8'),document.getElementById('e9'),document.getElementById('e10'),document.getElementById('e11'),document.getElementById('e12'),document.getElementById('e13'),document.getElementById('e14'),document.getElementById('e15')]
		rowF = [document.getElementById('f0'),document.getElementById('f1'),document.getElementById('f2'),document.getElementById('f3'),document.getElementById('f4'),document.getElementById('f5'),document.getElementById('f6'),document.getElementById('f7'),document.getElementById('f8'),document.getElementById('f9'),document.getElementById('f10'),document.getElementById('f11'),document.getElementById('f12'),document.getElementById('f13'),document.getElementById('f14'),document.getElementById('f15')]
		rowG = [document.getElementById('g0'),document.getElementById('g1'),document.getElementById('g2'),document.getElementById('g3'),document.getElementById('g4'),document.getElementById('g5'),document.getElementById('g6'),document.getElementById('g7'),document.getElementById('g8'),document.getElementById('g9'),document.getElementById('g10'),document.getElementById('g11'),document.getElementById('g12'),document.getElementById('g13'),document.getElementById('g14'),document.getElementById('g15')]
		rowH = [document.getElementById('h0'),document.getElementById('h1'),document.getElementById('h2'),document.getElementById('h3'),document.getElementById('h4'),document.getElementById('h5'),document.getElementById('h6'),document.getElementById('h7'),document.getElementById('h8'),document.getElementById('h9'),document.getElementById('h10'),document.getElementById('h11'),document.getElementById('h12'),document.getElementById('h13'),document.getElementById('h14'),document.getElementById('h15')]
		rowI = [document.getElementById('i0'),document.getElementById('i1'),document.getElementById('i2'),document.getElementById('i3'),document.getElementById('i4'),document.getElementById('i5'),document.getElementById('i6'),document.getElementById('i7'),document.getElementById('i8'),document.getElementById('i9'),document.getElementById('i10'),document.getElementById('i11'),document.getElementById('i12'),document.getElementById('i13'),document.getElementById('i14'),document.getElementById('i15')]
		rowJ = [document.getElementById('j0'),document.getElementById('j1'),document.getElementById('j2'),document.getElementById('j3'),document.getElementById('j4'),document.getElementById('j5'),document.getElementById('j6'),document.getElementById('j7'),document.getElementById('j8'),document.getElementById('j9'),document.getElementById('j10'),document.getElementById('j11'),document.getElementById('j12'),document.getElementById('j13'),document.getElementById('j14'),document.getElementById('j15')]
		rowK = [document.getElementById('k0'),document.getElementById('k1'),document.getElementById('k2'),document.getElementById('k3'),document.getElementById('k4'),document.getElementById('k5'),document.getElementById('k6'),document.getElementById('k7'),document.getElementById('k8'),document.getElementById('k9'),document.getElementById('k10'),document.getElementById('k11'),document.getElementById('k12'),document.getElementById('k13'),document.getElementById('k14'),document.getElementById('k15')]
		rowL = [document.getElementById('l0'),document.getElementById('l1'),document.getElementById('l2'),document.getElementById('l3'),document.getElementById('l4'),document.getElementById('l5'),document.getElementById('l6'),document.getElementById('l7'),document.getElementById('l8'),document.getElementById('l9'),document.getElementById('l10'),document.getElementById('l11'),document.getElementById('l12'),document.getElementById('l13'),document.getElementById('l14'),document.getElementById('l15')]
		rowAA = [document.getElementById('aa0'),document.getElementById('aa1'),document.getElementById('aa2'),document.getElementById('aa3'),document.getElementById('aa4'),document.getElementById('aa5'),document.getElementById('aa6'),document.getElementById('aa7'),document.getElementById('aa8'),document.getElementById('aa9'),document.getElementById('aa10'),document.getElementById('aa11'),document.getElementById('aa12'),document.getElementById('aa13'),document.getElementById('aa14'),document.getElementById('aa15')]
		rowBB = [document.getElementById('bb0'),document.getElementById('bb1'),document.getElementById('bb2'),document.getElementById('bb3'),document.getElementById('bb4'),document.getElementById('bb5'),document.getElementById('bb6'),document.getElementById('bb7'),document.getElementById('bb8'),document.getElementById('bb9'),document.getElementById('bb10'),document.getElementById('bb11'),document.getElementById('bb12'),document.getElementById('bb13'),document.getElementById('bb14'),document.getElementById('bb15')]
		rowCC = [document.getElementById('cc0'),document.getElementById('cc1'),document.getElementById('cc2'),document.getElementById('cc3'),document.getElementById('cc4'),document.getElementById('cc5'),document.getElementById('cc6'),document.getElementById('cc7'),document.getElementById('cc8'),document.getElementById('cc9'),document.getElementById('cc10'),document.getElementById('cc11'),document.getElementById('cc12'),document.getElementById('cc13'),document.getElementById('cc14'),document.getElementById('cc15')]
		rowDD = [document.getElementById('dd0'),document.getElementById('dd1'),document.getElementById('dd2'),document.getElementById('dd3'),document.getElementById('dd4'),document.getElementById('dd5'),document.getElementById('dd6'),document.getElementById('dd7'),document.getElementById('dd8'),document.getElementById('dd9'),document.getElementById('dd10'),document.getElementById('dd11'),document.getElementById('dd12'),document.getElementById('dd13'),document.getElementById('dd14'),document.getElementById('dd15')]
		rowEE = [document.getElementById('ee0'),document.getElementById('ee1'),document.getElementById('ee2'),document.getElementById('ee3'),document.getElementById('ee4'),document.getElementById('ee5'),document.getElementById('ee6'),document.getElementById('ee7'),document.getElementById('ee8'),document.getElementById('ee9'),document.getElementById('ee10'),document.getElementById('ee11'),document.getElementById('ee12'),document.getElementById('ee13'),document.getElementById('ee14'),document.getElementById('ee15')]
		rowFF = [document.getElementById('ff0'),document.getElementById('ff1'),document.getElementById('ff2'),document.getElementById('ff3'),document.getElementById('ff4'),document.getElementById('ff5'),document.getElementById('ff6'),document.getElementById('ff7'),document.getElementById('ff8'),document.getElementById('ff9'),document.getElementById('ff10'),document.getElementById('ff11'),document.getElementById('ff12'),document.getElementById('ff13'),document.getElementById('ff14'),document.getElementById('ff15')]
		rowGG = [document.getElementById('gg0'),document.getElementById('gg1'),document.getElementById('gg2'),document.getElementById('gg3'),document.getElementById('gg4'),document.getElementById('gg5'),document.getElementById('gg6'),document.getElementById('gg7'),document.getElementById('gg8'),document.getElementById('gg9'),document.getElementById('gg10'),document.getElementById('gg11'),document.getElementById('gg12'),document.getElementById('gg13'),document.getElementById('gg14'),document.getElementById('gg15')]
		rowHH = [document.getElementById('hh0'),document.getElementById('hh1'),document.getElementById('hh2'),document.getElementById('hh3'),document.getElementById('hh4'),document.getElementById('hh5'),document.getElementById('hh6'),document.getElementById('hh7'),document.getElementById('hh8'),document.getElementById('hh9'),document.getElementById('hh10'),document.getElementById('hh11'),document.getElementById('hh12'),document.getElementById('hh13'),document.getElementById('hh14'),document.getElementById('hh15')]
		rowII = [document.getElementById('ii0'),document.getElementById('ii1'),document.getElementById('ii2'),document.getElementById('ii3'),document.getElementById('ii4'),document.getElementById('ii5'),document.getElementById('ii6'),document.getElementById('ii7'),document.getElementById('ii8'),document.getElementById('ii9'),document.getElementById('ii10'),document.getElementById('ii11'),document.getElementById('ii12'),document.getElementById('ii13'),document.getElementById('ii14'),document.getElementById('ii15')]
		rowJJ = [document.getElementById('jj0'),document.getElementById('jj1'),document.getElementById('jj2'),document.getElementById('jj3'),document.getElementById('jj4'),document.getElementById('jj5'),document.getElementById('jj6'),document.getElementById('jj7'),document.getElementById('jj8'),document.getElementById('jj9'),document.getElementById('jj10'),document.getElementById('jj11'),document.getElementById('jj12'),document.getElementById('jj13'),document.getElementById('jj14'),document.getElementById('jj15')]
		rowKK = [document.getElementById('kk0'),document.getElementById('kk1'),document.getElementById('kk2'),document.getElementById('kk3'),document.getElementById('kk4'),document.getElementById('kk5'),document.getElementById('kk6'),document.getElementById('kk7'),document.getElementById('kk8'),document.getElementById('kk9'),document.getElementById('kk10'),document.getElementById('kk11'),document.getElementById('kk12'),document.getElementById('kk13'),document.getElementById('kk14'),document.getElementById('kk15')]
		rowLL = [document.getElementById('ll0'),document.getElementById('ll1'),document.getElementById('ll2'),document.getElementById('ll3'),document.getElementById('ll4'),document.getElementById('ll5'),document.getElementById('ll6'),document.getElementById('ll7'),document.getElementById('ll8'),document.getElementById('ll9'),document.getElementById('ll10'),document.getElementById('ll11'),document.getElementById('ll12'),document.getElementById('ll13'),document.getElementById('ll14'),document.getElementById('ll15')]
		rowArray = [rowA,rowB,rowC,rowD,rowE,rowF,rowG,rowH,rowI,rowJ,rowK,rowL,rowAA,rowBB,rowCC,rowDD,rowEE,rowFF,rowGG,rowHH,rowII,rowJJ,rowKK,rowLL];
		return rowArray[row][column];
}
function getTheDumpButton(index){
	dumpArray = [document.getElementById('aaD'),document.getElementById('bbD'),document.getElementById('ccD'),document.getElementById('ddD'),document.getElementById('eeD'),document.getElementById('ffD'),document.getElementById('ggD'),document.getElementById('hhD')]
	return dumpArray[index];

}
function getTheMuteButton(index){
	muteButtonArray = [document.getElementById('aaM'),document.getElementById('bbM'),document.getElementById('ccM'),document.getElementById('ddM'),document.getElementById('eeM'),document.getElementById('ffM'),document.getElementById('ggM'),document.getElementById('hhM')]	
	return muteButtonArray[index];
}
