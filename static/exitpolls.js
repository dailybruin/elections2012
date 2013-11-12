google.load('visualization', '1.0', {'packages':['corechart']});

google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
	//president
	var query = new google.visualization.Query('https://docs.google.com/a/media.ucla.edu/spreadsheet/tq?key=0AmAw65rH5ARAdGtNbnRwWnRVVG1UM05yYWpVb20zUVE&gid=1&range=H%3AH&headers=1');
	query.setQuery('select H where H is not null and H <> ""');

	// Send the query with a callback function.
	query.send(handleQueryResponse);
	
	//prop30
	var query2 = new google.visualization.Query('https://docs.google.com/a/media.ucla.edu/spreadsheet/tq?key=0AmAw65rH5ARAdGtNbnRwWnRVVG1UM05yYWpVb20zUVE&gid=1&range=S%3AS&headers=1');

	query2.setQuery('select S where S is not null and S <> ""');

	// Send the query with a callback function.
	query2.send(handleQueryResponseProp);
	
	//prop37
	var query3 = new google.visualization.Query('https://docs.google.com/a/media.ucla.edu/spreadsheet/tq?key=0AmAw65rH5ARAdGtNbnRwWnRVVG1UM05yYWpVb20zUVE&gid=1&range=U%3AU&headers=1');

	query3.setQuery('select U where U is not null and U <> ""');

	// Send the query with a callback function.
	query3.send(handleQueryResponsePropSeven);
	
	
	//prop38
	var query4 = new google.visualization.Query('https://docs.google.com/a/media.ucla.edu/spreadsheet/tq?key=0AmAw65rH5ARAdGtNbnRwWnRVVG1UM05yYWpVb20zUVE&gid=1&range=T%3AT&headers=1');

	query4.setQuery('select T where T is not null and T <> ""');

	// Send the query with a callback function.
	query4.send(handleQueryResponsePropEight);
	
}

function handleQueryResponse(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}

	var data = response.getDataTable();
	visualization = new google.visualization.PieChart(document.getElementById('presidentViz'));
	visualization.draw(data, {
		width:460,
		height:460,
		legend: {
			position:'top'
		},
		slices:
			{0: {color: '#3366cc'},
			1: {color:'#ff9900'},
			2: {color:'#dc3912'},
			3: {color:'#109618'}},
	});
}

function handleQueryResponseProp(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}

	var data = response.getDataTable();
	visualization = new google.visualization.PieChart(document.getElementById('prop30Viz'));
	visualization.draw(data, {
		width:460,
		height:460,
		legend: {
			position:'top'
		},
		slices:
			{0: {color: '#cfcfcf'},
			1: {color:'#d79ad7'},
			2: {color:'#990099'}}
	});
}
function handleQueryResponsePropSeven(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}

	var data = response.getDataTable();
	visualization = new google.visualization.PieChart(document.getElementById('prop37Viz'));
	visualization.draw(data, {
		width:460,
		height:460,
		legend: {
			position:'top'
		},
		slices:
			{0: {color: '#cfcfcf'},
			1: {color:'#d79ad7'},
			2: {color:'#990099'}}
	});
}
function handleQueryResponsePropEight(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}

	var data = response.getDataTable();
	visualization = new google.visualization.PieChart(document.getElementById('prop38Viz'));
	visualization.draw(data, {
		width:460,
		height:460,
		legend: {
			position:'top'
		},
		slices:
			{0: {color: '#cfcfcf'},
			1: {color:'#d79ad7'},
			2: {color:'#990099'}}
	});
}