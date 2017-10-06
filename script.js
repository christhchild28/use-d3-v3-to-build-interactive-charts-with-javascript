 var dataset = [ 5, 10, 15, 20, 25 ];

  var svg = d3.select('#chartArea').append('svg')
    .attr('width', 400)
    .attr('height', 300);

  var multiplier = 8;

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) {
      return i * 22;
    })
    .attr('y', function (d) {
      return 300 - d * multiplier;
    })
    .attr('width', 20)
    .attr('height', function (d) {
      return d * multiplier;
    });
