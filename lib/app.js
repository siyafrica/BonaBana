$(document).ready(function() {
	//"use strict"

	/* Colors for the charts
	red: #c90f10
	dark blue: #11178f
	light blue: #0000ab
	very light blue: #424af1
	super light blue: #F0F1F9
	*/
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
			label: 'All Media',
			min: 0,
			max: 100,
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

	//The chart that shows details of the score for the T-Drive
	var tdrive_chart = c3.generate({
		bindto: d3.select('div.T-Drive-Chart'),
		size: {
			width: 800,
			height: 320
		},
		data: {
			url: 'data/tdrive.json',
			mimeType: 'json',
			keys: {
			value: ["Topic: Education", "Diversity: Gauteng", "Rights: Privacy", "Issues: Context indepth", "Voices of Children", "Ethics: Child Best Interest"]
			},
			type: 'bar'
		},
		bar: {
			width: {
				ratio: 1.0
			}
		},
		axis: {
			rotated: true
		}
	});

	//The bar chart showing the status of children (in terms of population and the stories about them) in South Africa
	var children_status = c3.generate({
		bindto: d3.select('div.children_status'),
		size: {
			width: 800,
			height: 320
		},
		data: {
			json: [
					{Province: "Gauteng", Stories: 25, Population: 3423211},
					{Province: "Mpumalanga", Stories: 13, Population: 1515405},
					{Province: "North West", Stories: 4, Population: 1229071},
					{Province: "Free State", Stories: 10, Population: 953384},
					{Province: "Limpopo", Stories: 3, Population: 2216457},
					{Province: "Northern Cape", Stories: 3, Population: 410757},
					{Province: "Western Cape", Stories: 20, Population: 1739425},
					{Province: "KwaZulu-Natal", Stories: 13, Population: 3956728},
					{Province: "Eastern Cape", Stories: 11, Population: 2623533},
				],
			keys: {
				x: 'Province',
				value: ['Stories', 'Population']
			},
			type: 'bar'
		},
		colors: {
				Stories: '#c90f10',
				Population: '#11178f'
			},
		bar: {
			width: {
				ratio: 0.7
			}
		},
		axis: {
			x: {type: 'category'},
			rotated: true
		}
	});

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
			type: 'donut',
			colors: {
				'18 to 64': '#11178f',
				'< 18': '#0000ab',
				'>= 65': '#424af1'
			}
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
			type: 'donut',
			colors: {
				'Female': '#c90f10',
				'Male': '#11178f'
			}
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
			type: 'donut',
			colors: {
				'Both parents': '#11178f',
				'Neither parent (or.uncertain)': '#0000ab',
				'One parent': '#424af1'
			}
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
			type: 'donut',
			colors: {
				'Yes': '#11178f',
				'No': '#0000ab',
				'Other': '#424af1'
			}
		},
		donut: {
			title: "Completed School"
		},
	});

	//The highest education level reached by children - bar chart
	var education_level = c3.generate({
		bindto: d3.select('div.education_level'),
		size: {
			width: 800,
			height: 320
		},
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
				ratio: 0.90
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
			type: 'donut',
			colors: {
				'Other not economically active': '#11178f',
				'Unemployed': '#0000ab',
				'Employed': '#424af1',
				'Discouraged work seeker': '#F0F1F9',
				'Not applicable': '#c90f10'		
			}
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
			type: 'donut',
			colors: {
				'House': '#11178f',
				'Traditional': '#0000ab',
				'Shack': '#424af1',
				'Other': '#F0F1F9',
				'Apartment': '#c90f10'	
			}
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
			type: 'donut',
			colors: {
				'Female': '#c90f10',
				'Male': '#11178f'
			}
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