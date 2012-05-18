function initButtons(){
		$(".dismiss").bind("click", function(){
			$(".overlay").animate({opacity: 0.0, 
								   left: "100%"},500)
			$(".blocker").animate({opacity:0.0},500)
								   
			window.setTimeout(function(){
				$(".overlay").hide()
				$(".blocker").hide()
			},500)
				
		})
		$(".volume").each(function(index){
			$(this).attr("value", volumeArray[index] * 100).change(function(i){
				that = $(this);
				var channelGain = that.val()  / that.attr("max");
				volumeArray[index] = channelGain;
				gainNodeArray[index].gain.value = channelGain;
				muteArray[index] = 1;
				if($(getTheMuteButton(index))){
					$(getTheMuteButton(index)).removeClass("muted").addClass("mute")
				}
			})
		})
		$(".bpm").change(function(){
				bpm = $(this).val();
				forStringification = bpm * 1;
				stringified = forStringification.toFixed(2)
				$("#tempoLabel").html("TEMPO: " + stringified + "bpm")
			})	
		$(".swing").change(function(){
				swingLevel = $(this).val();
			})	
		$(".delayFeedbackGain").each(function(index){
				$(this).change(function(){
					that = $(this);
					var feedbackGain = that.val()  / that.attr("max");
					feedbackGainArray[showPattern] = feedbackGain;
					feedbackGainNodeArray[showPattern].gain.value = feedbackGain;
					toBeStringified = feedbackGain * 100
					forString = toBeStringified.toFixed(0)
					$("#delayFeedback").html("Feedback: " + forString + "%")
				})
			});
		$(".delayTime").each(function(index){
				$(this).change(function(){
					that = $(this);
					var delayTime = that.val()  / that.attr("max");
					delayTimeArray[showPattern] = delayTime;
					delayArray[showPattern].delayTime.value = delayTime;
					$("#delayTime").html("Time: " + delayTime + "s")
				})
		})
		$(".filterFreq").each(function(index){
				$(this).change(function(){
					that = $(this);
					var maxValue = context.sampleRate / 2;
					var numberOfOctaves = Math.log(that.attr("max") / that.attr("min")) / Math.LN2;
					var multiplier = Math.pow(2, numberOfOctaves * (that.val() - 1.0));
					var freq = maxValue * multiplier;
					filterFreqArray[showPattern] = freq;
					filterArray[showPattern].frequency.value = freq;
					forString = freq.toFixed(0);
					$("#filterFrequency").html("Freq: " + forString + "hz")
				})
		})
		$(".filterQ").each(function(index){
				$(this).change(function(){
					that = $(this);
					var q = that.val() * 5;
					filterQArray[showPattern] = q;
					filterArray[showPattern].Q.value = q;
					toBeStringified = q * 2
					forString = toBeStringified.toFixed(0)
					$("#filterQ").html("Q: " + forString + "%")
				})
		})
		$(".overdriveFeedback").each(function(index){
				$(this).change(function(){
					that = $(this);
					var feedback = that.val();
					secondParameter =  (1 + ((feedback - .8) / .15)) * 10;
					overdriveArray[showPattern].gain.value = secondParameter;
					forString = ( ((secondParameter / 10)-1) * 100 ).toFixed(0)
					$("#overdriveFeedback").html("Amount: " + forString + "%")
					overdriveFeedbackArray[showPattern] = secondParameter;
					console.log(secondParameter)

				})
		})
		$(".dump").bind({mouseover: showFXLabel,
							click: dump})
		$("#fx0").bind("click", delayOn)	
		$("#fx1").bind("click", filterOn)					
		$("#fx2").bind("click", overdriveOn)
		$("#fx3").bind("click", innerDump)
		
		function delayOn(){
			if(!delayOnArray[showPattern]){
				delayOnArray[showPattern] = 1
				$(this).addClass("fx").removeClass("activeFx")
				$("#delayOn").html("Delay: On")
			}
			else{
				delayOnArray[showPattern] = 0
				$(this).removeClass("fx").addClass("activeFx")
				$("#delayOn").html("Delay: Off")
			}
			connectTheFX(showPattern)
		}					
		function filterOn(){
			if(!filterOnArray[showPattern]){
				filterOnArray[showPattern] = 1
				$(this).addClass("fx").removeClass("activeFx")
				$("#filterOn").html("Filter: On")
			}
			else{
				filterOnArray[showPattern] = 0
				$(this).removeClass("fx").addClass("activeFx")
				$("#filterOn").html("Filter: Off")
			}
			connectTheFX(showPattern)
		}
		function overdriveOn(){
			if(!overdriveOnArray[showPattern]){
				overdriveOnArray[showPattern] = 1
				$(this).addClass("fx").removeClass("activeFx")
				$("#overdriveOn").html("Overdrive: On")
			}
			else{
				overdriveOnArray[showPattern] = 0
				$(this).removeClass("fx").addClass("activeFx")
				$("#overdriveOn").html("Overdrive: Off")
			}
			connectTheFX(showPattern)
		}					
		function showFXLabel(){
			$(this).bind("mouseout", function(){
				$(this).html("")
			})	
		}
		function innerDump(){
			if(fxOnArray[showPattern]){
				fxOnArray[showPattern] = 0
				$(this).removeClass("fx").addClass("activeFx")
				gainNodeArray[showPattern].disconnect();
				gainNodeArray[showPattern].connect(context.destination)
				$("#fxOn").html("Effects: Off")
			}
			else{
				fxOnArray[showPattern] = 1
				$(this).addClass("fx").removeClass("activeFx")
				connectTheFX(showPattern)
				$("#fxOn").html("Effects: On")
			}
		}
		function dump(){
			$(this).unbind({mouseover: showFXLabel, click: dump}).removeClass("dump").addClass("dumped").bind({mouseover: showBlankFXLabel, click: unDump})
			rowIndex = $(this).prop("rowIndex")
			gainNodeArray[rowIndex].disconnect();
			gainNodeArray[rowIndex].connect(context.destination)
			fxOnArray[rowIndex] = 0
		}
		function showBlankFXLabel(){
			$(this).html("")
		}
		function unDump(){
			$(this).unbind({mouseover: showBlankFXLabel, click: unDump}).removeClass("dumped").addClass("dump").bind({mouseover: showFXLabel, click: dump})
			connectTheFX($(this).prop("rowIndex"))
			fxOnArray[$(this).prop("rowIndex")] = 1
		}
		$("#switcher0").prop("patternIndex",8).bind("click", function(){
			$("#drumPattern1").hide();
			$("#drumPattern2").show();
			showPattern = $(this).prop("patternIndex")
				initPattern(1);
		});
		for(var i = 0; i < $(".switcher").length; i++){
			$($(".switcher")[i]).prop("patternIndex",i).bind("click", function(i){
				$("#drumPattern2").hide();
				$("#drumPattern1").show();
				showPattern = $(this).prop("patternIndex")
				initPattern(0);
			});
		}
		$(".mute").each(function(index){
			$(this).prop("rowIndex", index).bind({click: muteCall, mouseover: showMuteLabel})
		});
		$(".playPause").each(function(){$(this).bind({click: handlePlay,
													  mouseover: showLabel});})
}
function handlePlay (){
	isPlaying = 1;
	$(this).html("")
	$(".playPause").each(function(){$(this).unbind("click", handlePlay).bind("click", handlePause).removeClass("playPause").addClass("pause")});
	stepTime = 0.0;
	startTime = context.currentTime + 0.005;
	$(stepIndexArray).each(function(index){
		stepIndexArray[index] = startLoopArray[index];
	})
	nextSchedule();
}
function handlePause(){
	isPlaying = 0;
	$(this).html("")
	$(".pause").each(function(){$(this).unbind("click", handlePause).bind("click", handlePlay).removeClass("pause").addClass("playPause")});
	clearTimeout(clock); 
	for(var i = 0; i < 20; i++){
		if(i < 12){
			currentButton = getTheButton(i,lastStepArray[showPattern] + 1)
			if(!allRhythms[showPattern][i][lastStepArray[showPattern] + 1]){
				$(currentButton).removeClass("active")
			}
		}
		else if(!isMiniLooping[i - 12]){
			currentButton = getTheButton(i,lastStepArray[i - 12] + 1)
			$(currentButton).removeClass("active")
		}
		else{
			currentButton = getTheButton(i,lastStepArray[i - 12] + 1)
			$(currentButton).removeClass("active").addClass("loop");
		}
	}
}
function showLabel(){
	if(!isPlaying){
		$(this).html("").unbind("mouseover", showLabel).bind("mouseout", hideLabel);	
	}
	else{
		$(this).html("").unbind("mouseover", showLabel).bind("mouseout", hideLabel);	
	}
}
function hideLabel(){
	$(this).html("").unbind("mouseout", hideLabel).bind("mouseover", showLabel);	
}
function muteCall(){
	if(muteArray[$(this).prop("rowIndex")]){
		muteArray[$(this).prop("rowIndex")] = 0;
		gainNodeArray[$(this).prop("rowIndex")].gain.value = 0;
		$(this).removeClass("mute").addClass("muted")
	}
	else{
		muteArray[$(this).prop("rowIndex")] = 1;
		gainNodeArray[$(this).prop("rowIndex")].gain.value = volumeArray[$(this).prop("rowIndex")];
		$(this).html("").removeClass("muted").addClass("mute")	
	}
}
function showMuteLabel(){
	$(this).unbind("mouseover", showMuteLabel).bind("mouseout", hideMuteLabel);
	if(muteArray[$(this).prop("rowIndex")]){
		$(this).html("")	
	}
	else{
			
	}
}
function hideMuteLabel(){
	$(this).unbind("mouseout", hideMuteLabel).bind("mouseover", showMuteLabel);
		$(this).html("")	
}
function stepToggle(){
	$(window).bind("mouseup", stopToggling);
	for(var i = 0; i < rowA.length; i++){
		for(var j = 0; j < a7Array.length; j++){
			bindToThese = getTheButton(i,j);
			$(bindToThese).bind({mouseover: lightItUp,  mouseup: stopToggling});
		}	
	}
	if(allRhythms[showPattern][$(this).prop("rowIndex")][$(this).prop("columnIndex")]){
		allRhythms[showPattern][$(this).prop("rowIndex")][$(this).prop("columnIndex")] = 0;
		$(this).removeClass("active")
		turnOnOrOff = 1;
	}
	else{
		allRhythms[showPattern][$(this).prop("rowIndex")][$(this).prop("columnIndex")] = 1;
		$(this).addClass("active")
		turnOnOrOff = 0;
	}
}
