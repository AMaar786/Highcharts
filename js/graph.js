/**
 * Created by Shahrukh khan on 7/28/2016.
 */

var lengths = <%= data.length %>;


$(function () {
    var total = <%= total %>;
    $('#competitors').highcharts({
        chart: {
            type: 'pie',
            height: '300'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        legends: { enabled: true
        },
        // Tool Tip
        tooltip: {
            formatter: function () {
                return '<b>Name :</b> ' + this.point.name + '<br/> <b>Tickets</b>: ' + this.y + '</b>';

            }
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                // data Labels
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(100 * this.y / total,0) + "%";

                    },

                    style:
                    {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }

                },
                // data labels
                showInLegend:true   // Legend Enable

            },
            series: {
                cursor: 'pointer',
                point: {
                    events:
                    {
                        click: function()
                        {
                            window.location.href = this.url;
                        }
                    }
                },
                showInLegend: true //Legend Enable
            }
        },

        // Axis Labels

        xAxis: {

            type: 'category',
            labels: {
                formatter: function () {
                    var str = this.value;
                    if (str.length < 21)
                    { return str;}
                    else
                    {  return str.substring(0, 19)+"...";}
                },
                rotation: -45,
                style: {
                    fontSize: '11px'
                }
            }
        },

        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            type: 'pie',
            name: 'Tickets',
            data: <%= data.to_json.html_safe %>
    }]
});
});


