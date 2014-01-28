$(document).ready(function(){
	if(location.hash != ""){
		var Res = $("#myTab a");
		for (var i = 0; i < Res.length; i++) {
			if(Res[i].href.indexOf(location.hash) != -1){
				$(Res[i]).tab('show');
			}
		};
		$('<a href="'+location.hash+'">').tab('show');
	}
	$('#myTab a').click(function(e){
		e.preventDefault();
		$(this).tab('show');
		location.hash = e.target.hash;
	});
});
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart(){
	var data = google.visualization.arrayToDataTable([
		['Person', 'Without exercise', 'With exercise'],
		['Spencer Alan Watson', 40.74, 23.67],
		['Marissa Wekesser', 12.23, 8.23]
		]);

	var options = {
		'title': 'Time taken to change Bromythol to yellow-green',
		'hAxis': {'title': 'Person', 'titleTextStyle': {'color': 'red'}},
		'vAxis': {'title': 'Seconds','titleTextStyle': {'color': 'red'}},
		'height': 500,
		'width': 800
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('ColumnChart'));
	chart.draw(data, options);
}

