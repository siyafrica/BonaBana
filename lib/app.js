$(document).ready(function() {
	//"use strict"

	/* code for the meter gauge. This gauge will be the interactive element 
	for the T-Drive and will be driven by data from the score card created for it */
	
	//some helper variables for the meter gauge
	var meter1, meter2;
	var meterValue = 0;
	var startingSpeed = parseInt(Math.random() * 60) + 30;
	var isStarting = true;
	var renderOptions = {
		label: 'T-Drive',
		labelPosition: 'bottom',
		labelHeightAdjust: -10,
		intervalOuterRadius: 45,
		ticks: [0, 40, 80, 120],
		intervals: [25, 90, 120],
		intervalColors : ['#e7e658', '#66cc66', '#cc6666']
	};

	//create the updateMeter function
	function updateMeter() {
		//meter.destroy();

		if(isStarting && meterValue < startingSpeed) {
			++meterValue
		} else {
			meterValue += 1 - Math.random() * 2;
			meterValue = Math.max(0, Math.min(meterValue, 120)); //keep our value in range no matter what
		}
	}

	//code for the meter
	meter1 = $.jqplot('MeterGauge', [[meterValue]], {
		seriesDefaults: {
			renderer: $.jqplot.MeterGaugeRenderer,
			rendererOptions: renderOptions
		}
	});

	//code for the meter
	meter2 = $.jqplot('MeterGauge2', [[meterValue]], {
		seriesDefaults: {
			renderer: $.jqplot.MeterGaugeRenderer,
			rendererOptions: renderOptions
		}
	});

	//this interval will run until the end of the recipe
	setInterval(updateMeter, 30);

});