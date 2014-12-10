$(document).ready(function() {
	//"use strict"

	//The code below is for the C3 visualizations

	//T-Drive Gauge Chart all media
	var T_Drive_All = c3.generate({
		bindto: d3.select('div#MeterGauge'),
		data: {
			url: 'data/tdrive_media.json',
			mimeType: 'json',
			type: 'gauge'
		},
		gauge: {
		//	label: 'All Media',
		//	min: 0,
		//	max: 100,
		//	units: '%',
		//	width: 50
		},
		color: {
		pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
		threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
			values: [30, 60, 90, 100]
			}
		},
		size: {
			height: 200
		}
	})
	setTimeout(function () {
		T_Drive_All.load({
			url: 'data/tdrive_media.json',
			mimeType: 'json',
			keys: {
				value: ['All Media']
			}
		});
	}, 2000);;

	//T-Drive Gauge Chart for individual media
	var T_Drive_Media = c3.generate({
		bindto: d3.select('div#MeterGauge2'),
		data: {
			url: 'data/tdrive_media.json',
			mimeType: 'json',
			type: 'gauge'
		},
		gauge: {
		//	label: 'value',
		//	min: 0,
		//	max: 100,
		//	units: '%',
		//	width: 50
		},
		color: {
		pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
		threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
			values: [30, 60, 90, 100]
			}
		},
		size: {
			height: 200
		}
	});
	setTimeout(function () {
		T_Drive_Media.load({
			url: 'data/tdrive_media.json',
			mimeType: 'json',
			keys: {
				value: ['City Press']
			}
		});
	}, 2000);

	//The population of children in all of South Africa - donut chart
	var population_children = c3.generate({
		bindto: d3.select('div.population_age'),
		size: {
			width: 300
		},
		data: {
			url: 'data/age_completedsimple.json',
			mimeType: 'json',
			keys: {
			value: ['18 to 64', '< 18', '>= 65']
			},
			type: 'donut'
		},
		donut: {
			title: "Adults (>= 18) 65%"
		},
	});

	//The gender divide of all the children in South Africa - donut chart
	var population_gender = c3.generate({
		bindto: d3.select('div.population_gender'),
		size: {
			width: 300
		},
		data: {
			url: 'data/gender_under18.json',
			mimeType: 'json',
			keys: {
			value: ['Female', 'Male']
			},
			type: 'donut'
		},
		donut: {
			title: "Female 50%"
		},
	});

	//How number of children with, without or uncertain in terms of parents - donut chart
	var parents = c3.generate({
		bindto: d3.select('div.parents_alive'),
		size: {
			width: 300
		},
		data: {
			url: 'data/parents_alive.json',
			mimeType: 'json',
			keys: {
			value: ['Both parents', 'Neither parent (or.uncertain)', 'One parent']
			},
			type: 'donut'
		},
		donut: {
			title: "Both parents 80%"
		},
	});

	//The distribution of children who completed school, did not complete school of other in South Africa - donut chart
	var school_attendance = c3.generate({
		bindto: d3.select('div.school_attendance'),
		size: {
			width: 300
		},
		data: {
			url: 'data/agecompleted_school.json',
			mimeType: 'json',
			keys: {
			value: ['Yes', 'No', 'Other']
			},
			type: 'donut'
		},
		donut: {
			title: "Completed School"
		},
	});

	//The highest education level reached by children - bar chart
	var education_level = c3.generate({
		bindto: d3.select('div.education_level'),
		data: {
			url: 'data/highest_education.json',
			mimeType: 'json',
			keys: {
			value: ['Grade 0', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'No schooling', 'Not applicable']
			},
			type: 'bar'
		},
		bar: {
			width: {
				ration: 0.90
			},
		}
	});

	//The employment status of children in South Africa - donut chart
	var employment = c3.generate({
		bindto: d3.select('div.employment_status'),
		size: {
			width: 300
		},
		data: {
			url: 'data/employment_status.json',
			mimeType: 'json',
			keys: {
			value: ['Discouraged work seeker', 'Employed', 'Not applicable', 'Other not economically active', 'Unemployed']
			},
			type: 'donut'
		},
		donut: {
			title: "Employment Status"
		},
	});

	//Child-headed households in South Africa - donut chart
	var households = c3.generate({
		bindto: d3.select('div.household_size'),
		size: {
			width: 300
		},
		data: {
			url: 'data/dwelling_type.json',
			mimeType: 'json',
			keys: {
			value: ['Apartment', 'House', 'Shack', 'Other', 'Traditional']
			},
			type: 'donut'
		},
		donut: {
			title: "Dwelling Type"
		},
	});

	//The gender divide of child-headed households in South Africa - donut chart
	var households_gender = c3.generate({
		bindto: d3.select('div.household_gender'),
		size: {
			width: 300
		},
		data: {
			url: 'data/gender_househead.json',
			mimeType: 'json',
			keys: {
			value: ['Female', 'Male']
			},
			type: 'donut'
		},
		donut: {
			title: "Gender Household Head"
		},
	});

	//The annual household income of child-headed homes - bar chart
	var income_level = c3.generate({
		bindto: d3.select('div.household_income'),
		size: {
			width: 800
		},
		data: {
			url: 'data/household_income.json',
			mimeType: 'json',
			keys: {
				value: ['R0', 'Under R4800', 'R5k - R10k', 'R10k - R20k', 'R20k - R40k', 'R40k - R75k', 'R75k - R150k', 'R150k - R300k', 'R300k - R600k', 'R600k - R1.2M', 'R1.2M - R2.5M', 'Over R2.5M']
			},
			type: 'bar'
		},
		axis: {
			x: {
				type: 'categorized',
				categories: ['R0', 'Under R4800', 'R5k - R10k', 'R10k - R20k', 'R20k - R40k', 'R40k - R75k', 'R75k - R150k', 'R150k - R300k', 'R300k - R600k', 'R600k - R1.2M', 'R1.2M - R2.5M', 'Over R2.5M'],
				show: false
			},
		},
		bar: {
			width: {
				ratio: 1.0
			},
		}
	});

	//The size of household by age of household head - bar chart
	var size_household = c3.generate({
		bindto: d3.select('div.household_age'),
		size: {
			width: 800
		},
		data: {
			url: 'data/age_househead.json',
			mimeType: 'json',
			keys: {
			value: ['1: < 18', '1: >= 18', '2: < 18', '2: >= 18', '3: < 18', '3: >= 18', '4: < 18', '4: >= 18', '5: < 18', '5: >= 18', '6: < 18', '6: >= 18', '7: < 18', '7: >= 18', '8: < 18', '8: >= 18', '9: < 18', '9: >= 18', '+10: < 18', '+10: >= 18']
			},
			type: 'bar',
			order: 'desc'
		},
		bar: {
			width: {
				ratio: 1.0
			},
		},
		axis: {
			x: {
				type: 'category',
				categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+10'],
				tick: {culling: false}
				//show: false
			}
		}
	});

});