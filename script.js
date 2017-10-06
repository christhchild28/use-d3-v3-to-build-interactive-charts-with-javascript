var dataset = _.map(_.range(15), function (i ) {
    return Math.random() * 5000;
  });
  var w = 400, h = 300;

  var svg = d3.select('#chartArea').append('svg')
    .attr('width', w)
    .attr('height', h);

  var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset) * 1.1])
    .range([0, h]);

  var multiplier = 5;

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) {
      return i * 22;
    })
    .attr('y', function (d) {
      return h - yScale(d);
    })
    .attr('width', 20)
    .attr('height', function (d) {
      return yScale(d);
    });