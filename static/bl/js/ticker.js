google.load('visualization', '1.0', {'packages':['corechart']});

google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
	// To see the data that this visualization uses, browse to
	// http://spreadsheets.google.com/ccc?key=pCQbetd-CptGXxxQIG7VFIQ
	var query = new google.visualization.Query('https://docs.google.com/a/media.ucla.edu/spreadsheet/tq?key=0AmAw65rH5ARAdGtNbnRwWnRVVG1UM05yYWpVb20zUVE&gid=1&range=H%3AH&headers=1');
	query.setQuery('select H where H is not null and H <> ""');

	// Send the query with a callback function.
	query.send(handleQueryResponse);
	
	var query2 = new google.visualization.Query('https://docs.google.com/a/media.ucla.edu/spreadsheet/tq?key=0AmAw65rH5ARAdGtNbnRwWnRVVG1UM05yYWpVb20zUVE&gid=1&range=S%3AS&headers=1');

	query2.setQuery('select S where S is not null and S <> ""');

	// Send the query with a callback function.
	query2.send(handleQueryResponseProp);
}

function handleQueryResponse(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
		return;
	}

	var data = response.getDataTable();
	visualization = new google.visualization.PieChart(document.getElementById('presVisualization'));
	visualization.draw(data, {
		width:300,
		height:300,
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
	visualization = new google.visualization.PieChart(document.getElementById('propVisualization'));
	visualization.draw(data, {
		width:300,
		height:300,
		legend: {
			position:'top'
		},
		slices:
			{0: {color: '#cfcfcf'},
			1: {color:'#d79ad7'},
			2: {color:'#990099'}}
	});
}