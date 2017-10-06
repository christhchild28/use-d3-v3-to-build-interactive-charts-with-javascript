  var dataset = _.map(_.range(25), function (i) {
    return Math.random() * 50;
  });

  var margin = {top: 25, right: 0, bottom: 20, left: 40};

  var w = 400 - margin.left - margin.right,
    h = 300 - margin.top - margin.bottom;

  var svg = d3.select('#chartArea').append('svg')
    .attr('width', w + margin.left + margin.right)
    .attr('height', h + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

  var xScale = d3.scale.ordinal()
    .domain(dataset)
    .rangeBands([0, w], 0.1, 0);

  var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([h, 0]);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', xScale)
    .attr('width', xScale.rangeBand())
    .attr('y', yScale)
    .attr('height', function (d) {
      return h - yScale(d);
    });
