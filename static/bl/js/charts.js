google.load('visualization', '1.0', {'packages':['corechart']});

google.setOnLoadCallback(drawChart1);

	var options = {
		// title:'Financial Aid vs. Voting in 2012',
		width:581,
		height:300,
		colors:['#000141','#013F8A'],
		animation:
			{duration:1000},
		legend:
			{position:'top'},
		vAxis:
			{title:"Percent",
			textPosition:"out"}
	};


function drawChart1()
{
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Candidate');
	data.addColumn('number', 'Financial Aid');
	data.addColumn('number', 'Non-Financial Aid');
	data.addRows([
		['Obama',69.8,55.1],
		['Romney',16.2,19.8],
		['Other',6.5,8],
		['Not voting',7.5,17.1]
	]);
	
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawChart2()
{
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Policy');
	data.addColumn('number', 'Financial Aid');
	data.addColumn('number', 'Non-Financial Aid');
	data.addRows([
		['Support Obama\'s overall policies',70.2,61.5],
		['Support Obama\'s education policies',72.5,61.2],
		['Support Obama\'s immigration policies',43.4,51.1]
	]);
	
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawChart3()
{
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Issue');
	data.addColumn('number', 'Financial Aid');
	data.addColumn('number', 'Non-Financial Aid');
	data.addRows([
		['Economy',87.6,89.6],
		['Job market',88.9,80.1],
		['International affairs',74.4,71.4],
		['Immigration',50.5,49.5],
		['Education',92,84.6],
		['Healthcare',76.9,77.4],
		['Social issues',62.8,61]
	]);
	
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawChart4()
{
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Issue');
	data.addColumn('number', 'Financial Aid');
	data.addColumn('number', 'Non-Financial Aid');
	data.addRows([
		['Familiar with prop 30',21.2,17.7],
		['Yes on prop 30',38.7,50],
		['No on prop 30',23.3,15],
		['Undecided on prop 30',38,35]
	]);
	

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawChart5()
{
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Vote on 30');
	data.addColumn('number', 'Financial Aid');
	data.addColumn('number', 'Non-Financial Aid');
	data.addRows([
		['Yes',64.4,52.5],
		['No',28.8,40],
		['Undecided',6.8,7.5]
	]);
	

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}