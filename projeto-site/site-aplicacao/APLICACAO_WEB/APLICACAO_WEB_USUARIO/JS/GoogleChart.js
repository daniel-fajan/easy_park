

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart()
{
  var ocupadas = parseInt(Math.random() * 500) + 1;
  var disponiveis = 500 - ocupadas;

  var data = google.visualization.arrayToDataTable(
  [
    ['Situação', 'Vagas'],
    ['Disponiveis', disponiveis],
    ['Ocupadas', ocupadas]
  ]);

  var options =
  {
    title: 'Situação do estacionamento em tempo real',
    pieHole: 0.5,
    slices:
    {
        0: { color: 'rgb(176, 9, 4)' },
        1: { color: 'rgb(5, 150, 26)'}
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart')); 
  chart.draw(data, options);

  setTimeout(() => {
    drawChart(); 
  }, 3000);

}