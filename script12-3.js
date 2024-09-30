$(document).ready(function(){
    $('#btnLoad').on('click',function(){
        let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={977ebd2623bf8fc4cc87024f01e7c019}';
        weatherUrl += $('#txtCity').val();
        $.ajax({
            url: weatherUrl,
            success: function(weather) {
                console.log(weather);
            }
        });
    });
});