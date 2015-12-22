var d3 = require('d3')

var clicks = 0
var graph = null
var svg = null
var force = null
var rendered = false

module.exports = function (json, opts) {
  if (!opts) opts = {}
  var height = opts.height || 600
  var el = opts.el || "#graph"

  if (!graph) graph = d3.select(el)
  if (!svg) svg = graph.append("svg")
  if (!force) force = d3.layout.force()
    .nodes(json.nodes)
    .links(json.links)
    .linkDistance(120)
    .gravity(0.002)
    .friction(0.1)
    .charge(-100)
    .linkStrength(.75)

  var width = window.innerWidth
  graph.style({'height': height})
  svg.attr("width", width)
    .attr("height", height);
  force.size([width, height])
    .start();

  if (rendered) return
  rendered = true

  var link = svg.selectAll(".link")
    .data(json.links)
    .enter().append("line")
    .attr("class", "link");

  var node = svg.selectAll(".node")
    .data(json.nodes)
    .enter().append("g")
    .attr("class", "node")
    .attr("class", function (d) { return d.cl })
    .call(force.drag)
    .on('click', function () {
      clicks += 1
      if (clicks > 3) {
        d3.select("body")
        .attr("class", "burnout")
      }
    });

  node.append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(function(d) { return d.name });

  node.append("image")
      .attr("xlink:href", function (d) { return d.image })
      .attr("x", -8)
      .attr("y", -8)
      .attr("width", 16)
      .attr("height", 16);

  d3.select('.you').on('click', function () {
    d3.select("body")
    .attr("class", "burnout")
  })

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  })
}
