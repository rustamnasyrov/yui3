YUI.add('combo-legend-benchmark', function (Y) {
    Y.BenchmarkSuite = new Benchmark.Suite();
    var suite = Y.BenchmarkSuite,
        chart,
        container,
        dataProvider;
    container = document.createElement('div');
    dataProvider = [
        {category:"5/1/2010", miscellaneous:2000, expenses:3700, revenue:2200},
        {category:"5/2/2010", miscellaneous:50, expenses:9100, revenue:100},
        {category:"5/3/2010", miscellaneous:400, expenses:1100, revenue:1500},
        {category:"5/4/2010", miscellaneous:200, expenses:1900, revenue:2800},
        {category:"5/5/2010", miscellaneous:5000, expenses:5000, revenue:2650}
    ];
    container.style.left = "10px";
    container.style.top = "10px";
    container.style.width = "600px";
    container.style.height = "300px";
    container.id = "container";
    document.body.appendChild(container);

    suite.add("ComboChartLegend", function() {
        chart = new Y.Chart({
            legend: {
                position: "right"
            },
            dataProvider: dataProvider,
            type: "combo",
            render: container,
            categoryKey: "category"
        });
        chart.destroy(true);
    });

    suite.add("TimeAxisChartLegend", function() {
        chart = new Y.Chart({
            legend: {
                position: "right"
            },
            categoryType: "time",
            dataProvider: dataProvider,
            type: "combo",
            render: container,
            categoryKey: "category"
        });
        chart.destroy(true);
    });

    suite.add("ShowAreaFillChartLegend", function() {
        chart = new Y.Chart({
            legend: {
                position: "right"
            },
            categoryType: "time",
            dataProvider: dataProvider,
            type: "combo",
            showAreaFill: true,
            render: container,
            categoryKey: "category"
        });
        chart.destroy(true);
    });
}, '@VERSION@', {requires: ['charts']});
