$('.chart1').click(function(e){
	e.preventDefault();
	drawChart1();
	$('.selected').removeClass('selected');
	$('.chart1').addClass('selected');
});

$('.chart2').click(function(e){
	e.preventDefault();
	drawChart2();
	$('.selected').removeClass('selected');
	$('.chart2').addClass('selected');
});

$('.chart3').click(function(e){
	e.preventDefault();
	drawChart3();
	$('.selected').removeClass('selected');
	$('.chart3').addClass('selected');
});

$('.chart4').click(function(e){
	e.preventDefault();
	drawChart4();
	$('.selected').removeClass('selected');
	$('.chart4').addClass('selected');
});

$('.chart5').click(function(e){
	e.preventDefault();
	drawChart5();
	$('.selected').removeClass('selected');
	$('.chart5').addClass('selected');
});

$('.chart6').click(function(e){
	e.preventDefault();
	drawChart6();
	$('.selected').removeClass('selected');
	$('.chart6').addClass('selected');
});
