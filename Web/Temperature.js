function setTemperature() {

    fetch('http://88.85.146.56/JsonData.json')
        .then(function(response){
            return response.json()
        })
        .then(function (data) {

            console.log(JSON.stringify(data));
            let SensorData = JSON.stringify(data);
            let object = JSON.parse(SensorData);
            let temperature = object.temperature;
            let humidity = object.humidity;
            let datetime = object.datetime;
            document.getElementById('temp').innerHTML =  [temperature].join('') + ' °C';
            document.getElementById('humidity').innerHTML = [humidity].join('') + '%';
            document.getElementById('datetime').innerHTML = 'Last update: '+ [datetime].join('');
	    setTimeout(setTemperature, 60000);
    });
}
setTemperature();
