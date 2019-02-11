// e1a342dc3fe3e3603e1ad544f3cdb8dd : Open Weather Map API keys

// samples. 을 api.으로

// #1 - Current Weather
// https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=e1a342dc3fe3e3603e1ad544f3cdb8dd&units=metric
// #2 - 5 Days Weather & 3 Hours interval
// https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=e1a342dc3fe3e3603e1ad544f3cdb8dd&units=metric

var apiURL = "https://api.openweathermap.org/data/2.5/";
var appid = "e1a342dc3fe3e3603e1ad544f3cdb8dd";
var units = "metric";
var files = ["weather", "forecast"];

// modal init
$.ajax({
    type: "get",
    url: "../json/city.json",
    dataType: "json",
    success: function (data) {
        var html = '<option value = "">도시를 선택하세요.</option>';
        // console.log(data.cities[0].name);
        for (var i in data.cities) {
            html += '<option value= "' + data.cities[i].id + '">';
            html += data.cities[i].name + ' [' + data.cities[i].id + ']</option>';
        }
        $("#city").html(html);
    }
});