$(function () {

var options = {
        chart: {
            rendedTo: 'barchart',
            type: 'column',
            width: 765
        },
        xAxis: {
            labels: {
                rotation: -45,
                align: 'right'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Nombre de sous-titres postés ce mois'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function() {
                var s = (this.y > 1) ? 's' : '';
                return '<b>'+ this.x +'</b><br/>'+
                     this.y+' sous-titre'+s+' posté'+s;
            }
        },
        series: [{
            name: 'Nombre d\'upload'
        }]
    }
});