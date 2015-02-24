'use strict';

angular.module('faTestApp')
  .controller('CalculatorRevenueCtrl', function ($scope) {
  	$scope.calc = {
  		termtype : "1"
  	}
    $scope.rows = [];
    var dataset = [];
    $scope.revenue = function() {
        return (Math.round($scope.calc.investmentAmount * Math.pow((1 + (($scope.calc.annualInterest*($scope.calc.termtype/12))/100)), $scope.calc.terms) * 100)/100);
    }
    $scope.profit = function() {
    	return (Math.round(($scope.revenue() - $scope.calc.investmentAmount)*100))/100;
    }
    $scope.emi = function() {
      var interestperterm = $scope.calc.annualInterest*($scope.calc.termtype/12)/100;
      var x = Math.pow(1+interestperterm, $scope.calc.terms);
      return Math.round($scope.calc.investmentAmount*interestperterm*x/(x-1)*100)/100;
    }
    $scope.totalInterest = function() {
      return Math.round(($scope.emi()*$scope.calc.terms - $scope.calc.investmentAmount)*100)/100;
    }

    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
          return "<strong>" + d.type + ": </strong><span style='color:red'>" + d.y + "</span>"
      });
    var linetip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
          return "<strong>Balance: </strong><span style='color:red'>" + d.y + "</span>"
      });

    $scope.$watch($scope.emi,
      function() {
        $scope.rows = [];
        var emi = $scope.emi();
        var interestperterm = $scope.calc.annualInterest*($scope.calc.termtype/12)/100;
        var balance = $scope.calc.investmentAmount;
        for (var i = 0; i < $scope.calc.terms; i++) {
          var obj = {
            termno: i+1,
            interest: Math.round(balance*interestperterm*100)/100,
            principal: Math.round((emi - balance*interestperterm)*100)/100,
            balance: Math.round((balance - (emi - balance*interestperterm))*100)/100
          }
          balance = balance - obj.principal;
          obj.totalpaid = $scope.calc.investmentAmount - balance;
          obj.totalpaid = Math.round(obj.totalpaid*100)/100;
          if (obj.balance<0)
            obj.balance = 0;
          $scope.rows.push(obj);
        }

        var dataset1 = [];
        var dataset2 = [];
        var lineset = [];
        for (var i = 0; i < $scope.rows.length; i++) {
          lineset.push({
            x: i,
            y: $scope.rows[i].balance
          })
          dataset1.push({
            x: i,
            y: $scope.rows[i].principal,
            type: "principal"
          })
          dataset2.push({
            x: i,
            y: $scope.rows[i].interest,
            type: "interest"
          })
        }
        dataset = [dataset2, dataset1];
        var stack = d3.layout.stack();
        stack(dataset);
        var margin = {top: 30, right: 0, bottom: 30, left: 100};
        var h = 600 - margin.top - margin.bottom;
        var w = 960 - margin.right - margin.left;
        var xScale = d3.scale.ordinal()
          .domain(d3.range(dataset[0].length))
          .rangeRoundBands([0, w], 0.05);

        var yScale = d3.scale.linear()
          .domain([0,       
            d3.max(dataset, function(d) {
              return d3.max(d, function(d) {
                return d.y0 + d.y;
              });
            })
          ])
          .range([0, h]);

        var xScaleLine = d3.scale.ordinal()
          .domain(d3.range(dataset[0].length))
          .rangeRoundBands([0+(w/(lineset.length*2)), w+(w/(lineset.length*2))], 0.05);

        var yScaleLine = d3.scale.linear()
          .domain([0, $scope.calc.investmentAmount])
          .range([0, h]);

        $('#chartid').html('');
        var svg = d3.select("#chartid")
            .append("svg")
            // .style({background: 'grey'})
            .attr("width", w + margin.right + margin.left)
            .attr("height", h + margin.top + margin.bottom);
        svg.call(tip);
        svg.call(linetip);
        var colors = d3.scale.category10();
        var groups = svg.selectAll("g")
          .data(dataset)
          .enter()
          .append("g")
          .attr('transform', 'translate('+margin.left+','+margin.top+')')
          .style("fill", function(d, i) {
            return colors(i);
          });
        var rects = groups.selectAll("rect")
          .data(function(d) {return d; })
          .enter()
          .append("rect")
          .attr("x", function(d, i) {
            return xScale(i);
          })
          .attr("y", function(d) {
            return yScale(d.y0);
          })
          .attr("height", function(d) {
            return yScale(d.y);
          })
          .attr("width", xScale.rangeBand())
          .on("mouseover", tip.show)
          .on("mouseout", tip.hide)

        var lineFunc = d3.svg.line()
          .x(function(d) {
            return xScaleLine(d.x);
          })
          .y(function(d) {
            return h - yScaleLine(d.y);
          })

        svg.append('path')
          .attr('d', lineFunc(lineset))
          .attr('transform', 'translate('+margin.left+','+margin.top+')')
          .attr('stroke', 'blue')
          .attr('stroke-width', 2)
          .attr('fill', 'none');

        svg.selectAll("dot")
          .data(lineset)
        .enter().append("circle")
          .attr('transform', 'translate('+margin.left+','+margin.top+')')
          .attr("r", 3.5)
          .attr("cx", function(d) { return xScaleLine(d.x); })
          .attr("cy", function(d) { return h-yScaleLine(d.y); })
          .on("mouseover", linetip.show)
          .on("mouseout", linetip.hide);


        var vGuide = d3.select('svg').append('g')
        var vGuideScale = d3.scale.linear()
          .domain([0, $scope.calc.investmentAmount])
          .range([h, 0]);
        var vAxis = d3.svg.axis()
          .scale(vGuideScale)
          .orient('left')
          .ticks(10)


        vAxis(vGuide);
        vGuide.attr('transform', 'translate('+margin.left + ',' + margin.top + ')')
        vGuide.selectAll('path')
          .style({fill: 'none', stroke: '#000'})
        vGuide.selectAll('line')
          .style({stroke: '#000'})

        var hGuide = d3.select('svg').append('g')
        var hGuideScale = d3.scale.ordinal()
          .domain(d3.range(1, lineset.length + 1))
          .rangeRoundBands([0, w], 0.05);
        var hAxis = d3.svg.axis()
          .scale(hGuideScale)
          .orient('bottom')
          .tickValues(hGuideScale.domain().filter(function(d, i) {
            if (lineset.length < 40)
              return 1
            else {
              return !(i % Math.round(lineset.length/20))
            }
          }))

        hAxis(hGuide);
        var _h = margin.top + h;
        hGuide.attr('transform', 'translate('+margin.left + ',' + _h + ')')
        hGuide.selectAll('path')
          .style({fill: 'none', stroke: '#000'})
        hGuide.selectAll('line')
          .style({stroke: '#000'})
      }
    );
  });
