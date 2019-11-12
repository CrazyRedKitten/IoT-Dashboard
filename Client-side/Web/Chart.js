function Graph_and_data(){
    fetch('http://Data-Address/data.json')
        .then(function(response){
            return response.json()
        })
        .then(function (received_data) {
            var JsonFile = JSON.stringify(received_data);
            let object = JSON.parse(JsonFile);
            var Graph_label = object.labels;
            Graph_label = Graph_label.replace(/'/g, '"');
            Graph_label = JSON.parse(Graph_label)
            var Graph_Data = object.data;
            Graph_Data = Graph_Data.replace('[','').replace(']','');
            var Graph_Data_Final =  Graph_Data.split(',').map(Number);

            let ctx = document.getElementById('TemperatureChangeChart').getContext('2d');
            let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, "#6495ED");
            gradientStroke.addColorStop(1, "#FF69B4");
            let backgroundGradient = ctx.createLinearGradient(500, 0, 100, 0);
            backgroundGradient.addColorStop(0, "rgba(100,149,237,0.5)");
            backgroundGradient.addColorStop(1, "rgba(255,105,180,0.5)");

            let chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: Graph_label,
                    datasets: [{
                        label: 'Temperature',
                        backgroundColor: backgroundGradient,
                        borderColor: gradientStroke,
                        data: Graph_Data_Final
                    }]
                },
                options: {
                    // responsive: true
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 20,
                                suggestedMax: 30
                            }
                        }]
                    }
                }
            });
        });
    setTimeout(Graph_and_data, 3600000);
}
Graph_and_data();