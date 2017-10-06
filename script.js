  var dataset = _.map(_.range(175), function (i) {
    return Math.random() * 500;
  });
  var w = 400, h = 300;

  var svg = d3.select('#chartArea').append('svg')
    .attr('width', w)
    .attr('height', h);

  var xScale = d3.scale.ordinal()
    .domain(dataset)
    .rangeBands([0, w], 0.1, 0.3);

  var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset) * 1.1])
    .range([0, h]);

  var colorScale = d3.scale.quantile()
    .domain([0, 10, dataset.length - 10, dataset.length])
    .range(['yellow', 'orange', 'green']);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) {
      return xScale(d);
    })
    .attr('y', function (d) {
      return h - yScale(d);
    })
    .attr('width', xScale.rangeBand())
    .attr('height', function (d) {
      return yScale(d);
    })
    .attr('fill', function (d, i) {
      return colorScale(i);
    });