$(document).ready(function(){
    $('#btnLoad').on('click',function(){
        const cityUrl = 'https://openweathermap.org/city/';
        let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=977ebd2623bf8fc4cc87024f01e7c019&q=';
        weatherUrl += $('#txtCity').val();
        weatherUrl += '&units=metric&lang=nl';
        $.ajax({
            url: weatherUrl,
            success: function(weather) {
                console.log(weather);
                let html = '<strong><a href="' + cityUrl + weather.id + '"';
                    html += 'target="_blank">' + weather.name;
                    html += '('+ weather.sys.country + ')</a></strong>';
                    html += ', temperature: ' + weather.main.temp + ' graden.<br />';
                    $('#divResult').append(html);
            }
        });
    });
});
